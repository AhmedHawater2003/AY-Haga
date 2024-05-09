import React from "react";
import styled from "styled-components";

const Picture = styled.picture`
  border: 0.5px solid #c8c8c8;
  border-radius: 0.75rem;
  display: block;
  height: 100%;
  overflow: hidden;
  padding-top: 56.25% !important;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  object-fit: ffill;
  position: absolute;
  top: 0;
  width: 100%;
`;

function DonationImage({ src, alt = "Please add alt text :)" }) {
  return (
    <div className="box border-danger m-2">
      <Picture>
        <Image src={src} alt={alt}></Image>
      </Picture>
    </div>
  );
}

export default DonationImage;
