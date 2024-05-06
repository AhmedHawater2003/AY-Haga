import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";



const ClothingForm = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const handleClose = () => {setShow(false);setShowAlert(false);}
    const handleShow = () => setShow(true);
  
    const handleAlertClose = () => setShowAlert(false);
    const handleAlertShow = () => setShowAlert(true);
  
    const isSuccess = false;
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          New Post
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Clothing Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
            This is a alert—check it out!
          </Alert>}
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="post title"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="clothing type"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="age"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gender</Form.Label>
                <br/>
                {/* <Form.Control
                  type="radio"
                  placeholder="age"
                /> */}
                <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="quantity"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Season</Form.Label>
                {/* <Form.Control
                  type="text"
                  placeholder="clothing type"
                /> */}
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open to select season</option>
                    <option value="1">Summer</option>
                    <option value="2">Fall</option>
                    <option value="3">Winter</option>
                    <option value="4">Spring</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Material</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="clothing type"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Back
            </Button>
            <Button variant="primary" onClick={handleAlertShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ClothingForm;