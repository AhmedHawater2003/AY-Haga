import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function NewPostModal() {
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
          This is a alert—check it out!
        </Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
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

export default NewPostModal;