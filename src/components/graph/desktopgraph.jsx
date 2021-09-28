import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import BuyButton from "../marketlist/buybutton"
import SellButton from "../marketlist/sellbutton"
import "../../styles/desktopchart.css" 
import {useSelector, useDispatch} from 'react-redux'
import Select from 'react-dropdown-select';
import {update, edit,increaselots, decreaselots, changeChart} from "../../store/slice"
const options = [
  { value: 'chocolateAMZN', label: 'AMZN' },
  { value: 'MSFT', label: 'MSFT' },
  { value: 'XRX', label: 'XRX' }
]


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
      borderColor: state.isFocused ? "#252d47" : "#252d47"
    }
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};
function Desktopgraph() {

	const onChange = (val)=>{
		console.log(val);
	}
	const orderDetail = useSelector(state=>state.order.asset);
	 const dispatch = useDispatch();
	return (
		<>
	<div className="chartcontainer"> 
		<div className="tradechart">
		<TradingViewWidget
		height = "450"
		width = "700"
    symbol={orderDetail.symbol}
    theme={Themes.DARK}
    locale="en"/>
    
  

  </div>
  
  <div className=" d-flex tradechart-buysell-buttons">
	<BuyButton/>
	<div className=" d-flex chart-margin-lots">
		

		<div className="lots-margin-mini d-flex flex-column justify-content-between ">
		<div className="pt-2"><span>Lots</span></div>
		<div className="pr-2"><span>Margin </span></div>
		</div>

		<div className="decinc-btn d-flex flex-column">

		<div className="field field__with-steps ">
		<button className="field-dec" onClick={()=>dispatch(decreaselots())} >
		</button>
		<div className="field-value">
		<input type="text" value={orderDetail.priceOpen}/>
		</div>
		<button className="field-inc" onClick={()=>dispatch(increaselots())}></button>
		</div>


		<div className="margin-chart-container-small">
			<span className="chart-margin-text">${orderDetail.priceOpen}</span>
		</div>

		</div>
		
	</div> 
	<SellButton/>
	</div>
	</div>
</>
		
	)
}

export default Desktopgraph