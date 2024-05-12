import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegBell } from "react-icons/fa6";
import NotificationTable from "./NotificationTable";
import RequestPopUp from "./RequestPopUp";
import AnnouncementPopUp from "./AnnouncementPopUp";
import { ActionIcon, Indicator } from "@mantine/core";
import DeliveryPopUp from "./DeliveryPopUp";



const NotificationCenter = ({ notificationData, isAdmin,setContentNotification }) => {
  const [show, setShow] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showPost, setShowPost] = useState(false);

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
    setShowAccountDetails(false);
  };
  const handleShowAnnounce = () => {
    setShowRequest(false);
    setShowDelivery(false);
    setShowAnnounce(true);
    setShow(false);
    setShowAccountDetails(false);
  };
  const handleShowDelivery = () => {
    setShowRequest(false);
    setShowDelivery(true);
    setShowAnnounce(false);
    setShowAccountDetails(false);
    setShow(false);
  };
  const handleShowAccountDetails = () => {
    setShowAccountDetails(true);
    setShowRequest(false);
    setShowDelivery(false);
    setShowAnnounce(false);
    setShow(false);
  };
  const handleShowPost = () => {
    setShowPost(true);
    setShowAccountDetails(false);
    setShowRequest(false);
    setShowDelivery(false);
    setShowAnnounce(false);
    setShow(false);
  };
  const backAccountDetails = () => {
    setShowAccountDetails(false);
    setShowRequest(true);
    setShowDelivery(false);
    setShowAnnounce(false);
    setShow(false);
  };
  const backPost = () => {
    setShowPost(false);
    setShowAccountDetails(false);
    setShowRequest(true);
    setShowDelivery(false);
    setShowAnnounce(false);
    setShow(false);
  };
  const back = () => {
    setShow(true);
    setShowAnnounce(false);
    setShowRequest(false);
    setShowDelivery(false);
  };

  return (
    <>
      <Indicator inline label="4" color="red" size={16}>
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
              handleShowAccountDetails={handleShowAccountDetails}
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

      <RequestPopUp
        show={showRequest}
        back={back}
        handleShowAccountDetails={handleShowAccountDetails}
        handleShowPost={handleShowPost}
      />
      <AnnouncementPopUp show={showAnnounce} back={back} />
      <DeliveryPopUp show={showDelivery} back={back} />
      <AccountDetailsPopUp
        showAccount={showAccountDetails}
        back={backAccountDetails}
      />
      <PostPopUp donationCardDetials={{
    id: 10,
    title: "Math Teacher for Orphans in Giza",
    summary: "Volunteer to teach mathematics to orphaned children in Giza.",
    isVolunteering: true,
    primaryDetails: {
      Address: "Giza, Egypt",
      "Number of students": "20",
      Subjects: "Mathematics",
    },
    organization: "Hope Haven Orphanage",
    additionalDetails:
      "Help provide specialized education and support to orphaned children",
    image:
      "https://copticorphans.org/wp-content/uploads/2021/08/Home-Page-Ask-Image-534x534-1.jpg",
  }} showPost={showPost} back={backPost} />
    </>
  );
};

export default NotificationCenter;
