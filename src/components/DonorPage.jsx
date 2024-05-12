import Navbar from "./Navbar";
import { useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { DonorSideBarData } from "../data/DonorSideBarData";
import { DonationCategoriesData } from "../data/DonationCategoriesData";
import { DonationDetails } from "../data/DonationsData";
import DonationsGrid from "./Donation/DonationsGrid";
import AdminAccountDetails from "./Admin/AdminAccountDetails";
import { AdminData } from "../data/AdminData";

import DonorHome from "./Donation/DonorHome";

const HomePage = <DonorHome />;
const DonorPage = () => {
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
        <DonationsGrid
          data={DonationDetails}
          isDoner={true}
          filterFunction={(item) => item.category === category.title}
        />
      </>
    ));
  };

  return (
    <div>
      <Navbar
        accountName={"Marina Nader"}
        email={"marinanader.gmail.com"}
        accountFlag={true}
        setContent={setContent}
        content={<AdminAccountDetails adminData={AdminData} />}
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
export default DonorPage;
