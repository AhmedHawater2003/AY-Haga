import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';


import med_icon from '../../assets/medical_icon.png';
import blood_icon from '../../assets/blood-drop.png';
import school_icon from '../../assets/school-icon.png';
import food_icon from '../../assets/food-icon.png';
import clothing_icon from '../../assets/clothes-icon.png';
import toy_icon from '../../assets/toys-icon.png';



function CategoryModal() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {setShow(false);setShowAlert(false);}
  const handleShow = () => setShow(true);

  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = () => setShowAlert(true);

  const isSuccess = false;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Post
      </Button>

      <Modal show={show} onHide={handleClose} 
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "10px",
                    padding: "15px",
                    justifyContent: "center"
                }}>
                    <div className="card">
                        <img src={med_icon} alt='medical_icon' className="card-icon"></img>
                        <div className="card-title">Medical Sector</div>
                        <div className="card-description">Donate Medications, Medical Equipment & Supplies</div>
                    </div>
                    <div className="card">
                        <img src={blood_icon} alt='blood_icon' className="card-icon"></img>
                        <div className="card-title">Blood Donations</div>
                        <div className="card-description">Save lives by donating your blood.</div>
                    </div>
                    <div className="card">
                        <img src={school_icon} alt='school_icon' className="card-icon"></img>
                        <div className="card-title">School Donations</div>
                        <div className="card-description">Support education by donating supplies, books, and equipment to schools.</div>
                    </div>
                    <div className="card">
                        <img src={food_icon} alt='food_icon' className="card-icon"></img>
                        <div className="card-title">Food Donations</div>
                        <div className="card-description">Help fight hunger by donating food to those in need.</div>
                    </div>
                    <div className="card">
                        <img src={clothing_icon} alt='clothing_icon' className="card-icon"></img>
                        <div className="card-title">Clothing Donations</div>
                        <div className="card-description">Make a difference by donating clothes to those who need them.</div>
                    </div>
                    <div className="card" >
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
    </>
  );
}



export default CategoryModal;