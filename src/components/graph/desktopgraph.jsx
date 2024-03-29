import React, { useState } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import BuyButton from "../marketlist/buybutton";
import SellButton from "../marketlist/sellbutton";
import "../../styles/desktopchart.css";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-dropdown-select";
import EuroUsdIcon from "../../images/eurousd.png";
import {
  update,
  edit,
  increaselots,
  decreaselots,
  changeChart,
} from "../../store/slice";
import BuyModal from "../marketlist/buymodal";
const options = [
  { value: "chocolateAMZN", label: "AMZN" },
  { value: "MSFT", label: "MSFT" },
  { value: "XRX", label: "XRX" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#252d47",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#252d47" : "#252d47",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#252d47" : "#252d47",
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
};
function Desktopgraph() {
  const onChange = (val) => {
    console.log(val);
  };
  const [modalShow, setModalShow] = useState(false);
  const orderDetail = useSelector((state) => state.order.asset);
  console.log(orderDetail);
  const dispatch = useDispatch();
  return (
    <>
      <div className="chartcontainer">
        <div className="tradechart">
          <TradingViewWidget
            symbol={orderDetail.chart_symbol}
            theme={Themes.DARK}
            style="1"
            hide_top_toolbar="true"
            hide_legend="true"
            interval="1"
            locale="en"
            timezone="Europe/London"
            hideSideToolbar={false}
          />
        </div>

        <div className="">
          <div className="info d-flex tradechart-buysell-buttons">
            <div className="qt-box d-flex chart-margin-lots">
              <p>
                {" "}
                <img className="img-qt" src={orderDetail.img} alt="" />{" "}
                {orderDetail.name} ${orderDetail.price}
              </p>
            </div>
          </div>

          <div className=" d-flex tradechart-buysell-buttons">
            <input
              type="button"
              className="sell-button"
              onClick={() => setModalShow(true)}
              value="Sell"
            />

            <div className=" d-flex chart-margin-lots">
              <div className="lots-margin-mini d-flex flex-column justify-content-between ">
                <div className="lot pt-2">
                  <span>Lots</span>
                </div>
                <div className="margin pr-2">
                  <span>Margin </span>
                </div>
              </div>

              <div className="quick-inputs decinc-btn-d d-flex flex-column">
                <div className="field field__with-steps ">
                  <button
                    className="field-dec"
                    onClick={() => dispatch(decreaselots())}
                  ></button>
                  <div className="field-value">
                    <input type="text" value={orderDetail.price} />
                  </div>
                  <button
                    className="field-inc"
                    onClick={() => dispatch(increaselots())}
                  ></button>
                </div>

                <div className="margin-chart-container-small">
                  <span className="chart-margin-text">
                    ${orderDetail.price}
                  </span>
                </div>
              </div>
            </div>
            <BuyButton />
          </div>

          <BuyModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
}

export default Desktopgraph;
