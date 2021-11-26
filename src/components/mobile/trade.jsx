import {useState} from 'react'
import "../../styles/button.css" 
import "../../styles/mobilesidemenu.css" 
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {useSelector, useDispatch} from 'react-redux'
import Select from 'react-dropdown-select';
import AssetBalaance from "../marketlist/assetbalance"
import EuroUsdIcon from "../../images/eurousd.png"
import MobileBuyButton from "./mobilebuybutton"
import MobileSellButton from "./mobilesellbutton"
import MobileSidebar from "../sidemenu/mobilesidebar"
import {update, edit,increaselots, decreaselots, changeChart,toggleMobileMenu, switchMobileView} from "../../store/slice"
import { FaBars,FaAngleDown} from "react-icons/fa";
import { MdClose,MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
function Trade() {
	const orderDetail = useSelector(state=>state.order.asset);
	 const menuStatus = useSelector(state=>state.mobilemenu.mobilemenu.status)
    const selectedMenu = useSelector(state=>state.mobilemenu.mobilemenu.currentView)
	const chartheight =window.outerHeight-200;
	 const dispatch = useDispatch();
	 let iconStyles = { color: "white", fontSize: "1.5em",width:"2em" };
	return (
		<div className="mobile-trade">
			
  






<header className="mobile-app-header">
	<div className="mobile-header">



		<div className="mobile-header-left">


			
			<div className="mobile-navigation ">

				<div className="mobile-navigation-hamburger mobile-menu-item-balance">
					<div className="mobile-hamburger"  onClick={()=>dispatch(toggleMobileMenu({"status":!menuStatus}))}>
					{menuStatus?<MdClose style={{color:'white'}} />:<FaBars />}
					</div>
				</div>

			 	<div className=""></div>
			</div>


   
 
			<div className="mobile-menu-item">
				<div className="mobile-menu-item-balance">
					<div className="">€0.00</div>
					<div className="">
						<span>Balance</span></div>
				</div>
				<div className="mobile-menu-item-balance">
					<div className="">€0.00</div>
					<div className="">
						<span>Free m</span>
				</div>
				</div>
				<div className="mobile-menu-item-balance">
					<div className="">
						<span className="">EUR 0.00
						</span>
					</div>
					<div className="">
						<span>Open P&amp;L</span>
					</div>
				</div>
			</div>



			
		</div>




			</div>



			</header>


















			<div >
				<Link to="/market" >
  	             <div className="mobile-trade-selector">
  	              <div className="tradechart-current-icon-mobile">
	  				<div className="chart-margin-lots-mobile">
	  					<img src={EuroUsdIcon} className="trade-icon"/>
	  				</div> 	
	  				<div className="chart-margin-lots-mobile">
	  					<p>eurusd</p> 
	  				</div>
	  			</div>
	  				<div className="arrowdown">
	  					<FaAngleDown style={iconStyles}/>
	  				</div>
	  			</div>
  				</Link>
  			</div>

  		<div className="mobile-chart-buysell-container">	
  		<div className="mobile-chart">
		<TradingViewWidget
		   height = {chartheight}
			width = "100%"
			interval = "1"
			timezone = "Europe/London"
			style = "1"
			hide_top_toolbar = "true"
			hide_legend = "true"
			container_id = "tradingview_47bf8"
   		 symbol="FX:EURUSD"
   		 theme={Themes.DARK}
    		locale="en"/>
    
  

  		</div>
  			
     
  		<div className=" mobile-buy-sell-footer mobile-buysell-button-group ">
<div><p className="chart-panel-money" >$4000</p></div>

<div className=" d-flex">
	<MobileSellButton/>


	<div className=" d-flex chart-margin-lots">
		


		<div className="mobile-decinc-btn d-flex flex-column">
			<span className="mobile-lots-string">LOTS</span>
		<div className="field field__with-steps ">
		

		<button className="field-dec" onClick={()=>dispatch(decreaselots())} >
		</button>


		<div className="field-value ">

		<input type="text" value={orderDetail.priceOpen}/>

		</div>

		<button className="field-inc" onClick={()=>dispatch(increaselots())}></button>
		
		</div>


		

		</div>
		
	</div> 



	<MobileBuyButton/>
</div>
</div>


<MobileSidebar/>

		</div>
		</div>
	)
}


export default Trade;