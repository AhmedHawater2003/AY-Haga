import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import DonorRegForm from "./DonorRegForm";



const Register = () => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const handleClose = () => {setShow(false);setShowAlert(false);}
    const handleShow = () => setShow(true);
  
    const handleAlertClose = () => setShowAlert(false);
    const handleAlertShow = () => setShowAlert(true);
  
    const isSuccess = false;
  
    return (
      
        <>
            <DonorRegForm/>
                    
        </>
  
        
    );
}

export default Register;