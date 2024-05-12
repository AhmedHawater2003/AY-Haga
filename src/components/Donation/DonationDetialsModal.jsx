import React from "react";
import Modal from "react-bootstrap/Modal";
import DonationImage from "./DonationImage";
import DonationPrimaryDetails from "./DonationPrimaryDetails";
import DonationAdditionalDetails from "./DonationAdditionalDetails";
import DonatinonOrganizationInfo from "./DonatinonOrganizationInfo";
import { RegisteredOrgs } from "../../data/RegisteredOrgs";
import DonationSubmitForm from "./DonationSubmitForm";
import DonationPostFulfilledForm from "./DonationPostFulfilledForm";
import DonationPostEditDeleteForm from "./DonationPostEditDeleteForm";
import GoogleLocator from "../GoogleLocator";
import { useState } from "react";
import DonorDetialsPost from "./DonorDetialsPost";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import DonationLocation from "./DonationLocation";

function DonationDetialsModal({
  isDoner,
  isVolunteer,
  isFulfilled,
  isWaiting,
  isPending,
  donationCardDetials,
  showFlag,
  hide,
  deletePost,
  back,
  setShowFlag,
}) {
  const [address, setAdress] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [validated, setValidated] = useState(false);
  const [alertFlag, setAlertFlag] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.currentTarget.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(false);
      event.target.reset();
      setAlertFlag(true);
      setTimeout(() => {
        setAlertFlag(false);
        handleClose();
      }, 2000);
    }
  };

  return (
    <Modal size="xl" show={showFlag} onHide={hide} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{donationCardDetials["title"]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container d-flex  w-100">
          <div
            className="donation-details d-flex flex-column h-100 "
            style={{ width: "70%" }}
          >
            <DonationImage src={donationCardDetials["image"]} />
            <DonationPrimaryDetails
              donationPrimaryDetails={donationCardDetials["primaryDetails"]}
            />

            <DonationAdditionalDetails
              donationAdditionalDetails={
                donationCardDetials["additionalDetails"]
              }
            />
            <DonationLocation />
          </div>

          <div
            className="org-info d-flex flex-column h-100"
            style={{ width: "30%" }}
          >
            <DonatinonOrganizationInfo
              organizationDetails={
                RegisteredOrgs[donationCardDetials["organization"]]
              }
            />
            {isFulfilled && (
              <div>
                <h4>Donor Details</h4>
                <DonorDetialsPost />
                <Form
                  className="d-flex flex-column justify-content-center"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicAdditionalDetails"
                  >
                    <Form.Label>Acknowledge Donor Contributions</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter gentle message to the donor..."
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <Alert
                  variant="success"
                  style={{ marginTop: "10px", textAlign: "center" }}
                  show={alertFlag}
                >
                  Donation scheduled&#128154;
                </Alert>
              </div>
            )}
            {isDoner && (
              <DonationSubmitForm hideModal={hide} isVolunteer={isVolunteer} />
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {isFulfilled && (
          <DonationPostFulfilledForm
            item={donationCardDetials}
            deletePost={deletePost}
          />
        )}
        {(isWaiting || isPending) && (
          <DonationPostEditDeleteForm
            item={donationCardDetials}
            deletePost={deletePost}
            setShowDetails={setShowFlag}
          />
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default DonationDetialsModal;
