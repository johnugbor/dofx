import logo from "../../logo.svg";
import "../../styles/desktheader.css";
import { toggleMenu } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
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
} from "../utilities/endpoints";
import {
  setAccessTokenUuid,
  setProfile,
  setFinPanel,
  setBalance,
} from "../../store/slice";
function DesktHeader(props) {
  const dispatch = useDispatch();
  const settings__opened = useSelector((state) => state.menu.settings_opened);
  const balance = useSelector((state) => state.balance.balance);
  const financepanel = useSelector((state) => state.financepanel.financepanel);
  const authTokens = useSelector((state) => state.access.access).token;
  const toggleSideBar = () => {
    dispatch(toggleMenu(!settings__opened));
  };
  let { sidebarstate } = props;
  let { toggleSettings } = props;
  const setCurrentBalance = async () => {
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

  const setFinancepanel = async () => {
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
    setCurrentBalance();
    setFinancepanel();
  }, [authTokens]);
  return (
    <>
      <div className="app-header">
        <div className="header-logo">
          <div>
            <img src={logo} className="logo-image" />
          </div>
        </div>

        <div className="header-right-inner">
          <div className="header-balances">
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Balance</span>
              </div>
              <div className="balance">${balance}</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Equity</span>
              </div>
              <div className="balance">$0.00</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Used Margin</span>
              </div>
              <div className="balance">${financepanel.usedmargin}</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Free Margin</span>
              </div>
              <div className="balance">${balance}</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Margin Level</span>
              </div>
              <div className="balance">0%</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Credit</span>
              </div>
              <div className="balance">$0</div>
            </div>
            <div className="header-balances-item">
              <div className="header-balances-item-title">
                <span>Open P&amp;L</span>
              </div>
              <div className="balance balance__red">${financepanel.profit}</div>
            </div>
          </div>

          <div
            className={`header-navigation ${
              settings__opened ? "settings__opened" : ""
            }`}
          >
            <div className=" header-navigation-item__user">
              <div
                className={`settings ${
                  settings__opened ? "settings__opened" : ""
                }`}
                onClick={() => toggleSideBar()}
              >
                <div className="settings-toggle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktHeader;
