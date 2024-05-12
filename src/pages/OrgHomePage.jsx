import React from "react";
import OrgSidebarData from "../data/OrgSideBarData";
import { useState } from "react";
import Navbar from "../components/Navbar";
import HomeDiv from "../components/org/HomeDiv";
import OrgAccountDetails from "../components/org/OrgAccountDetails";

const OrgHomePage = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [content, setContent] = useState(<HomeDiv />);

  const sideBarFunction = (value) => {
    setContent(value.content);
  };

  return (
    <div>
      <Navbar
        sideBarFlag={true}
        isSideBarOpen={isSideBarOpen}
        showSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
        sideBarData={OrgSidebarData}
        sideBarFunction={sideBarFunction}
        notificationCenterFlag={true}
        setContent={setContent}
        content={<OrgAccountDetails/>}
        accountFlag={true}
        isOrg={true}
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

export default OrgHomePage;