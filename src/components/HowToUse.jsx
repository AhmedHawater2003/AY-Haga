import Navbar from "./Navbar";
import { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import DonationsGrid from "./DonationsGrid";

const HowToUse = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div>
      <Navbar
        isLanding={false}
        sideBarFlag={isSideBarOpen}
        showSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
      />
      <div
        className="content"
        style={{
          margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
          transition: "200ms",
        }}
      >
        <div className="d-flex justify-content-between bg-primary p-3 mb-3">
          <h1>Category Name</h1>
          <SearchBar
            formStyling={{ width: "50%", height: "50px" }}
            inputStyle={{ width: "50%" }}
          />
        </div>
        <DonationsGrid />
      </div>
      <div>
        {/* <Switch>
            <Route path="/overview" exact component={Overview} />
            <Route path="/reports" exact component={Reports} />
            <Route path="/reports/reports1" exact component={ReportsOne} />
            <Route path="/reports/reports2" exact component={ReportsTwo} />
            <Route path="/reports/reports3" exact component={ReportsThree} />
            <Route path="/team" exact component={Team} />
            </Switch> */}
      </div>
    </div>
  );
};
export default HowToUse;
