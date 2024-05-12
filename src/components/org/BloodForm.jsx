import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "../GoogleLocator";
import { Spinner } from 'react-bootstrap';

const BloodForm = ({showBlood , back , close}) => {
    const [title , setTitle] = useState('');
    const [type , setBloodType] = useState('');
    const [patientName , setPatientName] = useState('');
    const [hospitalName , setHospitalName] = useState('');
    const [hospitalArea , setHospitalArea] = useState('');
    const [governate , setGovernate] = useState(''); 
    // const [hospitalAddress , setHospitalAddress] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess , setSuccess] = useState(false);
    //Errors
    const [titleError, setTitleError] = useState('');
    const [typeError,setTypeError] = useState('');
    const [patientNameError , setPatientNameError] = useState('');
    const [hospitalNameError , setHospitalNameError] = useState('');
    const [hospitalAreaError , setHospitalAreaError] = useState('');
    const [governateError , setGovernateError] = useState(''); 
    // const [hospitalAddressError , setHospitalAddressError] = useState('');
    
    const resetInsertions = () => {
        setTitleError('');
        setTypeError('');
        setPatientNameError('');
        setHospitalNameError('');
        setHospitalAreaError('');
        setGovernateError('');
        // setHospitalAddressError('');
        setTitle('');
        setBloodType('');
        setPatientName('');
        setHospitalName('');
        setHospitalArea('');
        setGovernate('');
        // setHospitalAddress('');
        setAdditionalDetails('');
        setSuccess(false);
        setShowAlert(false);
        setAlertMessage('');
    }

    const handleClose = () =>{
        resetInsertions();
        close();
        
    };

    const handleBack = () =>{
      resetInsertions();
      back();
    } 

    const handleSubmit = () =>{
      if (title === '') {
        setTitleError('Title is required');
      } 
      else{
        setTitleError('');
      }
      if (type === ''){
        
        setTypeError('Blood Type is required');
        
      }
      else if(!(type === 'A+' || type === 'A-' || type === 'B+' || type === 'B-' || type === 'AB+' || type === 'AB-' || type === 'O+' || type === 'O-')){
        setTypeError('Blood Type is invalid');
      }
      else{
        setTypeError('');
      }
      if(patientName === ''){
        setPatientNameError('Patient Name is required');
      }
      else{
        setPatientNameError('');
      }
      if(hospitalName === ''){
        setHospitalNameError('Hospital Name is required');
      }
      else{
        setHospitalNameError('');
      }
      if(hospitalArea === ''){
        setHospitalAreaError('Hospital Area is required');
      }
      else{
        setHospitalAreaError('');
      }
      if(governate === ''){
        setGovernateError('Governate is required');
      }
      else{
        setGovernateError('');
      }
      
      if(!(title === '') && 
        (type === 'A+' || type === 'A-' || type === 'B+' || type === 'B-' || type === 'AB+' || type === 'AB-' || type === 'O+' || type === 'O-') && 
        !(patientName === '') && !(hospitalName === '') && !(hospitalArea === '') && !(governate === '')){
        setAlertMessage('Post Submitted Successfully!');
        setShowAlert(true);
        setSuccess(true);
        setTimeout(() => {
            resetInsertions();
            close();
        } ,4000);
      }

     
      

      //-------------------------------------------------------------------------------------
      //          Waiting for abdullah to return me the address from location marker
      // if(!hospitalAddress){
      //   setHospitalAddressError('Hospital Address is required');
      // }
      //-------------------------------------------------------------------------------------  
    }
    

    

  return (
    <>
   
        <Modal show={showBlood} onHide={handleClose} size="lg" scrollable >
            <Modal.Header closeButton>
            <Modal.Title>Blood Donation Form</Modal.Title>
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
                  {titleError? <span className="text-danger"> *</span> : null } 
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Post Title" value={title} onChange={(e) => {setTitle(e.target.value);}} isInvalid={titleError} />
                <Form.Control.Feedback type="invalid">
                  {titleError}
                </Form.Control.Feedback>

                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Blood Type  
                  {typeError? <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Blood Type (including RH type)" value={type} onChange={(e) => setBloodType(e.target.value)} isInvalid={typeError}/>
                <Form.Control.Feedback type = "invalid">
                  {typeError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPatientName">
                <Form.Label>Patient Name  
                  {patientNameError? <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} isInvalid={patientNameError} />
                <Form.Control.Feedback type="invalid">
                  {patientNameError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHospitalName">

                <Form.Label>Hospital Name 
                  {hospitalNameError? <span className="text-danger"> *</span> : null}
                   </Form.Label>
                <Form.Control type="text" placeholder="Enter Hospital Name" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} isInvalid={hospitalNameError}/>
                <Form.Control.Feedback type="invalid">
                  {hospitalNameError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHospitalArea">
                <Form.Label>Hospital Area  
                  {hospitalAreaError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Hospital Area" value={hospitalArea} onChange={(e) => setHospitalArea(e.target.value)} isInvalid = {hospitalAreaError} />
                <Form.Control.Feedback type="invalid">
                  {hospitalAreaError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGovernate">
                <Form.Label>Governate  
                  {governateError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Governate" value={governate} onChange={(e) => setGovernate(e.target.value)} isInvalid = {governateError} />
                <Form.Control.Feedback type="invalid">
                  {governateError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group   controlId="exampleForm.ControlInput1">
                <Form.Label>Hospital Address  
                  {/* {hospitalLocationError? <span className="text-danger"> *</span> : null} */}
                </Form.Label>
                <GoogleLocator />

                </Form.Group>

    
                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Additional Details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
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

export default BloodForm
