import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const BloodForm = ({showBlood , back , close}) => {
    const [title , setTitle] = useState('');
    const [type , setBloodType] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () =>{
        setShowAlert(false);
        setAlertMessage('');
        setTitle('');
        setBloodType('');
        setAdditionalDetails('');
        close();
        
    };
    const handleSubmit = () =>{
        setAlertMessage('Post Added Successfully');
        setShowAlert(true);
        setSuccess(true);
        setTimeout(() => {
            setShowAlert(false);
            setAlertMessage('');
            setTitle('');
            setBloodType('');
            setAdditionalDetails('');
            close();
        } ,10000);
    }

    const [isSuccess , setSuccess] = useState(false);

  return (
    <>
        <Modal show={showBlood} onHide={handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>Blood Donation Form</Modal.Title>
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
    
                <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Blood Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Blood Type" value={type} onChange={(e) => setBloodType(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control type="text" placeholder="Enter Additional Details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
    
               
            </Form>
            </Modal.Body>
            <Modal.Footer onSubmit={handleSubmit}>
            
            <Button variant="secondary" onClick={() => {back(); handleClose}}>
              Back
            </Button>
            <Button type="submit"  variant="primary" onClick={handleSubmit} >
              Save Changes
            </Button>
            
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default BloodForm
