import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import { FaRegBell } from "react-icons/fa6";
import OrgNotificationData from "../../data/OrgNotificationData";
import NotificationTable from "./NotificationTable";
import NotificationDetails from "./NotificationDetails";

const NotificationCenter = ({notificationData}) => {
  const [show, setShow] = useState(false);
  const [showNotificationDetails, setShowNotificationDetails] = useState(false);
  const [notificationDataId, setNotificationDataId] = useState(0);

  const handleClose = () => {
    setShow(false);
    setShowNotificationDetails(false);
  };
  const handleShow = () => setShow(true);

  const handleShowNotificationDetails = (e) => {
    setShow(false);
    setShowNotificationDetails(true);
  };
  const back = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaRegBell style={{ fontSize: 30 }} />
        <Badge
          className="icon"
          bg="danger"
          // style={{ position: "absolute", top: "15px", right: "80px" }}
        >
          {notificationData.length}
        </Badge>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Notification Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notificationData.length > 0 ? (
            <NotificationTable
              notificationData={notificationData}
              showNotificationDetails={showNotificationDetails}
              back={back}
              close={close}
              handleShow={handleShowNotificationDetails}
            />
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
