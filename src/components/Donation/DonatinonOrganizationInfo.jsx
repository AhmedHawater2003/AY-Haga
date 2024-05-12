import React from "react";
import styled from "styled-components";

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

function DonatinonOrganizationInfo({ organizationDetails }) {
  return (
    <div
      className="border rounded border-1 m-2"
      style={{ borderColor: "#edeeee" }}
    >
      <Container>
        <InfoContainer>
          <OrganizationNameHeader>
            {organizationDetails["title"]}
          </OrganizationNameHeader>
          <span>{`Comm. ID: ${organizationDetails["commID"]}`}</span>
          <span>{organizationDetails["location"]}</span>
          <span>{`Member Since: ${organizationDetails["memberSince"]}`}</span>
          <a
            href={organizationDetails["profileLink"]}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {"See Profile"}
          </a>
        </InfoContainer>
        <ProfilePicture
          src={organizationDetails["profilePicture"]}
          alt="Organization Profile Picture"
        />
      </Container>
    </div>
  );
}

export default DonatinonOrganizationInfo;
