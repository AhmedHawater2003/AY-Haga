
import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Spinner } from "react-bootstrap";


const MedicalForm = ({showMedical , back,close}) => {
    const [title,setTitle] = useState('');
    const [deviceType,setDeviceType] = useState('');
    const [use , setUse] = useState('');
    const [quantity,setQuantity] = useState('');
    const [photo , setPhoto] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');

    //Errors
    const [titleError , setTitleError] = useState('');
    const [deviceTypeError , setDeviceTypeError] = useState('');
    const [useError , setUseError] = useState('');
    const [quantityError , setQuantityError] = useState('');
    const [photoError , setPhotoError] = useState('');

    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess , setSuccess] = useState(false);

    const resetInsertions = () => {
        setTitleError('');
        setDeviceTypeError('');
        setUseError('');
        setQuantityError('');
        setPhotoError('');
        setTitle('');
        setDeviceType('');
        setUse('');
        setQuantity('');
        setPhoto('');
        setAdditionalDetails('');
        setAlertMessage('');
        setShowAlert(false);
        setSuccess(false);
    }

    const handleBack = () => {
      resetInsertions();
      back();
    }

    const handleClose = () => {
        resetInsertions();
        close();
    };

    const handleSubmit = () => {
        if(title === ''){
            setTitleError('Title is required');
        }
        else{
            setTitleError('');
        }
        if(deviceType === ''){
            setDeviceTypeError('Device Type is required');
        }
        else{
            setDeviceTypeError('');
        }
        if(use === ''){
            setUseError('Use is required');
        }
        else{
            setUseError('');
        }
        if(quantity === ''){
            setQuantityError('Quantity is required');
        }
        else{
            setQuantityError('');
        }
        if(photo === ''){
            setPhotoError('Photo is required');
        }
        else{
            setPhotoError('');
        } 
        if(title !== '' && deviceType !== '' && use !== '' && quantity !== '' && photo !== ''){
            setAlertMessage('Post Submitted Successfully!');
            setShowAlert(true);
            setSuccess(true);
            setTimeout(() => {
                handleClose();
            } ,4000);
        }
    }
 
  return (
    <>
        <Modal show={showMedical} onHide={handleClose} scrollable >
            <Modal.Header closeButton>
            <Modal.Title>Medical Supplies</Modal.Title>
            </Modal.Header>
            {showAlert&&<Alert style={{ textAlign: 'center'  }}  variant={(isSuccess)?'success':'danger'}>
                {alertMessage}. Redirecting <Spinner animation="border" size="sm" className="ms-2" />
            </Alert>}
            <Modal.Body>
            {/* {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
                {alertMessage}
            </Alert>} */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title
                  {titleError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Post Title" value={title} onChange={(e) => setTitle(e.target.value)} isInvalid = {titleError} />
                <Form.Control.Feedback type="invalid">
                  {titleError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicDeviceType">
                <Form.Label>Device Type
                  {deviceTypeError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" 
                              placeholder="Enter Device Type" 
                              value={deviceType} 
                              onChange={(e) => setDeviceType(e.target.value)} 
                              isInvalid = {deviceTypeError}
                              />
                <Form.Control.Feedback type="invalid">
                  {deviceTypeError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicUse">
                <Form.Label>Use
                  {useError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Use" value={use} onChange={(e) => setUse(e.target.value)} isInvalid = {useError} />
                <Form.Control.Feedback type="invalid">
                  {useError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity Requested
                  {quantityError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="number" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} isInvalid = {quantityError} />
                <Form.Control.Feedback type="invalid">
                  {quantityError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Upload Photo of Requested Medical Supplies
                  {photoError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="file" placeholder="Upload Photo" value={photo} onChange={(e) => setPhoto(e.target.value)} isInvalid = {photoError}  accept=".png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .svg, .webp"/>
                <Form.Control.Feedback type="invalid">
                  {photoError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Additional Details (optional)" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer onSubmit={handleSubmit}>
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit"  variant="primary" onClick={handleSubmit} >
              Submit Post
            </Button>  
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default MedicalForm
