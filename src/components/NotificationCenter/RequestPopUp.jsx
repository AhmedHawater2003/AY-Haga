import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RequestPopUp = ({ show, back }) => {
  const handleClose = () => {
    back();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          hello i wanted to fulfill this donation post need with : details
          <Button>schedule delivery timing</Button>
          {/* <div className="border rounded border-1 m-2">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ justifyContent: "center" }}>
            {" "}
            Donate{" "}
          </Accordion.Header>
          <Accordion.Body>
            <Form
              className="d-flex flex-column justify-content-center"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> Quantity </Form.Label>
                <Form.Control type="number" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a quantity.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Type Of Transportation</Form.Label>
                <select
                  className="form-select"
                  value={transportationType}
                  onChange={(event) =>
                    setTransportationType(event.target.value)
                  }
                  required
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="Truck">Truck</option>
                  <option value="Car">Car</option>
                  <option value="Momotorcycle">Momotorcycle</option>
                </select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> Time Slot </Form.Label>
                <Form.Control type="datetime-local" required />
                <Form.Control.Feedback type="invalid">
                  Please choose a time slot.
                </Form.Control.Feedback>
              </Form.Group>
              {!alertFlag && (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
            </Form>
            <Alert
              variant="success"
              style={{ marginTop: "10px", textAlign: "center" }}
              show={alertFlag}
            >
              Thank you for your donation &#128154;
            </Alert>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div> */}
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
