import Navbar from "./Navbar";
import { useState } from "react";
import DonationsGrid from "./Donation/DonationsGrid";
import FilterBar from "./FiltrationBar/FilterBar";
import { DonorSideBarData, allData } from "../data/DonorSideBarData";
import { DonationCategoriesData } from "../data/DonationCategoriesData";
import TrackTest from "./Tracking/TrackTest";
import Demo from "./Tracking/Stepper";

const HowToUse = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [content, setContent] = useState(
    <DonationsGrid
      data={allData}
      isDoner={true}
      isFullfilled={false}
      isPending={false}
      isWaiting={false}
    />
  );
  const sideBarFunction = (value) => {
    setContent(value.content);
  };

  return (
    <div>
      <Navbar
        sideBarFlag={true}
        searchBarFlag={true}
        searchBarData={DonationCategoriesData}
        searchBarFunction={(item) => setContent(item.content)}
        isSideBarOpen={isSideBarOpen}
        showSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
        sideBarData={DonorSideBarData}
        sideBarFunction={sideBarFunction}
      />
      <div
        style={{
          margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
          transition: "200ms",
        }}
      >
        <FilterBar />
        {content}
      </div>
    </div>
  );
};
export default HowToUse;
