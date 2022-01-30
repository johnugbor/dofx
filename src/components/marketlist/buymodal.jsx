import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Image } from "react-bootstrap";
import EuroUsd from "../../images/eurousd.png";
import BuySellAmountField from "./buysellamountfield";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProfitLossDropdown from "./profitlossdropdown";
import "../../styles/modalpopup.css";
import BuyButton from "./buybutton";
import SellButton from "./sellbutton";
import BuySellIndicator from "./buysellindicator";
import ModalCloseBtn from "../icons/modalclosebutton.svg";
import AssetBalaance from "./assetbalance";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  edit,
  increaselots,
  increasestoplevel,
  decreasestoplevel,
  resetstoplevel,
  decreaselots,
  changeChart,
} from "../../store/slice";
import axios from "axios";
import { rootUrl } from "../utilities/constants";

import { buyEndpoint } from "../utilities/endpoints";
import { sellEndpoint } from "../utilities/endpoints";

function BuyModal(props) {
  const [tabBg, setTabBg] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [buySellTab, setBuySellTab] = useState(false);
  const toggleBuySellTab = () => {
    setBuySellTab(!buySellTab);
  };
  const onHide = props.onHide;

  const balance = useSelector((state) => state.balance.balance);
  const leverage = 1;

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const orderDetails = useSelector((state) => state.order.asset);
  const authTokens = useSelector((state) => state.access.access).token;
  const dispatch = useDispatch();
  var asset = orderDetails.displayName;
  var symbol = orderDetails.symbol;
  var assetimg = orderDetails.img;
  const [isOrderSent, setOrderSent] = useState(false);
  var price = orderDetails.price;
  var stop_level_value = orderDetails.stops_level;
  const [step, setStep] = useState(1);
  const [lots_margin_value, setLots_margin_value] = useState(1);
  const [stopLevel, setStopLevel] = useState(1);
  const [profitLossSwitch, setProfitLossSwitch] = useState(false);
  const lotsStep = 0.000001;
  const unitStep = 2;
  const amountMultiplier = 100;
  const ratingMultiplier = 0.01;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const chanegeStep = (newStep) => {
    setTabBg(!tabBg);
    setStep(newStep);
  };
  const donSubmit = (data) => console.log(data);
  const changeMultiplier = (newMultiplier) => {
    setProfitLossSwitch(!profitLossSwitch);
    setStopLevel(newMultiplier);
  };
  const inputSelectionChange = (e) => {
    const { name, value } = e.target;
    if (value === "rating") {
      changeMultiplier(ratingMultiplier);
    } else if (value === "amount") {
      changeMultiplier(amountMultiplier);
    }
  };
  const closeModal = () => {
    onHide();
    setPurchaseSuccess(false);
  };
  const Buy = (item) => {
    setIsLoading(true);

    axios
      .post(`${rootUrl}${buyEndpoint}`, item, {
        headers: {
          Authorization: `Bearer ${authTokens}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setOrderSent(true);
          setPurchaseSuccess(true);
          setIsLoading(false);
        } else {
          console.log(resp);
          setErrorMessage(true);
          setIsError(true);
        }
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const Sell = (item) => {
    setIsLoading(true);
    axios
      .post(`${rootUrl}${sellEndpoint}`, item, {
        headers: {
          Authorization: `Bearer ${authTokens}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setOrderSent(true);
          setPurchaseSuccess(true);
          setIsLoading(false);
        } else {
          setIsError(true);
          setErrorMessage(resp.error_msg);
        }
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      className="modal"
      aria-labelledby="buy-modal"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title id="buy-modal">
          <div className="buy-popup-header">
            <div>
              {purchaseSuccess ? (
                ""
              ) : (
                <i>
                  <Image className="curency-icon" src={assetimg} alt=""></Image>
                </i>
              )}
            </div>
            {purchaseSuccess ? (
              ""
            ) : (
              <div className="buy-popup-header-detail">
                <span> {asset}</span>
                <span className="utxt"> Current market: {price} </span>
              </div>
            )}
          </div>
        </Modal.Title>
        <button className="modal-close" onClick={() => closeModal()}>
          {" "}
          {isLoading ? "disabled" : ""}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
          </svg>
        </button>
      </Modal.Header>
      {purchaseSuccess ? (
        <div>
          <p className="p-5">Successfull</p>
          <Button className="ml-5 mb-5" onClick={() => closeModal()}>
            <h3>OK</h3>
          </Button>
        </div>
      ) : (
        <Modal.Body>
          <div>
            {" "}
            {isLoading && (
              <Image className="loadingspinner" src="/Iphone-spinner-2.gif" />
            )}
          </div>
          <div>{errorMessage && <p>Insufficient fund</p>}</div>
          <div className="d-flex w-100 justify-content-between  border border-white my-0 tab-shadow">
            <Button
              className={`w-50 ${buySellTab ? "buy-tab " : "sell-tab "}`}
              disabled={buySellTab ? false : true}
              onClick={() => toggleBuySellTab()}
            >
              <h3>Buy</h3>
            </Button>
            <Button
              className={`w-50 border border-left-4 border-top-0 border-bottom-0 border-right-0 ${
                buySellTab ? "sell-tab" : "buy-tab"
              }`}
              disabled={buySellTab ? true : false}
              onClick={() => toggleBuySellTab()}
            >
              <h3 className="pl-1">Sell</h3>
            </Button>
          </div>
          <AssetBalaance />
          {buySellTab ? (
            <>
              <div>
                <div className="two-div-row-flex">
                  <div className="lots-tab">
                    {/* <span> Amount</span> */}
                    <div className="lots-tab-btns tab-shadow">
                      <Button
                        className={tabBg ? "unit-btn " : "lots-btn "}
                        disabled={tabBg ? false : true}
                        onClick={() => chanegeStep(lotsStep)}
                      >
                        Lots
                      </Button>
                      <Button
                        className={tabBg ? "lots-btn" : "unit-btn"}
                        disabled={tabBg ? true : false}
                        onClick={() => chanegeStep(unitStep)}
                      >
                        Units{" "}
                      </Button>
                    </div>
                    <div className="lots-unit-status">
                      <span> Amount</span>
                      <span>($) {lots_margin_value * unitStep * price}</span>
                    </div>
                  </div>

                  <div>
                    <div class="chart-sell-buy-field-input">
                      <div class="field field__with-steps field__disabled">
                        <button
                          class="field-dec"
                          onClick={() => dispatch(decreaselots())}
                        ></button>
                        <div class="field-value">
                          <input
                            type="text"
                            disabled=""
                            value={lots_margin_value * step || 0}
                          />
                        </div>
                        <button
                          class="field-inc"
                          onClick={() => dispatch(increaselots())}
                        ></button>
                      </div>
                      <div className="lots-unit-status">
                        {tabBg && <span>Lots: {lots_margin_value}</span>}
                        {!tabBg && (
                          <span>Units: {lots_margin_value * unitStep}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="two-div-row-flex">
                  <div>
                    <select
                      name="amountratingsetter"
                      className="form-control sl-dropdown"
                      onChange={(e) => inputSelectionChange(e)}
                    >
                      <option value="rating">Rating</option>
                      <option value="amount">Amount</option>
                    </select>
                    <div className="lots-unit-status">
                      <span> Stop Loss(SL)</span>
                    </div>
                  </div>

                  <div>
                    <div class="chart-sell-buy-field-input">
                      <div class="field field__with-steps field__disabled">
                        <button
                          class="field-dec"
                          onClick={() => dispatch(decreasestoplevel())}
                        ></button>

                        <div class="field-value">
                          <input
                            type="text"
                            disabled=""
                            placeholder="Set"
                            value={stop_level_value * stopLevel || 0}
                          />
                        </div>
                        <button
                          class="field-inc"
                          onClick={() => dispatch(increasestoplevel())}
                        ></button>
                      </div>

                      <input
                        type="hidden"
                        disabled=""
                        name="sl"
                        placeholder="Set"
                        value={stop_level_value * amountMultiplier || 0}
                        className="form-control login-form-field-input"
                      />
                      <div className="lots-unit-status">
                        {!profitLossSwitch && (
                          <>
                            <span>Profit/Loss: </span>
                            <span className="profit_and_loss">
                              {stop_level_value * amountMultiplier}${" "}
                            </span>{" "}
                          </>
                        )}
                        {profitLossSwitch && (
                          <>
                            <span>Profit/Loss: </span>
                            <span className="profit_and_loss">
                              {stop_level_value * ratingMultiplier}
                            </span>{" "}
                          </>
                        )}
                      </div>

                      {!orderDetails.stops_level}
                    </div>
                  </div>
                </div>

                <hr className="white-horizontal-line" />

                <div
                  className="d-flex 
                justify-content-between 
                 "
                ></div>
              </div>{" "}
              <Button
                className="sell-button w-100"
                {...(isLoading ? "disabled" : "")}
                onClick={() =>
                  Sell({
                    sl: stop_level_value * amountMultiplier || 0,
                    volume: lots_margin_value * unitStep,
                    symbol: symbol,
                  })
                }
              >
                Sell
              </Button>
            </>
          ) : (
            <>
              <div>
                <div className="two-div-row-flex">
                  <div className="lots-tab">
                    {/* <span> Amount</span> */}
                    <div className="lots-tab-btns tab-shadow">
                      <Button
                        className={tabBg ? "unit-btn " : "lots-btn "}
                        disabled={tabBg ? false : true}
                        onClick={() => chanegeStep(lotsStep)}
                      >
                        Lots
                      </Button>
                      <Button
                        className={tabBg ? "lots-btn" : "unit-btn"}
                        disabled={tabBg ? true : false}
                        onClick={() => chanegeStep(unitStep)}
                      >
                        Units{" "}
                      </Button>
                    </div>
                    <div className="lots-unit-status">
                      <span> Amount</span>
                      <span>($) {lots_margin_value * unitStep * price}</span>
                    </div>
                  </div>

                  <div>
                    <div class="chart-sell-buy-field-input">
                      <div class="field field__with-steps field__disabled">
                        <button
                          class="field-dec"
                          onClick={() => dispatch(decreaselots())}
                        ></button>
                        <div class="field-value">
                          <input
                            type="text"
                            disabled=""
                            value={lots_margin_value * step || 0}
                          />
                        </div>
                        <button
                          class="field-inc"
                          onClick={() => dispatch(increaselots())}
                        ></button>
                      </div>
                      <div className="lots-unit-status">
                        {tabBg && <span>Lots: {lots_margin_value}</span>}
                        {!tabBg && (
                          <span>Units: {lots_margin_value * unitStep}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="two-div-row-flex">
                  <div>
                    <select
                      className="form-control sl-dropdown"
                      onChange={(e) => inputSelectionChange(e)}
                    >
                      <option value="rating">Rating</option>
                      <option value="amount">Amount</option>
                    </select>
                    <div className="lots-unit-status">
                      <span> Stop Loss(SL)</span>
                    </div>
                  </div>

                  <div>
                    <div class="chart-sell-buy-field-input">
                      <div class="field field__with-steps field__disabled">
                        <button
                          class="field-dec"
                          onClick={() => dispatch(decreasestoplevel())}
                        ></button>

                        <div class="field-value">
                          <input
                            type="text"
                            disabled=""
                            placeholder="Set"
                            value={stop_level_value * stopLevel || 0}
                          />
                        </div>
                        <button
                          class="field-inc"
                          onClick={() => dispatch(increasestoplevel())}
                        ></button>
                      </div>

                      <input
                        type="hidden"
                        disabled=""
                        name="sl"
                        placeholder="Set"
                        value={stop_level_value * amountMultiplier || ""}
                        className="form-control login-form-field-input"
                      />
                      <div className="lots-unit-status">
                        {!profitLossSwitch && (
                          <>
                            <span>Profit/Loss: </span>
                            <span className="profit_and_loss">
                              {stop_level_value * amountMultiplier}${" "}
                            </span>{" "}
                          </>
                        )}
                        {profitLossSwitch && (
                          <>
                            <span>Profit/Loss: </span>
                            <span className="profit_and_loss">
                              {stop_level_value * ratingMultiplier}
                            </span>{" "}
                          </>
                        )}
                      </div>

                      {!orderDetails.stops_level}
                    </div>
                  </div>
                </div>

                <hr className="white-horizontal-line" />

                <div
                  className="d-flex 
                justify-content-between 
                 "
                ></div>
              </div>

              <Button
                className="buy-button w-100"
                {...(isLoading ? "disabled" : "")}
                onClick={() =>
                  Buy({
                    sl: stop_level_value * amountMultiplier || 0,
                    volume: lots_margin_value * unitStep,
                    symbol: symbol,
                  })
                }
              >
                Buy
              </Button>
            </>
          )}
        </Modal.Body>
      )}
    </Modal>
  );
}

export default BuyModal;
