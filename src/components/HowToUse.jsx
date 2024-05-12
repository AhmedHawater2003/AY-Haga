import Navbar from "./Navbar";
import { useState } from "react";
import DonationsGrid from "./Donation/DonationsGrid";
import styled from "styled-components";
import { IconArrowLeft } from "@tabler/icons-react";
import { DonorSideBarData, allData } from "../data/DonorSideBarData";
import { DonationCategoriesData } from "../data/DonationCategoriesData";

const HomePage = (
  <DonationsGrid
    data={allData}
    isDoner={true}
    isFullfilled={false}
    isPending={false}
    isWaiting={false}
  />
);
const HowToUse = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [content, setContent] = useState(HomePage);
  const sideBarFunction = (value) => {
    setContent((prev) => value.content);
  };

  const searchBarFunction = (category) => {
    setContent((prev) => (
      <>
        <div className="d-flex py-2 mb-1 align-items-center ">
          <IconArrowLeft
            color="green"
            size={42}
            onClick={() => setContent(prev)}
            cursor={"pointer"}
          />
          <h3 style={{ margin: "auto" }}>Search Results</h3>
        </div>
        {category.content}
      </>
    ));
  };

  return (
    <div>
      <Navbar
        sideBarFlag={true}
        searchBarFlag={true}
        searchBarData={DonationCategoriesData}
        searchBarFunction={searchBarFunction}
        isSideBarOpen={isSideBarOpen}
        showSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
        sideBarData={DonorSideBarData}
        sideBarFunction={sideBarFunction}
        notificationCenterFlag={true}
        isDoner={true}
      />
      <div
        style={{
          margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
          transition: "200ms",
        }}
      >
        {/* <FilterBar /> */}
        {content}
      </div>
    </div>
  );
};
export default HowToUse;
