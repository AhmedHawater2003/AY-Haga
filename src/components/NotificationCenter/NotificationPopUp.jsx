import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NotificationPopUp = ({ show,close, back }) => {
  const [showPop, setShowPop] = useState(false);
  const handleClose = () => {
    back();
  };
  const handleShow = () => {
    close();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Donation Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          hello i wanted to fulfill this donation post need with :
          details
          <Button>schedule delivery timing</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotificationPopUp;
