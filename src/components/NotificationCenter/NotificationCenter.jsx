import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegBell } from "react-icons/fa6";
import OrgNotificationData from "../../data/OrgNotificationData";
import NotificationTable from "./NotificationTable";
import RequestPopUp from "./RequestPopUp";
import AnnouncementPopUp from "./AnnouncementPopUp";
import { ActionIcon,Indicator  } from "@mantine/core";
import DeliveryPopUp from "./DeliveryPopUp";



const NotificationCenter = ({ notificationData, isAdmin,setContentNotification }) => {
  const [show, setShow] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAnnounce(false);
    setShowRequest(false);
    setShowDelivery(false);
  };
  const handleShow = () => setShow(true);

  const handleShowRequest = () => {
    setShowRequest(true);
    setShowAnnounce(false);
    setShowDelivery(false);
    setShow(false);
  };
  const handleShowAnnounce = () => {
    setShowRequest(false);
    setShowDelivery(false);
    setShowAnnounce(true);
    setShow(false);
  };
  const handleShowDelivery = () => {
    setShowRequest(false);
    setShowDelivery(true);
    setShowAnnounce(false);
    setShow(false);
  }
  const back = () => {
    setShow(true);
    setShowAnnounce(false);
    setShowRequest(false);
    setShowDelivery(false);
  };

  return (
    <>
    <Indicator inline label="4"  color="red" size={16}>
      <ActionIcon
        variant="filled"
        radius="md"
        color="teal"
        onClick={handleShow}
        size={"xl"}
      >
        <FaRegBell style={{ width: "70%", height: "70%" }} stroke="1.5" />
      </ActionIcon>
      </Indicator>
      <Modal show={show} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Notification Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notificationData.length > 0 ? (
            <NotificationTable
              isAdmin={isAdmin}
              setContentNotification={setContentNotification}
              notificationData={notificationData}
              handleShowRequest={handleShowRequest}
              handleShowAnnounce={handleShowAnnounce}
              handleShowDelivery={handleShowDelivery}
              setShow={setShow}
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

      <RequestPopUp show={showRequest} back={back} />
      <AnnouncementPopUp show={showAnnounce} back={back} />
      <DeliveryPopUp show={showDelivery} back={back} />
    </>
  );
};

export default NotificationCenter;
