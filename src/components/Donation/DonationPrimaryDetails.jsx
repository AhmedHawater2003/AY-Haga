import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2.394rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

const DetialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  flex-basis: 50%;
  padding: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

function DonationPrimaryDetails({ donationPrimaryDetails }) {
  return (
    <div
      className="border rounded border-1 m-2 p-2"
      style={{ borderColor: "#edeeee" }}
    >
      <Heading>Details</Heading>
      <DetialsContainer>
        {Object.entries(donationPrimaryDetails).map(([key, value]) => (
          <InfoContainer key={key}>
            <Info>
              <span style={{ flexBasis: "50%" }}>{key}</span>
              <span style={{ flexBasis: "50%", fontWeight: "bold" }}>
                {value}
              </span>
            </Info>
          </InfoContainer>
        ))}
      </DetialsContainer>
    </div>
  );
}

export default DonationPrimaryDetails;
