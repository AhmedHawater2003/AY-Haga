import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DonationImage from "./DonationImage";
import DonationPrimaryDetails from "./DonationPrimaryDetails";
import DonationAdditionalDetails from "./DonationAdditionalDetails";
import DonatinonOrganizationInfo from "./DonatinonOrganizationInfo";
import { RegisteredOrgs } from "../../data/RegisteredOrgs";

function DonationDetialsModal({ donationCardDetials, showFlag, hide }) {
  return (
    <Modal size="xl" show={showFlag} onHide={hide} scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{donationCardDetials["title"]}</Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable>
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
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>
          Close
        </Button>
        <Button variant="primary" onClick={hide}>
          Donate !
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DonationDetialsModal;
