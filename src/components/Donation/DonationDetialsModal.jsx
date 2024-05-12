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
  setShowFlag
}) {
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
            <div>
            <h4>Donor Details</h4>
            <DonatinonOrganizationInfo
                    organizationDetails
                  />
            </div>
            {/* {isDoner && (
              <DonationSubmitForm hideModal={hide} isVolunteer={isVolunteer} />
            )}
            {isFulfilled && <DonationPostFulfilledForm item = {donationCardDetials} deletePost={deletePost} />}
            {(isWaiting || isPending) && <DonationPostEditDeleteForm item = {donationCardDetials} deletePost={deletePost} setShowDetails={setShowFlag} />} */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      {isDoner && (
              <DonationSubmitForm hideModal={hide} isVolunteer={isVolunteer} />
            )}
            {isFulfilled && <DonationPostFulfilledForm item = {donationCardDetials} deletePost={deletePost} />}
            {(isWaiting || isPending) && <DonationPostEditDeleteForm item = {donationCardDetials} deletePost={deletePost} setShowDetails={setShowFlag} />}
      </Modal.Footer>
    </Modal>
  );
}

export default DonationDetialsModal;
