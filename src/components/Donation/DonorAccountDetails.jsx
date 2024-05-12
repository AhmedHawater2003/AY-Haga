import { useState } from 'react';
import {  Row  } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { FiEyeOff, FiEye, FiEdit3 } from 'react-icons/fi'; 
import styles from "./test.module.css"
import { Notification } from '@mantine/core';
import { Card } from '@mantine/core';
import GoogleLocator from '../GoogleLocator';
import { FiCheckSquare  , FiX  } from "react-icons/fi";

const DonorAccountDetails = () => {

    const [showPassword , setShowPassword] = useState(false);
    const [edit , setEdit] = useState(false);

    const [oldName , setOldName] = useState('Mohamed Abdelaaty');
    const [newName , setNewName] = useState(oldName);
    const [newNameError , setNewNameError] = useState('');

    const [type , setType] = useState('Regular Donor');

    const [oldGender , setOldGender] = useState('Male');
    const [newGender , setNewGender] = useState(oldGender);
    const [newGenderError , setNewGenderError] = useState('');

    const [oldPhone , setOldPhone] = useState('01111111111');
    const [newPhone , setNewPhone] = useState(oldPhone);
    const [newPhoneError , setNewPhoneError] = useState('');

    const [oldEmail , setOldEmail] = useState('mohamed@guc.com');
    const [newEmail , setNewEmail] = useState(oldEmail);
    const [newEmailError , setNewEmailError] = useState('');

    const [oldPassword , setOldPassword] = useState('blabizo');
    const [newPassword , setNewPassword] = useState(oldPassword);
    const [newPasswordError , setNewPasswordError] = useState('');

    const [oldAddress , setOldAddress] = useState('! Hafez Ramadan Street');
    const [newAddress , setNewAddress] = useState(oldAddress);
    const [newAddressError , setNewAddressError] = useState('');

    const [oldArea , setOldArea] = useState('Nasr City');
    const [newArea , setNewArea] = useState(oldArea);
    const [newAreaError , setNewAreaError] = useState('');

    const [oldGovernorate , setOldGovernorate] = useState('Cairo');
    const [newGovernorate , setNewGovernorate] = useState(oldGovernorate);
    const [newGovernorateError , setNewGovernorateError] = useState('');

    const [icon, setIcon] = useState(<FiEyeOff className='icon' />);

    const deleteIconStyling = {
        cursor : "pointer" ,
        color : "red" ,
        
      }
    
     
      const eyeIconStyling = (!(newPassword === '')) ? {
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
        }

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

        const handleSave = (event) => {
            event.preventDefault();
            if(newName === ''){
                setNewNameError('Please PROVIDE your Name!');
            }
            else{
                setNewNameError('');
            }
           
        }



  return (
    <div>
      
    </div>
  )
}

export default DonorAccountDetails
