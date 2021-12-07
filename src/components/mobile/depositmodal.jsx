import {useState} from 'react'
import {Modal,Button, Image} from 'react-bootstrap'
import EuroUsd from "../../images/eurousd.png" 

import { Dropdown, DropdownButton } from "react-bootstrap";

import "../../styles/modalpopup.css"

import ModalCloseBtn from "../icons/modalclosebutton.svg"

import {useSelector, useDispatch} from 'react-redux'
import {update, edit,increaselots,increasestoplevel,  decreasestoplevel,  resetstoplevel, decreaselots, changeChart} from "../../store/slice"

function DepositModal(props) {
    const onHide = props.onHide;
    
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
          <span>Deposit</span>
          </div>
       
          </div>
          

        </Modal.Title>
          <button className="modal-close" onClick={onHide}>  
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></button>
          
      </Modal.Header>
      <Modal.Body>
       <span>Deposit using our bank details </span></Modal.Body>
      
    </Modal>
  );
}

export default DepositModal;

