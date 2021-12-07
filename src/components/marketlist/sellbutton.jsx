import React from 'react'
import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import "../../styles/button.css"
import BuyModal  from "./buymodal"

function SellButton(props) {
	const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button  className="sell-button" onClick={() => setModalShow(true)}>
        Sell
      </Button>

      <BuyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default SellButton
