import React from 'react'
import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import "../../styles/button.css"
import MobileSellModal  from "./mobilesellmodal"

function MobileSellButton() {
	const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button  className="mobile-sell-button" onClick={() => setModalShow(true)}>
        Sell
      </Button>

      <MobileSellModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default MobileSellButton