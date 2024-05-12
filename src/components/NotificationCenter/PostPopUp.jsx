import React from "react";
import { Button, Modal } from "react-bootstrap";
import DonationImage from "../Donation/DonationImage";
import DonationPrimaryDetails from "../Donation/DonationPrimaryDetails";
import DonationAdditionalDetails from "../Donation/DonationAdditionalDetails";

const PostPopUp = ({ donationCardDetials, showPost, back }) => {
  const handleBack = () => {
    back();
  };
  return (
    <Modal show={showPost} onHide={handleBack} size="xl" scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{donationCardDetials["title"]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="donation-details d-flex flex-column h-100 ">
          <DonationPrimaryDetails
            donationPrimaryDetails={donationCardDetials["primaryDetails"]}
          />
          <DonationImage src={donationCardDetials["image"]} />
          <DonationAdditionalDetails
            donationAdditionalDetails={donationCardDetials["additionalDetails"]}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleBack}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostPopUp;
