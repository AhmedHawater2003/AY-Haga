import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import { FaRegBell } from "react-icons/fa6";
import OrgNotificationData from "../../data/OrgNotificationData";
import NotificationTable from "./NotificationTable";
import RequestPopUp from "./RequestPopUp";
import AnnouncementPopUp from "./AnnouncementPopUp";
import { Avatar } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

const NotificationCenter = ({ notificationData }) => {
  const [show, setShow] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAnnounce(false);
    setShowRequest(false);
  };
  const handleShow = () => setShow(true);

  const handleShowRequest = () => {
    setShowRequest(true);
    setShowAnnounce(false);
    setShow(false);
  };
  const handleShowAnnounce = () => {
    setShowRequest(false);
    setShowAnnounce(true);
    setShow(false);
  };
  const back = () => {
    setShow(true);
    setShowAnnounce(false);
    setShowRequest(false);
  };

  const close = () => {
    setShow(false);
    setShowNotificationDetails(false);
  };

  return (
    <>
      <ActionIcon
        variant="filled"
        radius="md"
        color="teal"
        onClick={handleShow}
        size={"xl"}
      >
        <FaRegBell style={{ width: "70%", height: "70%" }} stroke="1.5" />
      </ActionIcon>

      <Modal show={show} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Notification Center</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notificationData.length > 0 ? (
            <NotificationTable
              notificationData={OrgNotificationData}
              handleShowRequest={handleShowRequest}
              handleShowAnnounce={handleShowAnnounce}
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
    </>
  );
};

export default NotificationCenter;
