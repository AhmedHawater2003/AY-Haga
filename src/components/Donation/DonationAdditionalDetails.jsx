import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2.394rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

const Container = styled.div`
  padding: 10px;
  margin: 1rem 0;
  font-size: 1.1rem;
`;

function DonationAdditionalDetails({ donationAdditionalDetails }) {
  return (
    <div
      className="border rounded border-1 m-2 p-2"
      style={{ borderColor: "#edeeee" }}
    >
      <Heading>Additional Information</Heading>
      <Container>{donationAdditionalDetails}</Container>
    </div>
  );
}

export default DonationAdditionalDetails;
