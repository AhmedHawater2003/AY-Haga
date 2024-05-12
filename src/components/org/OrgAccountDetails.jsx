import { useState } from 'react';
import { Row  } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import OrgAccountBrief from '../OrgAccountBrief';
import CategoryModal from './CategoryModal';
// import {ListGroup} from 'react-bootstrap/ListGroup';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Spinner } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { FiEyeOff, FiEye } from 'react-icons/fi'; 
import styles from "./test.module.css"

const OrgAccountDetails = () => {

  const [edit , setEdit] = useState(false);

  // Organization Use States
  const [oldOrganizationName , setOldOrganizationName] = useState('Resala');
  const [newOrganizationName , setNewOrganizationName] = useState(oldOrganizationName);
  const [newOrganizationNameError , setNewOrganizationNameError] = useState('');

  const [oldOrganizationFounder , setOldOrganizationFounder] = useState('Sherif Abd Al Azim');
  const [newOrganizationFounder , setNewOrganizationFounder] = useState(oldOrganizationFounder);
  const [newOrganizationFounderError , setNewOrganizationFounderError] = useState('');

  const [oldOrganizationWebsite , setOldOrganizationWebsite] = useState('https://resala.org');
  const [newOrganizationWebsite , setNewOrganizationWebsite] = useState(oldOrganizationWebsite);
  const [newOrganizationWebsiteError , setNewOrganizationWebsiteError] = useState('');

  const [oldOrganizationType , setOldOrganizationType] = useState('Non-profit');
  const [newOrganizationType , setNewOrganizationType] = useState(oldOrganizationType);
  const [newOrganizationTypeError , setNewOrganizationTypeError] = useState('');

  const [oldOrganizationHotNumber , setOldOrganizationHotNumber] = useState('19450');
  const [newOrganizationHotNumber , setNewOrganizationHotNumber] = useState(oldOrganizationHotNumber);
  const [newOrganizationHotNumberError , setNewOrganizationHotNumberError] = useState('');

  const [oldOrganizationContactEmail , setOldOrganizationContactEmail] = useState('contact_us@resala.org');
  const [newOrganizationContactEmail , setNewOrganizationContactEmail] = useState(oldOrganizationContactEmail);
  const [newOrganizationContactEmailError , setNewOrganizationContactEmailError] = useState('');

  const [oldOrganizationAddress , aetOldOrganizationAddress] = useState()

  // Representative Use States
  const [oldRepresentativeFirstName , setOldRepresentativeFirstName] = useState('Mohamed');
  const [newRepresentativeFirstName , setNewRepresentativeFirstName] = useState(oldRepresentativeFirstName);
  const [newRepresentativeFirstNameError , setNewRepresentativeFirstNameError] = useState('');

  const [oldRepresentativeLastName , setOldRepresentativeLastName] = useState('ELsayed');
  const [newRepresentativeLastName , setNewRepresentativeLastName] = useState(oldRepresentativeLastName);
  const [newRepresentativeLastNameError , setNewRepresentativeLastNameError] = useState('');

  const [oldRepresentativeGender , setOldRepresentativeGender] = useState('Male');
  const [newRepresentativeGender , setNewRepresentativeGender] = useState(oldRepresentativeGender);
  // const [newRepresentativeGenderError , setNewRepresentativeGenderError] = useState('');

  const [oldRepresentativeEmail , setOldRepresentativeEmail] = useState('mohamed.el-sayed@ayady.com')
  const [newRepresentativeEmail , setNewRepresentativeEmail] = useState(oldRepresentativeEmail);
  const [newRepresentativeEmailError , setNewRepresentativeEmailError] = useState('');

  const [oldRepresentativePassword , setOldRepresentativePassword] = useState('organization');
  const [newRepresentativePassword , setNewRepresentativePassword] = useState(oldRepresentativePassword);
  const [newRepresentativePasswordError , setNewRepresentativePasswordError] = useState('');
  const [showPassword , setShowPassword] = useState(false);
  const [icon, setIcon] = useState(<FiEyeOff className='icon' />);

  const [oldRepresentativeFirstPhoneNumber , setOldRepresentativeFirstPhoneNumber] = useState('+20 1121308182');
  const [newRepresentativeFirstPhoneNumber , setNewRepresentativeFirstPhoneNumber] = useState(oldRepresentativeFirstPhoneNumber);
  const [newRepresentativeFirstPhoneNumberError , setNewRepresentativeFirstPhoneNumberError] = useState('');

  const [oldRepresentativeSecondPhoneNumber , setOldRepresentativeSecondPhoneNumber] = useState('+20 1157090116');
  const [newRepresentativeSecondPhoneNumber , setNewRepresentativeSecondPhoneNumber] = useState(oldRepresentativeSecondPhoneNumber);
  const [newRepresentativeSecondPhoneNumberError , setNewRepresentativeSecondPhoneNumberError] = useState('');

  


 
  const eyeIconStyling = (!(newRepresentativePasswordError === '')) ? {
    position: "relative",
    left: "93%",
    bottom: "48px",
    cursor: "pointer",
  } :
    {
      position: "relative",
      left: "97%",
      bottom: "46px",
      cursor: "pointer",
    };

    const handleToggle = () => {
      // event.preventDefault();
      if (!showPassword) {
          setIcon(<FiEye className='icon' />); 
          setShowPassword(true);
      } else {
          setIcon(<FiEyeOff className='icon' />);
          setShowPassword(false);
      }
  }
  


  const handleEdit = (event) => {
    event.preventDefault();
    setNewOrganizationNameError('');
    setEdit(true);
  }

  const handleSave = (event) =>{
    event.preventDefault();
    if(newOrganizationName === ''){
      setNewOrganizationNameError('Please provide the Organization Name!');
    }
    else{
      setNewOrganizationNameError('');
    }
    if(newOrganizationFounder === ''){
      setNewOrganizationFounderError('Please provide the Organization Founder!');
    }
    else{
      setNewOrganizationFounderError('');
    }
    if(newOrganizationWebsite === ''){
      setNewOrganizationWebsiteError('Please provide the Organization Website!');
    }
    else{
      setNewOrganizationWebsiteError('');
    }
    if(newOrganizationHotNumber === ''){
      setNewOrganizationHotNumberError('Please provide the Organization Hot Number!');
    }
    else{
      setNewOrganizationHotNumberError('');
    }
    


    if(newRepresentativeFirstName === ''){
      setNewRepresentativeFirstNameError('Please provide your First Name!');
    }
    else{
      setNewRepresentativeFirstNameError('');

    }
    if(newRepresentativeLastName === ''){
      setNewRepresentativeLastNameError('Please provide your Last Name!');
    }
    else{
      setNewRepresentativeLastNameError('');
    }
    if(newRepresentativeEmail === ''){
      setNewRepresentativeEmailError('Please provide an Email!');
    }
    else{
      setNewRepresentativeEmailError('');
    }
    if(newRepresentativePassword === ''){
      setNewRepresentativePasswordError('Please provide a Password!');
    }
    else{
      setNewRepresentativePasswordError('');
    }
    if(newRepresentativeFirstPhoneNumber === ''){
      setNewRepresentativeFirstPhoneNumberError('Please provide your Phone Number!');
    }
    else{
      setNewRepresentativeFirstPhoneNumberError('');
    }
    if(newOrganizationName !== '' &&
       newRepresentativeFirstName !== '' && newRepresentativeFirstName !== '' && newRepresentativeLastName !== '' &&
       newRepresentativeGender !== '' && newRepresentativePassword !== ''
      ){
      setOldOrganizationName(newOrganizationName);
      setOldOrganizationFounder(newOrganizationFounder);
      setOldOrganizationWebsite(newOrganizationWebsite);
      setOldOrganizationHotNumber(newOrganizationHotNumber);

      setOldRepresentativeFirstName(newRepresentativeFirstName);
      setOldRepresentativeLastName(newRepresentativeLastName);
      setOldRepresentativeGender(newRepresentativeGender);
      setOldRepresentativePassword(newRepresentativePassword);
      setOldRepresentativeFirstPhoneNumber(newRepresentativeFirstPhoneNumber);
      setShowPassword(false);
      if(showPassword) {handleToggle();}
      setEdit(false);
    }
  }

  const handleCancel = (event) => {
    event.preventDefault();
    setNewOrganizationNameError('');
    setNewOrganizationName(oldOrganizationName);
    setNewOrganizationFounderError('');
    setNewOrganizationFounder(oldOrganizationFounder);
    setNewOrganizationWebsiteError('');
    setNewOrganizationWebsite(oldOrganizationWebsite);
    setNewOrganizationHotNumberError('');
    setNewOrganizationHotNumber(oldOrganizationHotNumber);

    setNewRepresentativeFirstNameError('');
    setNewRepresentativeFirstName(oldRepresentativeFirstName);
    setNewRepresentativeLastNameError('');
    setNewRepresentativeLastName(oldRepresentativeLastName);
    setNewRepresentativeGender(oldRepresentativeGender);
    setNewRepresentativePasswordError('');
    setNewRepresentativePassword(oldRepresentativePassword);
    setShowPassword(false);
    if(showPassword) {handleToggle();}
    setEdit(false);

  }

  return (
    <div>
      <div>
            <Row>
                <Col>
                    {/* <h1 style={{fontWeight : 'bold'}}>Account Details</h1> */}
                </Col>  
                <Col style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "end" 
                    }}>
                <CategoryModal/>
                </Col>
            </Row>
         </div>
        <Row justify="flex">
        <div 
        // style={{transform : 'scale(0.9)'}}
        >
          <div className="profilecard-shadow-primary profilecard-border mb-3 profilecard">
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner bg-primary">
                <div className="menu-header-content btn-pane-right p-4">
                  <div
                    className="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine"
                    style={{ color: "black", borderBlockColor: "black" }}
                  >
                    <div
                      className="avatar-icon rounded-circle"
                      style={{
                        padding: "10px",
                        fill: "black",
                        color: "black",
                        borderColor: "black",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        className="bi bi-bank"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="menu-header-title">
                      <span style={{ color: "black", fontSize: "50px" }}>
                        {" "}
                        Account Details
                      </span>
                    </h5>
                  </div>
                  
                </div>
              </div>
            </div>
            
            
            <Form style={{padding : '15px'}} className = {styles.lolo}>
              <Row>
              <Col>
              <Form.Group>  
                <Form.Label style={{fontWeight : 'bold'}}>
                  <h4>Organization Name 
                    
                      {newOrganizationNameError?  <span className="text-danger"> *</span> : null }
                    
                    :</h4> 
                </Form.Label>
                
                <Form.Control 
                      type='text' 
                      value={edit? newOrganizationName : oldOrganizationName}
                      disabled = {!edit}
                      onChange={(e) => setNewOrganizationName(e.target.value)}
                      isInvalid = {newOrganizationNameError}
                />
                <Form.Control.Feedback type="invalid">
                    {newOrganizationNameError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{fontWeight : 'bold'}}>
                  <h4>
                    Organization Founder
                    {newOrganizationFounderError?  <span className="text-danger"> *</span> : null }
                    :
                  </h4>
                </Form.Label>
                <Form.Control
                  type='text'
                  value = {edit? newOrganizationFounder : oldOrganizationFounder}
                  disabled = {!edit}
                  onChange = {(e) => setNewOrganizationFounder(e.target.value)}
                  isInvalid = {newOrganizationFounderError}
                />
                <Form.Control.Feedback>
                  {newOrganizationFounderError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{fontWeight : 'bold'}}>
                  <h4>
                    Organization Website
                    {newOrganizationWebsiteError?  <span className="text-danger"> *</span> : null }
                    :
                  </h4>
                </Form.Label>
                <Form.Control
                  type='link'
                  value = {edit? newOrganizationWebsite : oldOrganizationWebsite}
                  disabled = {!edit}
                  onChange = {(e) => setNewOrganizationWebsite(e.target.value)}
                  isInvalid = {newOrganizationWebsiteError}
                />
                <Form.Control.Feedback>
                  {newOrganizationWebsiteError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label style = {{fontWeight : 'bold'}}>
                  <h4>
                    Organization Hot Number
                    {newOrganizationHotNumberError? <span className='text-danger'> *</span> : null}
                    :
                  </h4>
                </Form.Label>
                <Form.Control
                  type = 'number'
                  value = {edit? newOrganizationHotNumber : oldOrganizationHotNumber}
                  onChange = {(event) => setNewOrganizationHotNumber(event.target.value)}
                  disabled = {!edit}
                  isInvalid = {newOrganizationHotNumberError}
                />
                <Form.Control.Feedback>
                  {newOrganizationHotNumberError}
                </Form.Control.Feedback>
              </Form.Group>

              </Col>
              {/* <Col>
              <div className='vl'/>
              </Col> */}
              <Col>
                <Form.Group>
                  <Form.Label style={{fontWeight : 'bold'}}>
                    
                    <h4>Representative First Name
                    
                      {newRepresentativeFirstNameError?  <span className="text-danger"> *</span> : null }
                    
                    :</h4> 
                  </Form.Label>
                  <Form.Control
                    type='text'
                    value={edit? newRepresentativeFirstName : oldRepresentativeFirstName}
                    disabled = {!edit}
                    onChange={(e) => setNewRepresentativeFirstName(e.target.value)}
                    isInvalid = {newRepresentativeFirstNameError}
                    />
                    <Form.Control.Feedback>
                      {newRepresentativeFirstNameError}
                    </Form.Control.Feedback>

                  
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{fontWeight : 'bold'}}>
                    
                    <h4>Representative Last Name
                    
                      {newRepresentativeLastNameError?  <span className="text-danger"> *</span> : null }
                    
                    :</h4> 
                  </Form.Label>
                  <Form.Control
                    type='text'
                    value={edit? newRepresentativeLastName : oldRepresentativeLastName}
                    disabled = {!edit}
                    onChange={(e) => setNewRepresentativeLastName(e.target.value)}
                    isInvalid = {newRepresentativeLastNameError}
                    />
                    <Form.Control.Feedback>
                      {newRepresentativeLastNameError}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group >
                <Form.Label style={{fontWeight : 'bold'}}>
                  <h4>Representative Gender : </h4>
                  
                </Form.Label> 
                <br/>
                  { 
                    edit ? 
                    <>
                      <div className="form-check form-check-inline">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="gender"
                          value="Male"
                          checked={newRepresentativeGender === "Male"}
                          onChange={(event) => setNewRepresentativeGender(event.target.value)}
                        />
                      </div>
                      <div className="form-check form-check-inline">
                        <Form.Check
                          type="radio"
                          label="Female"
                          name="gender"
                          value="Female"
                          checked={newRepresentativeGender=== "Female"}
                          onChange={(event) => setNewRepresentativeGender(event.target.value)}
                        />
                      </div>
                    </> 
                    :  
                    <>
                      <Form.Control
                        type='text'
                        value={oldRepresentativeGender}
                        disabled
                        />
                    </>
                  }
                </Form.Group>
                <Form.Group>
                  <Form.Label style = {{fontWeight : 'bold'}}>
                    <h4>
                      Representative Email
                      {newRepresentativeEmailError? <span className='text-danger'> *</span> : null}
                      :
                    </h4>
                  </Form.Label>
                  <Form.Control
                    type = 'text'
                    placeholder='example@dom.com'
                    value = {edit? newRepresentativeEmail : oldRepresentativeEmail}
                    onChange = {(event) => setNewRepresentativeEmail(event.target.value)}
                    disabled = {!edit}
                    isInvalid = {newRepresentativeEmailError}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {newRepresentativeEmailError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label >
                    <h4>
                      Password
                      {newRepresentativePasswordError? <span className='text-danger'> *</span> : null}
                      :
                    </h4>
                  </Form.Label>
                  <Form.Control
                      type={showPassword? 'text' : 'password'}
                      placeholder="Password"
                      disabled = {!edit}
                      value = {edit? newRepresentativePassword : oldRepresentativePassword}
                      onChange={(e) => setNewRepresentativePassword(e.target.value)}
                      isInvalid = {newRepresentativePasswordError}
                  />
                    <div style={eyeIconStyling} onClick={handleToggle}>
                        {icon}
                    </div>
                    <Form.Control.Feedback type="invalid">
                        {newRepresentativePasswordError}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style = {{fontWeight : 'bold'}}>
                      <h4>
                        Representaive Phone Number
                        {newRepresentativeFirstPhoneNumberError? <span className='text-danger'> *</span> : null}
                        :
                      </h4>
                    </Form.Label>
                    <Form.Control
                      type = 'text'
                      placeholder='Phone Number'
                      value = {edit? newRepresentativeFirstPhoneNumber : oldRepresentativeFirstPhoneNumber}
                      onChange = {(event) => setNewRepresentativeFirstPhoneNumber(event.target.value)}
                      disabled = {!edit}
                      isInvalid = {newRepresentativeFirstPhoneNumberError}
                    />
                    <Form.Control.Feedback>
                      {newRepresentativeFirstPhoneNumberError}
                    </Form.Control.Feedback>
                  </Form.Group>
              </Col>
              </Row>
              
            </Form>
          </div>
        </div>
      </Row>
      <div style={{float : 'right'}}>
        
        {edit ? 
            <>
              <Button variant="secondary" onClick={handleCancel}>
                  Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </>
            :
            <Button variant="secondary" onClick={handleEdit}>
              Edit
            </Button>
            }
        
        
      </div>
      </div>
    
    
  )
}

export default OrgAccountDetails
