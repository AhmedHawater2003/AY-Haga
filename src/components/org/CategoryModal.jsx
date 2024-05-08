import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';


import med_icon from '../../assets/medical_icon.png';
import blood_icon from '../../assets/blood-drop.png';
import school_icon from '../../assets/school-icon.png';
import food_icon from '../../assets/food-icon.png';
import clothing_icon from '../../assets/clothes-icon.png';
import toy_icon from '../../assets/toys-icon.png';
import ToysForm from './ToysForm';
import ClothingForm from './ClothingForm';
import FoodForm from './FoodForm';
import MedicalForm from './MedicalForm';
import BloodForm from './BloodForm';



function CategoryModal() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [showMedical , setShowMedical] = useState(false);
  const [showBlood , setShowBlood] = useState(false);
  const [showSchool , setShowSchool] = useState(false);
  const [showFood , setShowFood] = useState(false);
  const [showClothing , setShowClothing] = useState(false);
  const [showToys , setShowToys] = useState(false);

    


  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
    setShowMedical(false);
    setShowBlood(false);
    setShowSchool(false);
    setShowFood(false);
    setShowClothing(false);
    setShowToys(false);

  }
  const handleShow = () => setShow(true);

  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = () => setShowAlert(true);

  // const handleShowMedical = () => setShowMedical(!showMedical);

  // const handleShowBlood = () => setShowBlood(!showBlood); 
  // const handleShowSchool = () => setShowSchool(!showSchool);
  // const handleShowFood = () => setShowFood(!showFood);
  const showClothingForm = () => {
    setShowClothing(true);
    console.log("Clothing Clicked")
    setShow(false);
  };
  const showToysForm = () => {
    setShowToys(true);
    console.log("Toys Clicked")
    setShow(false);
  };

  const showFoodForm = () => {
    setShowFood(true);
    setShow(false);
  };

  const showMedicalForm = () => {
    setShowMedical(true);
    setShow(false);
  };
  const showBloodForm = () => {
    setShowBlood(true);
    setShow(false);
  };

  const back = () => {
    setShow(true);
    setShowMedical(false);
    setShowBlood(false);
    setShowSchool(false);
    setShowFood(false);
    setShowToys(false);
    setShowClothing(false);

  };

  
  

  const isSuccess = false;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Donation Post
      </Button>

      <Modal show={show} onHide={handleClose} 
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose Category</Modal.Title>
        </Modal.Header>
        <Modal.Body >
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "10px",
                    padding: "15px",
                    justifyContent: "center"
                }}>
                    <div className="card" onClick={showMedicalForm}>
                        <br/>
                        <img src={med_icon} alt='medical_icon' className="card-icon"></img>
                        <div className="card-title">Medical Sector</div>
                        
                    </div>
                    <div className="card" onClick={showBloodForm}>
                        <br/>
                        <img src={blood_icon} alt='blood_icon' className="card-icon"></img>
                        <div className="card-title">Blood Donations</div>
                        
                    </div>
                    <div className="card">
                        <br/>
                        <img src={school_icon} alt='school_icon' className="card-icon"></img>
                        <div className="card-title">School Donations</div>
                       
                    </div>
                    <div className="card" onClick={showFoodForm}>
                        <br/>
                        <img src={food_icon} alt='food_icon' className="card-icon"></img>
                        <div className="card-title">Food Donations</div>
                      
                    </div>
                    <div className="card" onClick={showClothingForm }>
                        <br/>
                        <img src={clothing_icon} alt='clothing_icon' className="card-icon"></img>
                        <div className="card-title">Clothing Donations</div>
                        
                    </div>
                    <div className="card" onClick={showToysForm} >
                        <br/>
                        <img src={toy_icon} alt='toy_icon' className="card-icon"></img>
                        <div className="card-title">Toy Donations</div>
                        
                    </div>
                </div>
                
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ClothingForm showClothing = {showClothing} back={back} close= {handleClose} />
      <ToysForm showToys = {showToys}  back ={back} close = {handleClose} />
      <FoodForm showFood = {showFood} back = {back} close = {handleClose} />
      <MedicalForm showMedical={showMedical} back ={back} close = {handleClose}/>
      <BloodForm showBlood={showBlood} back ={back} close = {handleClose}/>

    </>
  );
}



export default CategoryModal;