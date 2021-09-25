import {useState} from 'react'
import {Modal,Button, Image} from 'react-bootstrap'
import EuroUsd from "../../images/eurousd.png" 
import BuySellAmountField from  "./buysellamountfield"
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProfitLossDropdown from "./profitlossdropdown"
import "../../styles/modalpopup.css"
import BuyButton from "./buybutton"
import SellButton from "./sellbutton"
import BuySellIndicator from "./buysellindicator" 
import ModalCloseBtn from "../icons/modalclosebutton.svg"
import AssetBalaance from "./assetbalance"
import {useSelector, useDispatch} from 'react-redux'
import {update, edit,increaselots,increasestoplevel,  decreasestoplevel,  resetstoplevel, decreaselots, changeChart} from "../../store/slice"

function BuyModal(props) {
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
      size="md"
      aria-labelledby="buy-modal"
      centered
       animation={true}
        scrollable={true}

    >
      <Modal.Header >
        <Modal.Title id="buy-modal" >

          <div className="buy-popup-header">
          <div>
         <i><Image className="curency-icon" src={EuroUsd} alt="">< /Image></i>

          </div>
          <div className="buy-popup-header-detail">
          <span> EUROUSD</span>
          <span> Current market:</span>
          </div>
          </div>
          

        </Modal.Title>
          <button className="modal-close" onClick={onHide}>  
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></button>
          
      </Modal.Header>
      <Modal.Body>
       <div>



      
             <AssetBalaance/>

      
        <div className="two-div-row-flex">
          <div className="lots-tab">
              <span> Amount</span>
              <div className="lots-tab-btns">
                <Button className={tabBg?"unit-btn ":"lots-btn "}  disabled={tabBg?false:true} onClick={()=>chanegeStep(lotsStep)}>Lots</Button> 
                <Button className={tabBg?"lots-btn":"unit-btn"} disabled={tabBg?true:false} onClick={()=>chanegeStep(unitStep)}>Units </Button> 
              </div>
              <span>Asset leverage:1:32</span>
          </div>


        <div>
      <div class="chart-sell-buy-field-input">
    <div class="field field__with-steps field__disabled">
    <button class="field-dec" onClick={()=>dispatch(decreaselots())}></button>
    <div class="field-value">
    <input type="text" disabled="" value={lots_margin_value*step}/>
    </div><button class="field-inc" onClick={()=>dispatch(increaselots())}></button>
    </div>
    <div className="lots-unit-status">
      {tabBg&&(<span>Lots:{lots_margin_value}</span>)}
    {!tabBg&&(<span>Units:{lots_margin_value*unitStep}</span>)}</div>
    </div>

    </div>
    </div>
          

     <div className="two-div-row-flex">
          <div>
              <span className="span-sl"> Close at lose(SL)</span>
             <select name="SL" className ="form-control sl-dropdown"  
                              onChange={(e)=>inputSelectionChange(e)}>

                          <option   value = "rating">Rating</option>
                          <option   value = "amount">Amount</option>
                       
                      </select>
              
          </div>


        <div>
      <div class="chart-sell-buy-field-input">

    <div class="field field__with-steps field__disabled">
      <button class="field-dec" onClick={()=>dispatch(decreasestoplevel())}></button>
    <div class="field-value">
      <input type="text" disabled="" value={stop_level_value*stopLevel||"set"}/>
    </div>
      <button class="field-inc" onClick={()=>dispatch(increasestoplevel())}></button>
    </div>
    

    <div className="lots-unit-status">
      {!profitLossSwitch&&(<><span>Profit/Loss:</span><span className="profit_and_loss">{stop_level_value*amountMultiplier}$</span></>
        )}
    {profitLossSwitch&&(<><span>Profit/Loss:</span><span className="profit_and_loss">{stop_level_value*ratingMultiplier}</span></>)}</div>
    




    </div>


   {!orderDetails.stops_level|| <button className="order-row-col-clear" onClick={()=>dispatch(resetstoplevel())}> </button>}

    </div>
    </div>










      

<hr className="white-horizontal-line"/>


          





           <div className="d-flex 
              justify-content-between 
               ">

                <Button  className="buy-button" >
                    Buy
      </Button>

           <Button  className="sell-button" >
                  Sale
      </Button>

        </div> 




       </div>
      </Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
  );
}

export default BuyModal;

