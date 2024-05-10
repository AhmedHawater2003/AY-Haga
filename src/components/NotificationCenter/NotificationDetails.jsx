import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const NotificationDetails = ({notificationData,showNotificationDetails,back,close}) => {

  const handleClose = () => {close();};
  const handleBack = () => {back();};
  return (
    <>
    
      <Modal show={showNotificationDetails} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{notificationData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Schedule delivery time
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotificationDetails;
