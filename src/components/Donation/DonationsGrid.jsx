import React, { useState } from "react";
import { DonationDetails } from "../../data/DonationsData";
import DonationCard from "./DonationCard";
import DonationDetialsModal from "./DonationDetialsModal";

function DonationsGrid({ category }) {
  const [showDonationDetails, setShowDetails] = useState(false);
  const [shownDonation, setShownDonation] = useState(DonationDetails[0]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "32px",
          padding: "15px",
          justifyContent: "center",
        }}
      >
        {DonationDetails.filter(
          (donation) => category === "All" || donation.category === category
        ).map((donation) => (
          <DonationCard
            key={donation.id}
            showDetails={() => setShowDetails(true)}
            donationDetails={donation}
            setShownDonation={() => setShownDonation(donation)}
          />
        ))}
      </div>

      <DonationDetialsModal
        donationCardDetials={shownDonation}
        showFlag={showDonationDetails}
        hide={() => setShowDetails(false)}
      />
    </>
  );
}

export default DonationsGrid;
