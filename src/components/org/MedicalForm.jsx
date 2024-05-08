
import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const MedicalForm = ({showMedical , back,close}) => {
    const [title,setTitle] = useState('');
    const [deviceType,setDeviceType] = useState('');
    const [use , setUse] = useState('');
    const [quantity,setQuantity] = useState('');
    const [photo , setPhoto] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => {
        setShowAlert(false);
        setAlertMessage('');
        setTitle('');
        setDeviceType('');
        setUse('');
        setQuantity('');
        setPhoto('');
        setAdditionalDetails('');
        close();
    };

    const handleSubmit =(event) => {
        event.preventDefault();
        if(quantity<1){
            setAlertMessage('Quantity Must be greater than 0');
            setShowAlert('true');
            setSuccess(false);
            // setTimeout(() => {
            //     setShowAlert(false);
            //     setAlertMessage('');
            // } ,10000);
        }
        else{
            clearTimeout();
            setAlertMessage('Post Added Successfully');
            setShowAlert('true');
            setSuccess(true);
            
            setTimeout(() => {
                
                close();
                setTitle('');
                setDeviceType('');
                setUse('');
                setQuantity('');
                setPhoto('');
                setAdditionalDetails('');
                setShowAlert(false);
                setAlertMessage('');
            } ,10000);
        }
    };

    const [isSuccess , setSuccess] = useState(false);


  return (
    <>
        <Modal show={showMedical} onHide={handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>Medical Donation Form</Modal.Title>
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
    
                <Form.Group className="mb-3" controlId="formBasicDeviceType">
                <Form.Label>Device Type</Form.Label>
                <Form.Control type="text" placeholder="Enter device type" value={deviceType} onChange={(e) => setDeviceType(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicUse">
                <Form.Label>Use</Form.Label>
                <Form.Control type="text" placeholder="Enter use" value={use} onChange={(e) => setUse(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={(e) => {
                    setQuantity(e.target.value);
                    setShowAlert(false);
                    setAlertMessage('');}} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" placeholder="Enter photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control type="text" placeholder="Enter additional details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
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

export default MedicalForm
