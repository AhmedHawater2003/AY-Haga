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

function DonationLocation({ donationPrimaryDetails }) {
  return (
    <div className=" m-2 p-2" style={{ borderColor: "#edeeee" }}>
      <Heading>Location</Heading>
      <DetialsContainer>
        <iframe
          loading="lazy"
          width="100%"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=31.49055272340775%2C30.05854335635291%2C31.49306327104569%2C30.060217136224946"
          style={{
            border: "2px solid edeeee",
            borderRadius: "20px",
          }}
        ></iframe>
      </DetialsContainer>
    </div>
  );
}

export default DonationLocation;
