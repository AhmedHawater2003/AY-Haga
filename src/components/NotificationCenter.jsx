import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { FaRegBell } from "react-icons/fa6";

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };
  const handleShow = () => setShow(true);

  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = () => setShowAlert(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
          <FaRegBell style={{ fontSize: 30 }} />
              <Badge className="icon" bg="danger" style={{position:"absolute",top:"15px",right:"80px"}}>
                {notifications.length}
              </Badge>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Notification Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notifications.length > 0 ? (
            notifications.map((notification, index))
          ) : (
            <h1> Nothing to see here</h1>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotificationCenter;
