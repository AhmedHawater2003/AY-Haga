import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const DeliveryPopUp = ({ show, back }) => {
  const handleClose = () => {
    back();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delivery Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Open the door! </h1>
          <p>I am in front of your door!</p>
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

export default DeliveryPopUp;
