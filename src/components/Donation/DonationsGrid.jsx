import React, { useState } from "react";
import DonationCard from "./DonationCard";
import DonationDetialsModal from "./DonationDetialsModal";
import OrgFulfilledPostData from "../../data/OrgFulfilledPostData";
import OrgWaitingPostData from "../../data/OrgWaitingPostData";
import OrgPendingPostData from "../../data/OrgPendingPostData";

function DonationsGrid({
  data,
  isVolunteer,
  filterFunction = (donation) => true,
  isDoner,
  isFulfilled,
  isWaiting,
  isPending,
}) {
  const [showDonationDetails, setShowDetails] = useState(false);
  const [shownDonation, setShownDonation] = useState(data[0]);

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
        {isDoner &&
          data.filter(
            (donation) => filterFunction(donation)).map((donation) => (
            <DonationCard
              key={donation.id}
              showDetails={() => setShowDetails(true)}
              donationDetails={donation}
              setShownDonation={() => setShownDonation(donation)}
            />
          ))}

        {isFulfilled &&
          OrgFulfilledPostData.map((donation) => (
            <DonationCard
              key={donation.id}
              isFulfilled={isFulfilled}
              isWaiting={false}
              isPending={false}
              showDetails={() => setShowDetails(true)}
              donationDetails={donation}
              setShownDonation={() => setShownDonation(donation)}
            />
          ))}

        {isWaiting &&
          OrgWaitingPostData.map((donation) => (
            <DonationCard
              key={donation.id}
              isFulfilled={false}
              isWaiting={isWaiting}
              isPending={false}
              showDetails={() => setShowDetails(true)}
              donationDetails={donation}
              setShownDonation={() => setShownDonation(donation)}
            />
          ))}
        {isPending &&
          OrgPendingPostData.map((donation) => (
            <DonationCard
              key={donation.id}
              isFulfilled={false}
              isWaiting={false}
              isPending={isPending}
              showDetails={() => setShowDetails(true)}
              donationDetails={donation}
              setShownDonation={() => setShownDonation(donation)}
            />
          ))}
      </div>

      <DonationDetialsModal
      isVolunteer={isVolunteer}
        isDoner={isDoner}
        isFulfilled={isFulfilled}
        isPending={isPending}
        isWaiting={isWaiting}
        donationCardDetials={shownDonation}
        showFlag={showDonationDetails}
        hide={() => setShowDetails(false)}
      />
    </>
  );
}

export default DonationsGrid;
