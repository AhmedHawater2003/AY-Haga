import Navbar from "./Navbar";
import { useState } from "react";
import DonationsGrid from "./Donation/DonationsGrid";
import styled from "styled-components";
import { IconArrowLeft } from "@tabler/icons-react";
import { DonorSideBarData, allData } from "../data/DonorSideBarData";
import { DonationCategoriesData } from "../data/DonationCategoriesData";
import CategoryFilter from "./FiltrationBar/CategoryFilter";
import FilterBar from "./FiltrationBar/FilterBar";

const HomePage = <h1>Home</h1>;
const HowToUse = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
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
        {content}
      </div>
    </div>
  );
};
export default HowToUse;
