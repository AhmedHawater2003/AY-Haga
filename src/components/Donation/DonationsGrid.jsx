import React, { useState } from "react";
import { DonationDetails } from "../../data/DonationsData";
import DonationCard from "./DonationCard";
import DonationDetialsModal from "./DonationDetialsModal";
import OrgFulfilledPostData from "../../data/OrgFulfilledPostData";
import OrgWaitingPostData from "../../data/OrgWaitingPostData";
import OrgPendingPostData from "../../data/OrgPendingPostData";

function DonationsGrid({ category,isDoner, isFulfilled, isWaiting, isPending }) {
  const [showDonationDetails, setShowDetails] = useState(false);
  const [shownDonation, setShownDonation] = useState(DonationDetails[0]);

  return (
    <>
      <div className="d-flex flex-wrap gap-5 ">
        {isDoner&&DonationDetails.filter(
          (donation) => category === "All" || donation.category === category
        ).map((donation) => (
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
