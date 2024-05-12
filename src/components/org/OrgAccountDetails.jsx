import { useState } from 'react';
import {  Row  } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import { Button } from '@mantine/core';
import { FiEyeOff, FiEye, FiEdit3 } from 'react-icons/fi'; 
import styles from "./test.module.css"
import { Notification } from '@mantine/core';
import { Alert } from 'react-bootstrap';
import { Card } from '@mantine/core';
import GoogleLocator from '../GoogleLocator';
import { FiCheckSquare  , FiX  } from "react-icons/fi";


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

  const [oldOrganizationAddress , setOldOrganizationAddress] = useState('4 Zaky Rostom St From Hassanein Heikal St.');
  const [newOrganizationAddress , setNewOrganizationAddress] = useState(oldOrganizationAddress);
  const [newOrganizationAddressError , setNewOrganizationAddressError] = useState('');

  const [oldOrganizationArea , setOldOrganizationArea] = useState('Nasr City');
  const [newOrganizationArea , setNewOrganizationArea] = useState(oldOrganizationArea);
  const [newOrganizationAreaError , setNewOrganizationAreaError] = useState('');

  const [oldOrganizationGovernate , setOldOrganizationGovernate] = useState('Cairo');
  const [newOrganizationGovernate , setNewOrganizationGovernate] = useState(oldOrganizationGovernate);
  const [newOrganizationGovernateError , setNewOrganizationGovernateError] = useState('');

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

  const [oldRepresentativeEmail , setOldRepresentativeEmail] = useState('mohamed.el-sayed@gmail.com')
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

  
  const deleteIconStyling = {
    cursor : "pointer" ,
    color : "red" ,
    
  }

 
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
    setEdit(true);
  }

  const handleSave = (event) =>{
    event.preventDefault();
    if(newOrganizationName === ''){
      setNewOrganizationNameError('Please provide the Organization Name!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewOrganizationNameError('');
    }
    if(newOrganizationType === ''){
      setNewOrganizationTypeError('Please provide the Organization Type!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewOrganizationTypeError('');
    }
    if(newOrganizationFounder === ''){
      setNewOrganizationFounderError('Please provide the Organization Founder!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewOrganizationFounderError('');
    }
    // if(newOrganizationWebsite === ''){
    //   setNewOrganizationWebsiteError('Please provide the Organization Website!');
    // }
    // else{
    //   setNewOrganizationWebsiteError('');
    // }
    // if(newOrganizationHotNumber === ''){
    //   setNewOrganizationHotNumberError('Please provide the Organization Hot Number!');
    // }
    // else{
    //   setNewOrganizationHotNumberError('');
    // }
    // if(newOrganizationContactEmail === ''){
    //   setNewOrganizationContactEmailError('Please provide a Contact Email!');
    // }
    // else{
    //   setNewOrganizationContactEmailError('');
    // }
    if(newOrganizationAddress === ''){
      setNewOrganizationAddressError(oldOrganizationAddress);
    }
    // else{
    //   setNewOrganizationAddressError('');
    // }
    if(newOrganizationArea === ''){
      setNewOrganizationAreaError(oldOrganizationArea);
    }
    // else{
    //   setNewOrganizationAreaError('');
    // }
    if(newOrganizationGovernate === ''){
      setNewOrganizationGovernateError(oldOrganizationGovernate);
    }
    // else{
    //   setNewOrganizationGovernateError('');
    // }
    
    


    if(newRepresentativeFirstName === ''){
      setNewRepresentativeFirstNameError('Please provide your First Name!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewRepresentativeFirstNameError('');

    }
    if(newRepresentativeLastName === ''){
      setNewRepresentativeLastNameError('Please provide your Last Name!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewRepresentativeLastNameError('');
    }
    if(newRepresentativeEmail === ''){
      setNewRepresentativeEmailError('Please provide an Email!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewRepresentativeEmailError('');
    }
    if(newRepresentativePassword === ''){
      setNewRepresentativePasswordError('Please provide a Password!');
      setError(true);
      setTimeout(() => {
        setError(false);
      
      },5000);
    }
    else{
      setNewRepresentativePasswordError('');
    }
    // if(newRepresentativeFirstPhoneNumber === ''){
    //   setNewRepresentativeFirstPhoneNumberError('Please provide your Phone Number!');
    // }
    // else{
    //   setNewRepresentativeFirstPhoneNumberError('');
    // }
    if(newOrganizationName !== '' && newOrganizationType !== '' && newOrganizationFounder !== '' && /*newOrganizationWebsite !== '' &&
       newOrganizationHotNumber !== '' && newOrganizationContactEmail !== '' && /*newOrganizationAddress !== '' &&
       newOrganizationArea !== '' && newOrganizationGovernate !== '' &&*/
       newRepresentativeFirstName !== '' && newRepresentativeFirstName !== '' && newRepresentativeLastName !== '' &&
       newRepresentativeGender !== '' && newRepresentativePassword !== '' /* && newRepresentativeFirstPhoneNumber !== '' */
      ){
        setError(false);
        setOldOrganizationName(newOrganizationName);
        setOldOrganizationType(newOrganizationType);
        setOldOrganizationFounder(newOrganizationFounder);
        setOldOrganizationWebsite(newOrganizationWebsite);
        setOldOrganizationHotNumber(newOrganizationHotNumber);
        setOldOrganizationContactEmail(newOrganizationContactEmail);
        if (newOrganizationAddress !== '' && newOrganizationArea !== '' && newOrganizationGovernate !== '' ){
          setOldOrganizationAddress(newOrganizationAddress);
          setOldOrganizationArea(newOrganizationArea);
          setOldOrganizationGovernate(newOrganizationGovernate);
        }
        setOldRepresentativeFirstName(newRepresentativeFirstName);
        setOldRepresentativeLastName(newRepresentativeLastName);
        setOldRepresentativeGender(newRepresentativeGender);
        setOldRepresentativePassword(newRepresentativePassword);
        setOldRepresentativeFirstPhoneNumber(newRepresentativeFirstPhoneNumber);
        setShowPassword(false);

        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 5000);

        if(showPassword) {handleToggle();}
        setEdit(false);
    }
  }

  const handleCancel = (event) => {
    event.preventDefault();
    setNewOrganizationNameError('');
    setNewOrganizationName(oldOrganizationName);
    setNewOrganizationTypeError('');
    setNewOrganizationType(oldOrganizationType);
    setNewOrganizationFounderError('');
    setNewOrganizationFounder(oldOrganizationFounder);
    setNewOrganizationWebsiteError('');
    setNewOrganizationWebsite(oldOrganizationWebsite);
    setNewOrganizationHotNumberError('');
    setNewOrganizationHotNumber(oldOrganizationHotNumber);
    setNewOrganizationContactEmailError('');
    setNewOrganizationContactEmail(oldOrganizationContactEmail);
    setNewOrganizationAddressError('');
    setNewOrganizationAddress(oldOrganizationAddress);
    setNewOrganizationAreaError('');
    setNewOrganizationArea(oldOrganizationArea);
    setNewOrganizationGovernateError('');
    setNewOrganizationGovernate(oldOrganizationGovernate);

    setNewRepresentativeFirstNameError('');
    setNewRepresentativeFirstName(oldRepresentativeFirstName);
    setNewRepresentativeLastNameError('');
    setNewRepresentativeLastName(oldRepresentativeLastName);
    setNewRepresentativeGender(oldRepresentativeGender);
    setNewRepresentativePasswordError('');
    setNewRepresentativePassword(oldRepresentativePassword);
    setNewRepresentativeFirstPhoneNumberError('');
    setNewRepresentativeFirstPhoneNumber(oldRepresentativeFirstPhoneNumber);

    setShowPassword(false);
    if(showPassword) {handleToggle();}
    setEdit(false);
    setError(false);
    setSaved(false);

  }

  const [color , setColor] = useState('white');
  const [saved , setSaved] = useState(false);
  const [error , setError] = useState(false);

  return (
    <div>
      { 
        saved &&
           <Row>
            <Notification color="teal" title="Saved Successfully!" mt="md" onClose={() => setSaved(false)} style={{backgroundColor : 'whitesmoke' , fontSize : "50px" ,position : 'relative'  /*,width : '500px' , alignSelf : 'center'*/}}/>  
          </Row>
      }
      {
        error &&
          <Row>
            <Notification color="red" title="Error!" mt="md" onClose={() => setError(false)} style={{backgroundColor : 'whitesmoke' , fontSize : "50px" /*,width : '500px' , alignSelf : 'center'*/}}/>
          </Row>
      }
      <br/>
        <Row justify="flex">
        <div 
        // style={{transform : 'scale(0.9)'}}
        >
          <Card className="profilecard-shadow-primary profilecard-border mb-3 profilecard">
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
                  <div style={{float : 'right'}}>
        
                    {edit ? 
                        <>
                          <Button color='red'
                                  onClick={handleCancel} radius='xl' variant='filled' 
                          // style={{backgroundColor : 'green' , color : 'black'}} onMouseEnter={() => setColor('grey')}
                          >
                            <FiX/>
                            {' '}
                            <label>
                                Cancel
                            </label>
                          </Button>
                          {" "}
                          <Button color= 'grey' radius='xl' variant='filled' onClick={handleSave} 
                          //</>style={{backgroundColor : 'whitesmoke' , color : 'black'}} onMouseEnter={() => setColor('grey')}
                          >
                            <FiCheckSquare />
                            {" "}
                            <label>
                              Save Changes
                            </label>
                          </Button>
                        </>
                        :
                        <Button color= 'grey' radius='xl' variant='filled'onClick={handleEdit} 
                        // style={{backgroundColor : 'whitesmoke' , color : 'black'}} onMouseEnter={() => setColor('grey')} 
                        >
                          <FiEdit3/>
                          {"  "} {"  "}
                          <label>
                            Edit
                          </label>
                        </Button>
                        }
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
                    <h4>
                      Organization Name 
                      {newOrganizationNameError?  <span className="text-danger"> *</span> : null }  
                      :
                    </h4> 
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
                      Organization Type
                      {newOrganizationTypeError?  <span className="text-danger"> *</span> : null }
                      :
                    </h4>
                  </Form.Label>
                  <Form.Control
                    type = 'text'
                    value = {edit? newOrganizationType : oldOrganizationType}
                    disabled = {!edit}
                    onChange = {(event) => setNewOrganizationType(event.target.value)}
                    isInvalid = {newOrganizationTypeError}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {newOrganizationTypeError}
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
                  <Form.Control.Feedback type='invalid'>
                    {newOrganizationFounderError}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                    <h4>
                      Organization Website
                      {/* {newOrganizationWebsiteError?  <span className="text-danger"> *</span> : null } */}
                      :
                    </h4>
                    <FiX style={deleteIconStyling} onClick = {() => {
                      setNewOrganizationWebsite('');
                      setNewOrganizationWebsiteError('');
                      setOldOrganizationWebsite('');
                    } }/>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    value = {edit? newOrganizationWebsite : oldOrganizationWebsite}
                    placeholder= {edit && 'Enter Organization Website'}
                    disabled = {!edit}
                    onChange = {(e) => setNewOrganizationWebsite(e.target.value)}
                    // isInvalid = {newOrganizationWebsiteError}
                  />
                  {/* <Form.Control.Feedback>
                    {newOrganizationWebsiteError}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                    <h4>
                      Organization Hot Number
                      {/* {newOrganizationHotNumberError? <span className='text-danger'> *</span> : null} */}
                      :
                    </h4>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x" viewBox="0 0 16 16" onClick={handleCancel} >
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg> */}
                    <FiX style={deleteIconStyling} onClick = {() => {
                      setNewOrganizationHotNumber('');
                      setNewOrganizationHotNumberError('');
                      setOldOrganizationHotNumber('');
                    } }/>
                  </Form.Label>
                  <Form.Control
                    type = 'number'
                    value = {edit? newOrganizationHotNumber : oldOrganizationHotNumber}
                    placeholder= {edit && "Enter Organization Hot Number"}
                    onChange = {(event) => setNewOrganizationHotNumber(event.target.value)}
                    disabled = {!edit}
                    // isInvalid = {newOrganizationHotNumberError}
                  />
                  {/* <Form.Control.Feedback>
                    {newOrganizationHotNumberError}
                  </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group>
                  <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                    <h4>
                      Organization Contact Email
                      {/* {newOrganizationContactEmailError? <span className='text-danger'> *</span> : null} */}
                      :
                    </h4>
                    <FiX style={deleteIconStyling} onClick = {() => {
                      setNewOrganizationContactEmail('');
                      setNewOrganizationContactEmailError('');
                      setOldOrganizationContactEmail('');
                    } }/>
                  </Form.Label>
                  <Form.Control
                    type = 'text'
                    placeholder = {edit && 'Enter Organization Contact Email'}
                    value = {edit? newOrganizationContactEmail : oldOrganizationContactEmail}
                    onChange = {(event) => setNewOrganizationContactEmail(event.target.value)}
                    disabled = {!edit}
                    // isInvalid = {newOrganizationContactEmailError}
                  />
                  {/* <Form.Control.Feedback>
                    {newOrganizationContactEmailError}
                  </Form.Control.Feedback> */}
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
                      <Form.Control.Feedback type='invalid'>
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
                      <Form.Control.Feedback type='invalid'>
                        {newRepresentativeLastNameError}
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group >
                  <Form.Label style={{fontWeight : 'bold'}}>
                    <h4>Representative Gender : </h4>
                    
                  </Form.Label> 
                  {/* <br/>
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
                      :   */}
                      <>
                        <Form.Control
                          type='text'
                          value={oldRepresentativeGender}
                          disabled
                          />
                      </>
                    {/* } */}
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
                      <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                        <h4>
                          Representative Phone Number
                          {/* {newRepresentativeFirstPhoneNumberError? <span className='text-danger'> *</span> : null} */}
                          :
                        </h4>
                        <FiX style={deleteIconStyling} onClick = {() => {
                          setNewRepresentativeFirstPhoneNumber('');
                          setNewRepresentativeFirstPhoneNumberError('');
                          setOldRepresentativeFirstPhoneNumber('');
                        } }/>
                      </Form.Label>
                      <Form.Control
                        type = 'text'
                        placeholder={edit && 'Enter Phone Number'}
                        value = {edit? newRepresentativeFirstPhoneNumber : oldRepresentativeFirstPhoneNumber}
                        onChange = {(event) => setNewRepresentativeFirstPhoneNumber(event.target.value)}
                        disabled = {!edit}
                        // isInvalid = {newRepresentativeFirstPhoneNumberError}
                      />
                      {/* <Form.Control.Feedback>
                        {newRepresentativeFirstPhoneNumberError}
                      </Form.Control.Feedback> */}
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                  <Col>
                  <br/>
                  <br/>
                    <Form.Group>
                      <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                        <h4>
                          Organization Address
                          {/* {newOrganizationAddressError? <span className='text-danger'> *</span> : null} */}
                          :
                        </h4>
                        {
                          !edit &&
                          <FiX style={deleteIconStyling} onClick = {() => {
                          setNewOrganizationAddress('');
                          setNewOrganizationAddressError('');
                          setOldOrganizationAddress('');
                          } }/>
                        }
                      </Form.Label>
                      <Form.Control
                        type = 'text'
                        placeholder = {(edit && (oldOrganizationAddress === ''))? 'Enter Address' : oldOrganizationAddress}
                        value = {edit? ((newOrganizationAddress !== '') ? newOrganizationAddress : null) : oldOrganizationAddress}
                        onChange = {(event) => setNewOrganizationAddress(event.target.value)}
                        disabled = {!edit}
                        // isInvalid = {newOrganizationAddressError}
                      />
                      {/* <Form.Control.Feedback>
                        {newOrganizationAddressError}
                      </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                        <h4>
                          Organization Area
                          {/* {newOrganizationAreaError? <span className='text-danger'> *</span> : null} */}
                          :
                        </h4>
                        {
                          !edit &&
                          <FiX style={deleteIconStyling} onClick = {() => {
                          setNewOrganizationArea('');
                          setNewOrganizationAreaError('');
                          setOldOrganizationArea('');
                          }
                        }/>
                        }
                      </Form.Label>
                      <Form.Control
                        type = 'text'
                        placeholder = {(edit && (oldOrganizationArea === ''))? 'Enter Area' : oldOrganizationArea}
                        value = {edit? ((newOrganizationArea !== '')? newOrganizationArea : null) : oldOrganizationArea}
                        onChange = {(event) => setNewOrganizationArea(event.target.value)}
                        disabled = {!edit}
                        // isInvalid = {newOrganizationAreaError}
                      />
                      {/* <Form.Control.Feedback>
                        {newOrganizationAreaError}
                      </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label style = {{fontWeight : 'bold' , display: "flex", justifyContent: "space-between"}}>
                        <h4>
                          Organization Governorate
                          {/* {newOrganizationGovernateError? <span className='text-danger'> *</span> : null} */}
                          :
                        </h4>
                        {
                          !edit &&
                          <FiX style={deleteIconStyling} onClick = {() => {
                          setNewOrganizationGovernate('');
                          setNewOrganizationGovernateError('');
                          setOldOrganizationGovernate('');
                          } }/>
                        }
                      </Form.Label>
                      <Form.Control
                        type = 'text'
                        placeholder = {(edit && (oldOrganizationGovernate ===''))? 'Enter Governate' :oldOrganizationGovernate }
                        value = {edit? ((newOrganizationGovernate !== '')? newOrganizationGovernate : null) : oldOrganizationGovernate}
                        onChange = {(event) => setNewOrganizationGovernate(event.target.value)}
                        disabled = {!edit}
                        // isInvalid = {newOrganizationGovernateError}
                      />
                      {/* <Form.Control.Feedback>
                        {newOrganizationGovernateError}
                      </Form.Control.Feedback> */}
                    </Form.Group>
                  </Col>
                  {
                    edit &&
                    <Col>
                      <GoogleLocator
                      getAddress={(newOrganizationAddress) => setNewOrganizationAddress(newOrganizationAddress)}
                      getArea={(newOrganizationArea) => setNewOrganizationArea(newOrganizationArea)}
                      getGovernorate={(newOrganizationGovernate) => setNewOrganizationGovernate(newOrganizationGovernate)}/>
                    </Col>
                  }
                </Row>
              </Form>
          </Card>
        </div>
      </Row>
      {/* <div style={{float : 'right'}}>
        
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
        
        
      </div> */}
    </div>
    
    
  )
}

export default OrgAccountDetails
