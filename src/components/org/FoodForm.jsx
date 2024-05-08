import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


const FoodForm = ({showFood , back , close}) => {
    const [title , setTitle] = useState('');
    const [quantity , setQuantity] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => {
        setShowAlert(false);
        setAlertMessage('');
        setTitle('');
        setQuantity('');
        setAdditionalDetails('');
        close();
    };

    const handleSubmit =(event) => {
        event.preventDefault();
        setAlertMessage('Post Added Successfully');
        setShowAlert('true');
        setSuccess(true);
        setTimeout(() => {
            setShowAlert(false);
            setAlertMessage('');
            setTitle('');
            setQuantity('');
            setAdditionalDetails('');
            close();
        } ,10000);
    };

    const [isSuccess,setSuccess] = useState(false);


  return (
    <>
        <Modal show={showFood} onHide={handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>Food Donation Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
                {alertMessage}
            </Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter quantity in KG if fruits and vegetables and amount for the rest" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter additional details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
      
    </>
  )
}

export default FoodForm
