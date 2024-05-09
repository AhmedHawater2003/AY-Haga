import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";



const ClothingForm = ({showClothing , back , close}) => {
    const [title , setTitle] = useState('');
    const [type , setType] = useState('');
    const [age , setAge] = useState('');
    const [gender , setGender] = useState('');
    const [quantity , setQuantity] = useState('');
    const [season , setSeason] = useState('');
    const [material , setMaterial] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage , setAlertMessage] = useState('');
    const [isSuccess,setSuccess] = useState(false);

    //Errors
    const [titleError , setTitleError] = useState('');
    const [typeError , setTypeError] = useState('');
    const [ageError , setAgeError] = useState('');
    const [genderError , setGenderError] = useState('');
    const [quantityError , setQuantityError] = useState('');
    const [seasonError , setSeasonError] = useState('');
    const [materialError , setMaterialError] = useState('');

    
    const resetInsertions = () => {
        setTitleError('');
        setTypeError('');
        setAgeError('');
        setGenderError('');
        setQuantityError('');
        setSeasonError('');
        setMaterialError('');
        setTitle('');
        setType('');
        setAge('');
        setGender('');
        setQuantity('');
        setSeason('');
        setMaterial('');
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
      if(type === ''){
        setTypeError('Type is required');
      }
      else{
        setTypeError('');
      }
      if(age === ''){
        setAgeError('Age is required');
      }
      else{
        setAgeError('');
      }
      if(gender === ''){
        setGenderError('Gender is required');
      }
      else{
        setGenderError('');
      }
      if(quantity === ''){
        setQuantityError('Quantity is required');
      }
      else{
        setQuantityError('');
      }
      if(season === ''){
        setSeasonError('Season is required');
      }
      else{
        setSeasonError('');
      }
      if(material === ''){
        setMaterialError('Material is required');
      }
      else{
        setMaterialError('');
      }
      if(title !== '' && type !== '' && age !== '' && gender !== '' && quantity !== '' && season !== '' && material !== ''){
        setAlertMessage('Post Submitted Successfully');
        setShowAlert(true);
        setSuccess(true);
        setTimeout(() => {
            handleClose();
        } ,10000);

    }
  }

  
    
  
    return (
      <>
        
        
  
        <Modal show={showClothing} onHide={handleClose} size="lg" scrollable={true} onSubmit={handleSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Clothing Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showAlert&&<Alert variant={(isSuccess)?'success':'danger'}>
            {alertMessage}
          </Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title
                  {titleError?  <span className="text-danger"> *</span> : null }
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
                <Form.Label>Type
                  {typeError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="text"
                  value = {type}
                  onChange ={(event) => setType(event.target.value)}
                  placeholder="Enter Clothing Type"
                  isInvalid = {typeError}
                />
                <Form.Control.Feedback type="invalid">
                  {typeError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age
                  {ageError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  isInvalid = {ageError}
                />
                <Form.Control.Feedback type="invalid">
                  {ageError}
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gender</Form.Label>
                <br/>
                <Form.Control
                  type="radio"
                  placeholder="age"
                />
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(event) => setGender(event.target.value)}
                />
                <label
                  className="form-check-label"
                  htmlFor="inlineRadio1"
                  value = 'Male'
                >
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Female"
                onChange={(event) => setGender(event.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio1" value = 'Female'>
                  Female
                </label>
              </div>
              </Form.Group>*/}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantity Requested
                  {quantityError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChange ={(event) => setQuantity(event.target.value)}
                  isInvalid = {quantityError}
                />
                <Form.Control.Feedback type="invalid">
                  {quantityError}
                </Form.Control.Feedback>
              </Form.Group> 
              <Form.Group >
                <Form.Label> Gender 
                    {
                      genderError ? <span className="text-danger"> *</span> : null
                    }
                   
                    </Form.Label> 
                <br/>
                <Form.Control.Feedback type = "invalid">
                  {genderError}
                </Form.Control.Feedback>
                <div className="form-check form-check-inline">
                <Form.Check
                 // className="form-check-input "
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(event) => setGender(event.target.value)}
                  //isInvalid={genderError}
                /></div>
                 <div className="form-check form-check-inline">
                <Form.Check
                  //className="form-check-input"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={gender=== "Female"}
                  onChange={(event) => setGender(event.target.value)}
                  //isInvalid={genderError}
                  //feedback={genderError}
                />
                
                </div>
                    {
                      genderError && <br/>
                    }
                    {
                      genderError &&  <label style={{color:'red' , fontSize : '14px'}} >Gender is Required</label>
                    }
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Season
                  {seasonError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <select className="form-select" 
                        aria-label="Default select example" 
                        value={season} 
                        onChange={(event) => setSeason(event.target.value)} 
                        isInvalid = {seasonError}      
                >
                    <option value=''>Open to Select Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                    {
                      seasonError &&  <label style={{color:'red' , fontSize : '14px'}} >Season is Required</label>
                    }
                <Form.Control.Feedback type="invalid">
                  {seasonError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Material
                  {materialError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Clothing Type"
                  value={material}
                  onChange ={(event) => setMaterial(event.target.value)}
                  isInvalid = {materialError}
                />
                <Form.Control.Feedback type="invalid">
                  {materialError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Additional Details</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}  />
              </Form.Group>
              
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit Post
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </>
    );
}

export default ClothingForm;