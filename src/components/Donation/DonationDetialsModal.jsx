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
  const [address , setAdress] = useState('');
  const [area , setArea] = useState('');
  const [governorate , setGovernorate] = useState(''); 

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
            {/* <GoogleLocator
              getAddress={ (address) => setAdress(address)}
              getArea={(area) => setArea(area)}
              getGovernorate={(governorate) => setGovernorate(governorate)}
            /> */}
            <h5>Location:</h5>
                <iframe
                  loading="lazy"
                  width="100%"
                  height="350"
                  // src="https://www.openstreetmap.org/export/embed.html?bbox=31.49055272340775%2C30.05854335635291%2C31.49306327104569%2C30.060217136224946\&layer=mapnik\&marker=30.059380249826162%2C31.491807997226715"
                  src = 'https://www.openstreetmap.org/export/embed.html?bbox=31.49055272340775%2C30.05854335635291%2C31.49306327104569%2C30.060217136224946'
                  style={{
                    border: "2px solid #0ca678",
                    width: "50%",
                    borderRadius: "20px",
                  }}
                  ></iframe>
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
            {(isFulfilled) &&<div>
            <h4>Donor Details</h4>
            <DonatinonOrganizationInfo
                    organizationDetails
                  />
            </div>}
            {isDoner && (
              <DonationSubmitForm hideModal={hide} isVolunteer={isVolunteer} />
            )}
                        {/*{isFulfilled && <DonationPostFulfilledForm item = {donationCardDetials} deletePost={deletePost} />}
            {(isWaiting || isPending) && <DonationPostEditDeleteForm item = {donationCardDetials} deletePost={deletePost} setShowDetails={setShowFlag} />} */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
            {/* {isDoner && (
              <DonationSubmitForm hideModal={hide} isVolunteer={isVolunteer} />
            )} */}
            {isFulfilled && <DonationPostFulfilledForm item = {donationCardDetials} deletePost={deletePost} />}
            {(isWaiting || isPending) && <DonationPostEditDeleteForm item = {donationCardDetials} deletePost={deletePost} setShowDetails={setShowFlag} />}
      </Modal.Footer>
    </Modal>
  );
}

export default DonationDetialsModal;
