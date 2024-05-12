import React from "react";
import styled from "styled-components";
import AccountDetailsPopUp from "../NotificationCenter/AccountDetailsPopUp";
import { useState } from "react";
import photo from "../../assets/Profile_Image.png";

const Container = styled.div`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePicture = styled.img`
  border-radius: 0.6rem;
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  margin: 0.5rem;
`;

const OrganizationNameHeader = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

// const [showAccountDonorDetails, setShowAccountDonorDetails] = useState(false); 


const DonorDetialsPost = () => {
    const [showAccountDonorDetails, setShowAccountDonorDetails] = useState(false);

const openAccountDetails = () => {
    setShowAccountDonorDetails(true);
};

const back = () => {
    setShowAccountDonorDetails(false);
};
  return (
    <div
      className="border rounded border-1 m-2"
      style={{ borderColor: "#edeeee" }}
    >
      <Container>
        <InfoContainer>
          <OrganizationNameHeader>Ahmed</OrganizationNameHeader>
          <span>Comm. ID: 777</span>
          <span>livedfajlkdjdlk</span>
          <span>Member Since: 2021</span>
          <a
            href="#"
            onClick={openAccountDetails}
            style={{ textDecoration: "none" }}
          >
            See Profile
          </a>
        </InfoContainer>
        <ProfilePicture alt="Organization Profile Picture" />
      </Container>

      <AccountDetailsPopUp showAccount={showAccountDonorDetails} back={back} />
    </div>
  );
};

export default DonorDetialsPost;
