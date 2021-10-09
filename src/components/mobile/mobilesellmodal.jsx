import {useState} from 'react'
import {Modal,Button, Image} from 'react-bootstrap'
import EuroUsd from "../../images/eurousd.png" 
import MobileSidebar from "../sidemenu/mobilesidebar"
import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../styles/modalpopup.css"

import ModalCloseBtn from "../icons/modalclosebutton.svg"
import AssetBalaance from "../marketlist/assetbalance"
import {useSelector, useDispatch} from 'react-redux'
import {update, edit,increaselots,increasestoplevel,  decreasestoplevel,  resetstoplevel, decreaselots, changeChart,toggleMobileMenu, switchMobileView} from "../../store/slice"

function MobileSellModal(props) {
    const [tabBg, setTabBg]  = useState(false);
    const toggleTab =()=>{
      setTabBg(!tabBg);
    }
    const onHide = props.onHide;
   const orderDetails = useSelector(state=>state.order.asset);
     const dispatch = useDispatch();

     var lots_margin_value = orderDetails.priceOpen;
      var stop_level_value = orderDetails.stops_level;
     const [step, setStep] = useState(1);
     const [stopLevel, setStopLevel] = useState(1);
     const [profitLossSwitch, setProfitLossSwitch]= useState(false);
     const lotsStep = 1;
     const unitStep = 1000;
     const amountMultiplier = 100;
     const ratingMultiplier = 0.01;

     const chanegeStep=(newStep)=>{

    
      setTabBg(!tabBg);
      setStep(newStep);

    }
    const changeMultiplier  = (newMultiplier)=>{
      setProfitLossSwitch(!profitLossSwitch);
      setStopLevel(newMultiplier);

    }
      const inputSelectionChange=(e)=>{
        const {name, value} = e.target;
        if(value==='rating'){
          changeMultiplier(ratingMultiplier);

        }
        else if(value==='amount'){
          changeMultiplier(amountMultiplier);
        }
      }
     
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="buy-modal"
      centered
       animation={true}
        scrollable={true}

    >
      <Modal.Header >
        <Modal.Title id="buy-modal" >

          <div className="buy-popup-header">
          <div>
          </div>
          <div className="buy-popup-header-detail">
          <span> Sell(EUROUSD)</span>
          
          </div>
          </div>
          

        </Modal.Title>
          <button className="modal-close" onClick={onHide}>  
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></button>
          
      </Modal.Header>
      <Modal.Body>
       <div>

      <div className="buy-sell-item-container">
        <span>Asset</span><span>EURUSDecn</span>
      </div>
      <div className="buy-sell-item-container">
        <span>Type</span><span>Sell</span>
      </div>
      <div className="buy-sell-item-container">
        <span>Rate</span><span>1.2345</span>
      </div>
      <div className="buy-sell-item-container">
        <span>Amount</span>

        <div className="mobile-chart-sell-buy-field-input">
        <div className="amount-column-items">
        
         <div className="amount-radio">
            <div className="amount-radio"> <input type="radio" name="amounttype" checked={tabBg?false:true}  onClick={()=>chanegeStep(lotsStep)}/><span>Lot</span></div>
            <div className="amount-radio"><input type="radio" name="amounttype" checked={tabBg?true:false} onClick={()=>chanegeStep(unitStep)}/><span>Units</span></div>
        </div>
         
         <div className="new-volume-field">

         <button className="new-volume-field-button new-volume-field-button__dec" onClick={()=>dispatch(decreaselots())}></button> 
          <input type="text" className="new-volume-field-input" value={lots_margin_value*step} />
          <button className="new-volume-field-button new-volume-field-button__inc" onClick={()=>dispatch(increaselots())}></button>
        </div>
         
         <div className="lots-unit-status">
      {tabBg&&(<span>Lots:{lots_margin_value}</span>)}
    {!tabBg&&(<span>Units:{lots_margin_value*unitStep}</span>)}</div>

         </div>

         </div>
      </div>
      <div className="confirm-cancel-button-container" > 
        <button className="button button__green"> confirm</button> 
        <button className="button button__red"  onClick={onHide}>cancel</button>
      </div>


       </div>
      </Modal.Body>
      
    </Modal>
  );
}

export default MobileSellModal;









