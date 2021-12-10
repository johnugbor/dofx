import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import EuroUsd from "../../images/eurousd.png" 

import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../styles/modalpopup.css"

import ModalCloseBtn from "../icons/modalclosebutton.svg"
 
import {useSelector, useDispatch} from 'react-redux'
import {update, edit,increaselots,increasestoplevel,  decreasestoplevel,  resetstoplevel, decreaselots, changeChart} from "../../store/slice"
import { withdrawEndpoint } from "../utilities/endpoints";
import axios from "axios";
import {rootUrl} from "../utilities/constants";
import {useForm} from "react-hook-form";
import {Container,Image,Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
function WithdrawalModal(props) {
    const onHide = props.onHide;
    const balance = useSelector(state=>state.balance.balance)
    const authTokens = useSelector(state=>state.access.access).token
    const { register, handleSubmit, formState: { errors },getValues } = useForm();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetEmailSent, setResetEmailSent] = useState(false);

 const Withdraw =(item)=>{

    setIsLoading(true);
    axios.post(`${rootUrl}${withdrawEndpoint}`,item,{headers:
    {
      'Authorization' : `Bearer ${authTokens}`,
      'Content-Type' : 'application/json',
    }}).then(
      (resp)=>{
        if(resp.status === 200){
          setResetEmailSent(true);
      }
      else{ 
        setIsError(true)
      }
      })
    .catch(error=>{setIsError(true);
      setIsLoading(false);});
  }
  if(isResetEmailSent){
    return(<Container>
      <span className="reset-email-sent">
       Your withdraw was successfull </span>
        <Link to="/">IGMC Home  </Link>
    </Container>)
  }
  else{
  return ( 
    <Modal
      {...props}
      size="sm"
      aria-labelledby="deposit-modal"
      centered
       animation={true}
        scrollable
        contentClassName="deposit-modal-content"

    >
      <Modal.Header >
        <Modal.Title id="deposit-modal" >

          <div className="deposit-popup-header">
          <div>
          <span>Withdrawal</span>
          </div>
       
          </div>
          

        </Modal.Title>
          <button className="modal-close" onClick={onHide}>  
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></button>
          
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit(Withdraw)} className="auth-form">
      {isLoading&&<Image className="loadingspinner" src="/Iphone-spinner-2.gif"/>}
 {isError&&<div><p style={{ color: "red" }}>Error occured, retry</p></div>}

       <div className ="form-row form-margin margin-bottom">

                <div className ="col  password-field-container">
                 
                    <input type ="text" name ="amount" placeholder ="Amount in usd" 
                    
                    className ="form-control login-form-field-input" 
                     {...register("amount",{
                      required: "Amount is required.",
                      
                    })}/>
                     {errors.amount && (<p style={{ color: "red" }}> {
                        errors.amount.message}</p>)}
                </div>
                </div>
                <input type="submit" disabled ={isLoading} className="auth-button" value="Withdraw"/>

      </form>
        </Modal.Body>
      
    </Modal>
  );
}}

export default WithdrawalModal;

