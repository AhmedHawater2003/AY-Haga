import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


const FoodForm = ({showFood , back , close}) => {
    const [title , setTitle] = useState('');
    const [quantity , setQuantity] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    //Errors
    const [titleError, setTitleError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    

    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const resetInsertions = () => {
        setTitleError('');
        setQuantityError('');
        setTitle('');
        setQuantity('');
        setAdditionalDetails('');
        setAlertMessage('');
        setShowAlert(false);
        setSuccess(false);
    }

    const handleClose = () => {
        resetInsertions();
        close();
    };

    const handleBack = () => {
        resetInsertions();
        back();
    }

    const handleSubmit = () =>{
        if(title === ''){
            setTitleError('Title is required');
        }
        else{
            setTitleError('');
        }
        if(quantity === ''){
            setQuantityError('Quantity is required');
        }
        else{
            setQuantityError('');
        }
        if(title !== '' && quantity !== ''){
            setAlertMessage('Post Submitted Successfully');
            setShowAlert(true);
            setSuccess(true);
            setTimeout(() => {
                handleClose();
            } ,10000);
        }
    }

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
                <Form.Label>Title
                    {titleError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} isInvalid={titleError} />
                <Form.Control.Feedback type="invalid">
                    {titleError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity
                    {quantityError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="number" placeholder="Enter quantity in KG if fruits and vegetables and amount for the rest" 
                                value={quantity} onChange={(e) => setQuantity(e.target.value)} isInvalid = {quantityError} />
                <Form.Control.Feedback type="invalid">
                    {quantityError}
                </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter additional details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleBack}>
                Back
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
            Submit Post
            </Button>
            </Modal.Footer>
        </Modal>
      
    </>
  )
}

export default FoodForm
