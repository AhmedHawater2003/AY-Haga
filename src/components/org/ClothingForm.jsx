import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";



const ClothingForm = ({showClothing , back , close}) => {
    // const [show, setShow] = useState(false);
    const [title , setTitle] = useState('');
    const [type , setType] = useState('');
    const [age , setAge] = useState('');
    const [gender , setGender] = useState('');
    const [quantity , setQuantity] = useState('');

    const [material , setMaterial] = useState('');
    const [additionalDetails , setAdditionalDetails] = useState('');
    // const [showClothing , setShowClothing] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    
    const [alertMessage , setAlertMessage] = useState('');
   
    
    
    
    // const [season , setSeason] = useState('');
    
    
    const handleClose = () => {
      // setShow(false);
      setShowAlert(false);
      setTitle('');
      setType('');
      setAge('');
      setGender('');
      setQuantity('');
      // setSeason('');
      setMaterial('');
      setAdditionalDetails('');
      setAlertMessage('');
      close();
    };
    // const handleShow = () => setShow(true);

    const handleSubmit =(event) => {
      event.preventDefault();
      if(age<1 || age > 100){
        setAlertMessage('Age Must be between 1 and 100');
        setShowAlert('true');
        setSuccess(false);
        // setTimeout(() => {
        //     setShowAlert(false);
        //     setAlertMessage('');
        // } ,10000);
      }
      else{
        setAlertMessage('Post Added Successfully');
        setShowAlert('true');
        setSuccess(true);
       

        setTimeout(() => {
            close();
            setTitle('');
            setType('');
            setAge('');
            setGender('');
            setQuantity('');
            setMaterial('');
            setAdditionalDetails('');
            setShowAlert(false);
            setAlertMessage('');
        } ,10000);
      }
    };

    // const handleShowClothing = () => {
    //   setShowClothing(true);
    //   console.log("Clothing Clicked")
    //   setShow(false);
    // }
  
    // const handleAlertClose = () => setShowAlert(false);
    // const handleAlertShow = () => setShowAlert(true);
  
    const [isSuccess,setSuccess] = useState(false);
  
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
            <Form onSubmit={handleSubmit} className="login-text">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="login-text2">Title</Form.Label>
                <Form.Control
                  className="input-field"
                  type="text"
                  placeholder="post title"
                  value = {title}
                  onChange ={(event) => setTitle(event.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  value = {type}
                  onChange ={(event) => setType(event.target.value)}
                  placeholder="clothing type"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="age"
                  value={age}
                  onChange ={(event) => {
                    setAge(event.target.value);
                    setShowAlert(false);
                    setAlertMessage('');
                  }}
                  min={"1"}
                  max={"100"}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Gender</Form.Label>
                <br/>
                {/* <Form.Control
                  type="radio"
                  placeholder="age"
                /> */}
                {/* <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div> */}
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
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="quantity"
                  value={quantity}
                  onChange ={(event) => setQuantity(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Season</Form.Label>
                {/* <Form.Control
                  type="text"
                  placeholder="clothing type"
                /> */}
                <select className="form-select" aria-label="Default select example" >
                    <option>Open to select season</option>
                    <option value="1">Summer</option>
                    <option value="2">Fall</option>
                    <option value="3">Winter</option>
                    <option value="4">Spring</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Material</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="clothing type"
                  value={material}
                  onChange ={(event) => setMaterial(event.target.value)}
                />
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
            
            <Button variant="secondary" onClick={() => {back(); handleClose}}>
              Back
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </>
    );
}

export default ClothingForm;