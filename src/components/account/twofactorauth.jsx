import React, { useState, useEffect } from "react";
import "../../styles/login.css";
import LocalStorageService from "../utilities/localStorageService";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { rootUrl } from "../utilities/constants";
import { useForm } from "react-hook-form";
import {
  loginEndpoint,
  twofaEndpoint,
  loginAfterTwoFaEndpoint,
  financepanelEndpoint,
  balanceEndpoint,
  assetEndpoint,
} from "../utilities/endpoints";
import { updateAsset } from "../../store/slice";

import { useAuth, useUuid } from "../context/authcontext";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessTokenUuid,
  setProfile,
  setFinPanel,
  setBalance,
} from "../../store/slice";
const csrfToken = Cookies.get("csrftoken");
export default function TwoFactorAuth(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [switchPassView, setSwitchPassView] = useState(true);
  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const dispatch = useDispatch();
  const accessData = useSelector((state) => state.access.access);
  const authTokens = useSelector((state) => state.access.access).token;
  const togglePasswordField = () => {
    setSwitchPassView(!switchPassView);
  };
  const handleRemeberCheckBoxChange = () => {
    setRememberMeChecked(!rememberMeChecked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const logUserIn = (item) => {
    setIsError(false);
    setIsLoading(true);

    axios
      .post(`${rootUrl}${twofaEndpoint}`, item)
      .then((resp) => {
        if (resp.status === 200) {
          console.log("two fa verified");

          axios
            .post(`${rootUrl}${loginAfterTwoFaEndpoint}`, {
              email: accessData.recovery_email,
              password: accessData.token_identifier,
            })
            .then((resp) => {
              if (resp.status === 200) {
                console.log(resp.data);

                dispatch(
                  setAccessTokenUuid({
                    token: resp.data.access_token,
                    uuid: resp.data.user.id,
                    recovery_email: "",
                    token_identifier: "",
                    code_token: "",
                  })
                );

                dispatch(
                  setProfile({
                    full_name: resp.data.user.full_name,
                    email: resp.data.user.email,
                    phone: resp.data.user.phone_number,
                    currency: resp.data.user.currency,
                    country: resp.data.user.phone_number,
                  })
                );

                setToken(resp.data.access_token);
                setUuid(resp.data.user.id);
                setLoggedIn(true);
                setIsLoading(false);
              } else {
                setIsError(true);
              }
            })
            .catch((error) => {
              setIsError(true);
              setIsLoading(false);
            });
        } else {
          setIsError(true);
        }
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  const setToken = (data) => {
    localStorage.setItem("access_token", JSON.stringify(data));
    //this.setState({authTokens:token});
  };
  const setUuid = (data) => {
    localStorage.setItem("account_owner", JSON.stringify(data));
    //this.setState({userUuid:id});
  };

  const setAssetData = async () => {
    const response = await axios.get(`${rootUrl}${assetEndpoint}`, {
      headers: {
        Authorization: `Bearer ${authTokens}`,
        "Content-Type": "application/json",
      },
    });

    const status = await response.status;

    if (status === 200) {
      dispatch(updateAsset(response.data.data));
    }
  };
  const currentBalance = async () => {
    const response = await axios.get(`${rootUrl}${balanceEndpoint}`, {
      headers: {
        Authorization: `Bearer ${authTokens}`,
        "Content-Type": "application/json",
      },
    });

    const status = await response.status;

    if (status === 200) {
      console.log(response.data);
      dispatch(setBalance(response.data.data.balance));
    }
  };

  const financepanel = async () => {
    const response = await axios.get(`${rootUrl}${financepanelEndpoint}`, {
      headers: {
        Authorization: `Bearer ${authTokens}`,
        "Content-Type": "application/json",
      },
    });
    const status = await response.status;
    if (status === 200) {
      console.log(response.data);
      dispatch(
        setFinPanel({
          usedmargin: response.data.data.usedmargin,
          stoploss: response.data.data.stoploss,
          profit: response.data.data.profit,
        })
      );
    }
  };

  useEffect(() => {
    currentBalance();
    financepanel();
    setAssetData();
  }, [authTokens]);

  if (isLoggedIn) {
    return <Redirect push to={{ pathname: "/" }} />;
  } else {
    return (
      <Container className="login-panel">
        <Row>
          <Col className="login-panel-image "></Col>
          <Col className="login-panel-right">
            <Row>
              <h1>IGMC</h1>
            </Row>
            <h2 className="reset-password forgot-password-title">
              Two factor authentication
            </h2>
            {isLoading && (
              <Image className="loadingspinner" src="/Iphone-spinner-2.gif" />
            )}
            {isError && (
              <div>
                <p>Error occured, retry</p>
              </div>
            )}

            <form onSubmit={handleSubmit(logUserIn)} className="auth-form">
              <span className="whitingme">Code was sent to your email</span>

              <div className="form-row form-margin margin-bottom">
                <div className="col  password-field-container">
                  <input
                    type="hidden"
                    name="code_token"
                    value={accessData.code_token}
                    className="form-control login-form-field-input"
                    {...register("code_token")}
                  />
                </div>
              </div>

              <div className="form-row form-margin margin-bottom">
                <div className="col  password-field-container">
                  <input
                    type="text"
                    name="code"
                    placeholder="Code"
                    className="form-control login-form-field-input"
                    {...register("code", {
                      required: " Code is required",
                      pattern: {
                        value: "d[0-9]{7} ",
                        message: "invalid code",
                      },
                    })}
                  />
                  {errors.code && (
                    <p style={{ color: "red" }}> {errors.code.message}</p>
                  )}
                </div>
              </div>
              <input
                type="submit"
                disabled={isLoading}
                className="auth-button"
                value="SIGN IN"
              />
            </form>

            <div className="form-row login-link">
              <div>
                <Link to="/reset-password" className="IGMC-link">
                  <span>Forgot your password?</span>
                </Link>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
