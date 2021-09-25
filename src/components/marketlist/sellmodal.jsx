import React from 'react'
import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import "../../styles/button.css"
import BuyModal  from "./sellmodal"
function SellModal(props) {
	const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Modal
      {...props}
      size="md"
      aria-labelledby="sell-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="sell-modal">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default SellModal