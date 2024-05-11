import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import GoogleLocator from "../GoogleLocator";
import { Spinner } from "react-bootstrap";

const VolunteerForm = ({showVolunteer , back , close}) => {
    const [type , setType] = useState('');
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    const [chose , setChose] = useState(false);
    const [additionalDetails , setAdditionalDetails] = useState('');

    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    //General Errors
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');


    const [subject , setSubject] = useState('');
    const [schoolName , setSchoolName] = useState('');
    const [schoolAddress , setSchoolAddress] = useState('');
    const [schoolContact , setSchoolContact] = useState('');
    // const [schoolLocationMarker , setSchoolLocationMarker] = useState('');
    const [numberOfStudents , setNumberOfStudents] = useState('');
    //Teacher Form Errors
    const [subjectError, setSubjectError] = useState('');
    const [schoolNameError, setSchoolNameError] = useState('');
    const [schoolAddressError, setSchoolAddressError] = useState('');
    const [schoolContactError, setSchoolContactError] = useState('');
    // const [schoolLocationMarkerError, setSchoolLocationMarkerError] = useState('');
    const [numberOfStudentsError, setNumberOfStudentsError] = useState('');


    const [patientName , setPatientName] = useState('');
    const [patientAge , setPatientAge] = useState('');
    const [patientGender , setPatientGender] = useState('');
    const [patientWeight , setPatientWeight] = useState('');
    const [medicalSpeciality , setMedicalSpeciality] = useState('');
    // const [patientLocation , setPatientLocation] = useState('');
    const [patientAddress , setPatientAddress] = useState('');
    //Doctor Form Errors
    const [patientNameError, setPatientNameError] = useState('');
    const [patientAgeError, setPatientAgeError] = useState('');
    const [patientGenderError, setPatientGenderError] = useState('');
    const [patientWeightError, setPatientWeightError] = useState('');
    const [medicalSpecialityError, setMedicalSpecialityError] = useState('');
    // const [patientLocationError, setPatientLocationError] = useState('');
    const [patientAddressError, setPatientAddressError] = useState('');

    

    
    const resetInsertions = () => {
        setTitle('');
        setDescription('');
        setSubject('');
        setSchoolName('');
        setSchoolAddress('');
        setSchoolContact('');
        // setSchoolLocationMarker('');
        setNumberOfStudents('');
        setPatientName('');
        setPatientAge('');
        setPatientGender('');
        setPatientWeight('');
        setMedicalSpeciality('');
        // setPatientLocation('');
        setPatientAddress('');
        setAdditionalDetails('');

        setTitleError('');
        setDescriptionError('');
        setSubjectError('');
        setSchoolNameError('');
        setSchoolAddressError('');
        setSchoolContactError('');
        // setSchoolLocationMarkerError('');
        setNumberOfStudentsError('');
        setPatientNameError('');
        setPatientAgeError('');
        setPatientGenderError('');
        setPatientWeightError('');
        setMedicalSpecialityError('');
        // setPatientLocationError('');
        setPatientAddressError('');

        setShowAlert(false);
        setAlertMessage('');
        setType('');
        setChose(false);


    }

    const handleSubmit = () => {
        if(type === ''){
            setAlertMessage('Please Select a Volunteer Type');
            setShowAlert(true);
            setSuccess(false);
        }
        if (type ==='Teacher'){
            if(title === ''){
                setTitleError('Title is required');
            }
            else{
                setTitleError('');
            }
            if(description === ''){
                setDescriptionError('Description is required');
            }
            else{
                setDescriptionError('');
            }
            if(subject === ''){
                setSubjectError('Subject is required');
            }
            else{
                setSubjectError('');
            }
            // if(schoolName === ''){
            //     setSchoolNameError('School Name is required');
            // }
            // else{
            //     setSchoolNameError('');
            // }
            if(schoolAddress === ''){
                setSchoolAddressError('Address is required');
            }
            else{
                setSchoolAddressError('');
            }
            if(schoolContact === ''){
                setSchoolContactError('Contact Number is required');
            }
            else{
                setSchoolContactError('');
            }
            // if(schoolLocationMarker === ''){
            //     setSchoolLocationMarkerError('School Location Marker is required');
            // }
            // else{
            //     setSchoolLocationMarkerError('');
            // }
            if(numberOfStudents === ''){
                setNumberOfStudentsError('Number Of Students is required');
            }
            else{
                setNumberOfStudentsError('');
            }
        }
        if(type === 'Doctor'){
          
            if(title === ''){
                setTitleError('Title is required');
            }
            else{
                setTitleError('');
            }
            if(description === ''){
                setDescriptionError('Description is required');
            }
            else{
                setDescriptionError('');
            }
            if(patientName === ''){
                setPatientNameError('Patient Name is required');
            }
            else{
                setPatientNameError('');
            }
            if(patientAge === ''){
                setPatientAgeError('Patient Age is required');
            }
            else{
                setPatientAgeError('');
            }
            if(patientGender === ''){
                setPatientGenderError('Patient Gender is required');
            }
            else{
                setPatientGenderError('');
            }
            if(patientWeight === ''){
                setPatientWeightError('Patient Weight is required');
            }
            else{
                setPatientWeightError('');
            }
            if(medicalSpeciality === ''){
                setMedicalSpecialityError('Medical Speciality is required');
            }
            else{
                setMedicalSpecialityError('');
            }
            // if(patientLocation === ''){
            //     setPatientLocationError('Patient Location is required');
            // }
            // else{
            //     setPatientLocationError('');
            // }
            if(patientAddress === ''){
                setPatientAddressError('Patient Address is required');
            }
            else{
                setPatientAddressError('');
            }

        }
        //Check if all useStates edited on events are not empty
        if((type === 'Teacher') && !(title === '' ) && !(description === '') && !(subject === '') 
        // && !(schoolName === '') 
      && !(schoolAddress === '') && !(schoolContact === '') && !(numberOfStudents === '')){
            setAlertMessage('Post Submitted Successfully!');
            setShowAlert(true);
            setSuccess(true);
            setTimeout(() => {       
                handleClose();
              }, 4000)
    
          }
          if((type === 'Doctor') && !(title === '' ) && !(description === '') && !(patientName === '') && !(patientAge === '') && !(patientGender === '') 
            && !(patientWeight === '') && !(medicalSpeciality === '') && !(patientAddress === '')){
            setAlertMessage('Post Submitted Successfully!');
            setShowAlert(true);
            setSuccess(true);
            setTimeout(() => {       
                handleClose();
              }, 4000)
            }
      
    }

    const handleBack = () => {
        resetInsertions();
        back();
    }
    const handleClose = () => {
      resetInsertions();
      close();
  }

  return (
    <>
        <Modal show={showVolunteer} onHide={handleClose} size="lg" scrollable={true} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
            <Modal.Title>Ask For Volunteers</Modal.Title>
        </Modal.Header>
        {showAlert&&<Alert style={{ textAlign: 'center'  }}  variant={(isSuccess)?'success':'danger'}>
                {alertMessage}. Redirecting <Spinner animation="border" size="sm" className="ms-2" />
            </Alert>}
        <Modal.Body onSubmit={handleSubmit}>
            {/* {showAlert && <Alert variant= {(isSuccess)? 'success':'danger'}>
                {alertMessage}
            </Alert>} */}
            <Form onSubmit = {handleSubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontSize:'25px' , fontWeight : "bold"}}>Volunteer As
                {(alertMessage && !chose)? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <br/>
                <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Teacher"
                  onChange={(event) => {setType(event.target.value); setChose(true) ; setAlertMessage('') ; setShowAlert(false) }}
                />
                <label
                  className="form-check-label"
                  htmlFor="inlineRadio1"
                  value = 'Teacher'
                >
                  Teacher
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Doctor"
                onChange={(event) => {setType(event.target.value); setChose(true) ; setAlertMessage('') ; setShowAlert(false)}}
                />
                <label className="form-check-label" htmlFor="inlineRadio1" value = 'Doctor' >
                  Doctor
                </label>
              </div>
              </Form.Group>
            </Form>
            {chose && 
                (type === 'Doctor') &&
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title
                  {titleError? <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Post Title"
                  value = {title}
                  onChange ={(event) => setTitle(event.target.value)}
                  isInvalid = {titleError}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {titleError}
                </Form.Control.Feedback>
              </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description
                  {descriptionError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description"
                  value = {description}
                  onChange ={(event) => setDescription(event.target.value)}
                  isInvalid = {descriptionError}
                />
                <Form.Control.Feedback type="invalid">
                  {descriptionError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Name
                  {patientNameError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Patient Name"
                  value = {patientName}
                  onChange ={(event) => setPatientName(event.target.value)}
                  isInvalid = {patientNameError}
                />
                <Form.Control.Feedback type="invalid">
                  {patientNameError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Age
                  {patientAgeError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Patient Age"
                  value = {patientAge}
                  onChange ={(event) => setPatientAge(event.target.value)}
                  isInvalid = {patientAgeError}
                />
                <Form.Control.Feedback type="invalid">
                  {patientAgeError}
                </Form.Control.Feedback>
                </Form.Group>
              <Form.Group >
                <Form.Label>Patient Gender 
                    {
                      patientGenderError ? <span className="text-danger"> *</span> : null
                    }
                   
                    </Form.Label> 
                <br/>
                <Form.Control.Feedback type = "invalid">
                  {patientGenderError}
                </Form.Control.Feedback>
                <div className="form-check form-check-inline">
                <Form.Check
                 // className="form-check-input "
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={patientGender === "Male"}
                  onChange={(event) => setPatientGender(event.target.value)}
                  // isInvalid={patientGenderError}
                /></div>
                 <div className="form-check form-check-inline">
                <Form.Check
                  //className="form-check-input"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={patientGender=== "Female"}
                  onChange={(event) => setPatientGender(event.target.value)}
                  // isInvalid={patientGenderError}
                  // feedback={patientGenderError}
                />
                
                </div>
                    {
                      patientGenderError && <br/>
                    }
                    {
                      patientGenderError &&  <label style={{color:'red' , fontSize : '14px'}} >Patient Gender is Required</label>
                    }
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Weight
                  {patientWeightError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Patient Weight"
                  value = {patientWeight}
                  onChange ={(event) => setPatientWeight(event.target.value)}
                  isInvalid = {patientWeightError}
                />
                <Form.Control.Feedback type="invalid">
                  {patientWeightError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group style={{width : '80%'}}  controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Location
                {/* {patientLocationError? <span className="text-danger"> *</span> : null} */}
              </Form.Label>
              <GoogleLocator />

              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Address
                  {patientAddressError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Patient Address"
                  value = {patientAddress}
                  onChange ={(event) => setPatientAddress(event.target.value)}
                  isInvalid = {patientAddressError}
                />
                <Form.Control.Feedback type="invalid">
                  {patientAddressError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Medical Speciality
                  {medicalSpecialityError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Medical Speciality"
                  value = {medicalSpeciality}
                  onChange ={(event) => setMedicalSpeciality(event.target.value)}
                  isInvalid = {medicalSpecialityError}
                />
                <Form.Control.Feedback type="invalid">
                  {medicalSpecialityError}
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter additional details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
                </Form> 
            }
            {
              chose && (type === 'Teacher') &&
              <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Title
                  {titleError? <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Post Title"
                  value = {title}
                  onChange ={(event) => setTitle(event.target.value)}
                  isInvalid = {titleError}
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {titleError}
                </Form.Control.Feedback>
              </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description
                  {descriptionError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description"
                  value = {description}
                  onChange ={(event) => setDescription(event.target.value)}
                  isInvalid = {descriptionError}
                />
                <Form.Control.Feedback type="invalid">
                  {descriptionError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Subject
                  {subjectError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  value = {subject}
                  onChange ={(event) => setSubject(event.target.value)}
                  isInvalid = {subjectError}
                />
                <Form.Control.Feedback type="invalid">
                  {subjectError}
                </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>School Name
                  {schoolNameError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="School Name"
                  value = {schoolName}
                  onChange ={(event) => setSchoolName(event.target.value)}
                  isInvalid = {schoolNameError}
                />
                <Form.Control.Feedback type="invalid">
                  {schoolNameError}
                </Form.Control.Feedback>
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address
                  {schoolAddressError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value = {schoolAddress}
                  onChange ={(event) => setSchoolAddress(event.target.value)}
                  isInvalid = {schoolAddressError}
                />
                <Form.Control.Feedback type="invalid">
                  {schoolAddressError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contact Number
                  {schoolContactError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Contact Number"
                  value = {schoolContact}
                  onChange ={(event) => setSchoolContact(event.target.value)}
                  isInvalid = {schoolContactError}
                />
                <Form.Control.Feedback type="invalid">
                  {schoolContactError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number Of Students
                  {numberOfStudentsError? <span className="text-danger"> *</span> : null}
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Number Of Students"
                  value = {numberOfStudents}
                  onChange ={(event) => setNumberOfStudents(event.target.value)}
                  isInvalid = {numberOfStudentsError}
                />
                <Form.Control.Feedback type="invalid">
                  {numberOfStudentsError}
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{width : '80%'}}  controlId="exampleForm.ControlInput1">
                <Form.Label>School Location
                  {/* {schoolLocationMarkerError? <span className="text-danger"> *</span> : null} */}
                </Form.Label>
                <GoogleLocator />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAdditionalDetails">
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter additional details" value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} />
                </Form.Group>
                </Form>
            }
        </Modal.Body>   
        <Modal.Footer onSubmit={handleSubmit}>
            <Button variant="secondary" onClick={() => {handleBack(); handleClose}}>
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

export default VolunteerForm
