import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { propTypes } from "react-bootstrap/esm/Image";



const ToysForm = ({showToys , back , close}) => {
    const [title , setTitle] = useState('');
    const [type , setType] = useState('');
    const [category , setCategory] = useState('');
    const [age , setAge] = useState('');
    const [gender , setGender] = useState('');    
    const [quantity , setQuantity] = useState('');
    const [photo , setPhoto] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    //Errors
    const [titleError , setTitleError] = useState('');
    const [typeError , setTypeError] = useState('');
    const [categoryError , setCategoryError] = useState('');
    const [ageError , setAgeError] = useState('');
    const [genderError , setGenderError] = useState('');
    const [quantityError , setQuantityError] = useState('');
    const [photoError , setPhotoError] = useState('');


    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    
    const resetInsertions = () => {
      setTitle('');
      setType('');
      setCategory('');
      setAge('');
      setGender('');
      setQuantity('');
      setPhoto('');
      setAdditionalDetails('');
      setTitleError('');
      setTypeError('');
      setCategoryError('');
      setAgeError('');
      setGenderError('');
      setQuantityError('');
      setPhotoError('');
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
      if(category === ''){
        setCategoryError('Category is required');
      }
      else{
        setCategoryError('');
      }
      if(photo === ''){
        setPhotoError('Photo is required');
      }
      else{
        setPhotoError('');
      }
      if(quantity === ''){
        setQuantityError('Quantity is required');
      }
      else{
        setQuantityError('');
      }
      if(title !== '' && type !== '' && gender !== '' && category !== '' && photo !== '' && quantity !== ''){
        setAlertMessage('Post Submitted Successfully');
        setShowAlert(true);
        setSuccess(true);
        setTimeout(() => {            
            handleClose();
          }, 10000);
      }
    }
    

    
    return (
      <>
        <Modal show={showToys} onHide={handleClose} size="lg" scrollable={true} onSubmit={handleSubmit} >
          <Modal.Header closeButton>
            <Modal.Title>Toys Post</Modal.Title>
          </Modal.Header>
          <Modal.Body onSubmit={handleSubmit}>
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
                  placeholder="Post Title"
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
                  placeholder="Toy Type"
                  value = {type}
                  onChange ={(event) => setType(event.target.value)}
                  isInvalid = {typeError}
                />
                <Form.Control.Feedback type="invalid">
                  {typeError}
                </Form.Control.Feedback>
              </Form.Group>
               {/* <div style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap : '200px'
                }
              }> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Category
                  {categoryError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Toy Category"
                  value={category}
                  onChange ={(event) => setCategory(event.target.value)}
                  isInvalid = {categoryError}
                />
                <Form.Control.Feedback type="invalid">
                  {categoryError}
                </Form.Control.Feedback>
              </Form.Group>
              
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age
                  {ageError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange ={(event) => setAge(event.target.value)}
                  isInvalid ={ageError}
                />
                <Form.Control.Feedback type="invalid">
                  {ageError}
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
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(event) => setGender(event.target.value)}
                /></div>
                 <div className="form-check form-check-inline">
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={gender=== "Female"}
                  onChange={(event) => setGender(event.target.value)}
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
                <Form.Label>Photo of Requested Toy
                  {photoError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Upload Photo of Required Toy"
                  accept=".png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .svg, .webp"
                  value = {photo}
                  onChange={(event) => setPhoto(event.target.value)}
                  isInvalid = {photoError}
                />
                <Form.Control.Feedback type="invalid">
                  {photoError}
                </Form.Control.Feedback>
              </Form.Group>
              {/* </div> */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantity Requested
                  {quantityError?  <span className="text-danger"> *</span> : null }
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Quantity Requested"
                  value = {quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  isInvalid = {quantityError}
                />
                <Form.Control.Feedback type="invalid">
                  {quantityError}
                </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Additional Details</Form.Label>
                <Form.Control as="textarea" 
                              rows={3} 
                              value={additionalDetails} 
                              onChange={(e) => setAdditionalDetails(e.target.value)} 
                />
                
              </Form.Group>
             
              
            </Form>
          </Modal.Body>
          <Modal.Footer >
            
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit"  variant="primary" onClick={handleSubmit} >
              Submit Post
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </>
    );
}

export default ToysForm;