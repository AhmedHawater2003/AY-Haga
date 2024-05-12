import React, { useState } from "react";
import DonationCard from "./DonationCard";
import DonationDetialsModal from "./DonationDetialsModal";
import OrgFulfilledPostData from "../../data/OrgFulfilledPostData";
import OrgWaitingPostData from "../../data/OrgWaitingPostData";
import OrgPendingPostData from "../../data/OrgPendingPostData";

function DonationsGrid({
  data,
  filterFunction = (donation) => true,
  isDoner,
  isFulfilled,
  isWaiting,
  isPending,
}) {
  const [showDonationDetails, setShowDetails] = useState(false);
  const [shownDonation, setShownDonation] = useState([]);
  const [isVolunteering, setIsVolunteering] = useState(false);
  const [fulfilledPosts , setFulfilledPosts] = useState(OrgFulfilledPostData);
  const [waitingPosts , setWaitingPosts] = useState(OrgWaitingPostData);
  const [pendingPosts , setPendingPosts] = useState(OrgPendingPostData);

 

  const back = () => {
    setShowDetails(true);
  }

  const deletePost = (item) => {
    if(isFulfilled){
      setFulfilledPosts(fulfilledPosts.filter(post => post["id"]!==item["id"]));
    }else if(isWaiting){
      setWaitingPosts(waitingPosts.filter(post => post["id"]!==item["id"]))
    }else if(isPending){
      setPendingPosts(pendingPosts.filter(post => post["id"]!==item["id"]))
     }
     setShowDetails(false);
  }

  const [editPost , setEditPost] = useState(false);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "35px",
          padding: "15px",
          justifyContent: "center",
        }}
      >
        {isDoner &&
          data
            .filter((donation) => filterFunction(donation))
            .map((donation) => (
              <DonationCard
                key={donation.id}
                showDetails={() => setShowDetails(true)}
                donationDetails={donation}
                setShownDonation={() => setShownDonation(donation)}
                setIsVolunteering={setIsVolunteering}
              />
            ))}

        {isFulfilled &&
          fulfilledPosts.map((donation) => (
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
          waitingPosts.map((donation) => (
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
          pendingPosts.map((donation) => (
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
        isVolunteer={isVolunteering}
        isDoner={isDoner}
        isFulfilled={isFulfilled}
        isPending={isPending}
        isWaiting={isWaiting}
        donationCardDetials={shownDonation}
        showFlag={showDonationDetails}
        hide={() => setShowDetails(false)}
        deletePost = {deletePost}
      />
    </>
  );
}

export default DonationsGrid;
