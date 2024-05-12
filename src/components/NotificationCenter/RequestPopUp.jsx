import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../Donation/customStyle.css";
import { useState } from "react";

const RequestPopUp = ({ show, back }) => {
  const [validated, setValidated] = useState(false);
  const [alertFlag, setAlertFlag] = useState(false);

  const handleClose = () => {
    back();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(false);
      event.target.reset();
      setAlertFlag(true);
      setTimeout(() => {
        setAlertFlag(false);
        handleClose();
      }, 2000);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>
            hello i wanted to fulfill this donation post need with : details
            </h3>
          </div>
          <Form
            className="d-flex flex-column justify-content-center"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Schedule Pickup </Form.Label>
              <Form.Control type="datetime-local" required />
              <Form.Control.Feedback type="invalid">
                Please choose a time slot.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
              <Form.Label>Acknowledge Donor Contributions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter gentle message to the donor..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Alert
            variant="success"
            style={{ marginTop: "10px", textAlign: "center" }}
            show={alertFlag}
          >
            Donation scheduled&#128154;
          </Alert>
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

export default RequestPopUp;
