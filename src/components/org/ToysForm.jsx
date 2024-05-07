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
    const [alertMessage , setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    
//     useEffect(() => {
//         setTimeout(
//             () => {
//                 setShowAlert(false);
//             }, 3000
//         );
//     }
// );
    
    
    const handleClose = () => {
      
      setShowAlert(false);
      setAge('');
      setAlertMessage('');
      setTitle('');
      setType('');
      setGender('');
      setQuantity('');
      setPhoto('');
      setCategory('');
      setAdditionalDetails('');
      close();

    };
    const handleShow = () => setShow(true);

    const handleSubmit =(event) => {
      event.preventDefault();
      if(age<1 || age > 100){
        setAlertMessage('Age Must be between 1 and 100');
        
        setShowAlert('true');
        setSuccess(false);
        setTimeout(() => {
            setShowAlert(false);
            setAlertMessage('');

        } ,10000);
      }
      else{
        // setShow(false);
        // setShowToys();
        setShowAlert(true);
        
        setAlertMessage('Posted Successfully!');
       
        setSuccess(true);
        
        setTimeout(() => {
            close();
            setAge('');
            setTitle('');
            setType('');
            setGender('');
            setQuantity('');
            setPhoto('');
            setCategory('');
            setAdditionalDetails('');
            setShowAlert(false);
            setAlertMessage('');
            
        },2000);
        
        
        
        console.log("Form submitted successfully");
      }
    };

    
  
    const handleAlertClose = () => setShowAlert(false);
    const handleAlertShow = () => setShowAlert(true);
  
    const [isSuccess,setSuccess] = useState(false);
    console.log(showToys);
    
    return (
      <>
        {/* <Button variant="primary"  >
          New Post
        </Button>
   */}
   
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
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Post Title"
                  value = {title}
                  onChange ={(event) => setTitle(event.target.value)}
                  required
                  autoFocus
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Toy Type"
                    value = {type}
                    onChange ={(event) => setType(event.target.value)}
                />
              </Form.Group>
               <div style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap : '200px'
                }
              }>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Toy Category"
                  value={category}
                  onChange ={(event) => setCategory(event.target.value)}
                />
              </Form.Group>
              
              
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange ={(event) => setAge(event.target.value)}
                  min={"1"}
                  max={"100"}
                />
              </Form.Group>
              </div>
              <div style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap : '200px'
                }
              }>
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
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="photo"
                  value = {photo}
                  onChange={(event) => setPhoto(event.target.value)}
                />
              </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="quantity"
                  value = {quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
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
              <button type="submit" variant="primary" >
              Save Changes
            </button>
              
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
    );
}

export default ToysForm;