import { useState } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import EuroUsd from "../../images/eurousd.png";

import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../styles/modalpopup.css";

import ModalCloseBtn from "../icons/modalclosebutton.svg";
import AssetBalaance from "../marketlist/assetbalance";
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
import { buyEndpoint } from "../utilities/endpoints";
import axios from "axios";
import { rootUrl } from "../utilities/constants";

function MobileBuyModal(props) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [isOrderSent, setOrderSent] = useState(false);
  const authTokens = useSelector((state) => state.access.access).token;

  const [tabBg, setTabBg] = useState(false);
  const toggleTab = () => {
    setTabBg(!tabBg);
  };
  const onHide = props.onHide;
  const orderDetails = useSelector((state) => state.order.asset);
  const dispatch = useDispatch();
  var symbol = orderDetails.symbol;
  var lots_margin_value = orderDetails.price;
  var stop_level_value = orderDetails.stops_level;
  const [step, setStep] = useState(1);
  const [stopLevel, setStopLevel] = useState(1);
  const [profitLossSwitch, setProfitLossSwitch] = useState(false);
  const lotsStep = 1;
  const unitStep = 1000;
  const amountMultiplier = 100;
  const ratingMultiplier = 0.01;

  const chanegeStep = (newStep) => {
    setTabBg(!tabBg);
    setStep(newStep);
  };
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
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="buy-modal"
      centered
      animation={true}
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title id="buy-modal">
          <div className="buy-popup-header">
            <div></div>
            <div className="buy-popup-header-detail">
              <span> Buy({orderDetails.name})</span>
            </div>
          </div>
        </Modal.Title>
        <button className="modal-close" onClick={onHide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
          </svg>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="buy-sell-item-container">
            <span>Asset</span>
            <span>{orderDetails.name}</span>
          </div>
          <div className="buy-sell-item-container">
            <span>Type</span>
            <span>Buy</span>
          </div>
          <div className="buy-sell-item-container">
            <span>Rate</span>
            <span>1.2345</span>
          </div>
          <div className="buy-sell-item-container">
            <span>Amount</span>

            <div className="mobile-chart-sell-buy-field-input">
              <div className="amount-column-items">
                <div className="amount-radio">
                  <div className="amount-radio">
                    {" "}
                    <input
                      type="radio"
                      name="amounttype"
                      checked={tabBg ? false : true}
                      onClick={() => chanegeStep(lotsStep)}
                    />
                    <span>Lot</span>
                  </div>
                  <div className="amount-radio">
                    <input
                      type="radio"
                      name="amounttype"
                      checked={tabBg ? true : false}
                      onClick={() => chanegeStep(unitStep)}
                    />
                    <span>Units</span>
                  </div>
                </div>

                <div className="new-volume-field">
                  <button
                    className="new-volume-field-button new-volume-field-button__dec"
                    onClick={() => dispatch(decreaselots())}
                  ></button>
                  <input
                    type="text"
                    className="new-volume-field-input"
                    value={lots_margin_value * step}
                  />
                  <button
                    className="new-volume-field-button new-volume-field-button__inc"
                    onClick={() => dispatch(increaselots())}
                  ></button>
                </div>

                <div className="lots-unit-status">
                  {tabBg && <span>Lots:{lots_margin_value}</span>}
                  {!tabBg && <span>Units:{lots_margin_value * unitStep}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="confirm-cancel-button-container">
            <button
              className="button button__green"
              onClick={() =>
                Buy({
                  sl: stop_level_value * amountMultiplier || 1,
                  volume: lots_margin_value * unitStep,
                  symbol: symbol,
                })
              }
            >
              {" "}
              confirm
            </button>
            <button className="button button__red" onClick={onHide}>
              cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MobileBuyModal;
