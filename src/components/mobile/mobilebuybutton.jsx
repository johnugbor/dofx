import {useState} from 'react'
import {Button} from 'react-bootstrap'

import "../../styles/button.css"
import MobileBuyModal  from "./mobilebuymodal"
function MobileBuyButton(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button  className="mobile-buy-button" onClick={() => setModalShow(true)}>
        Buy
      </Button>

      <MobileBuyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default MobileBuyButton;