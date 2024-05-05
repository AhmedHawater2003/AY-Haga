import React from 'react'
import Sidebar from '../components/Sidebar';
import OrgNavbar from "../components/OrgNavbar";
import { useState } from "react";

const OrgHomePage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
            <div>
                <OrgNavbar isLanding={false} sideBarFlag={isSideBarOpen}
                    showSideBar={() => setIsSideBarOpen(!isSideBarOpen)} />
                <div
                    style={{
                        margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
                        transition: "200ms",
                    }}
                >
                </div>
            </div>   
            // <div><h1>fsgfifgd</h1></div>  
  )
}

export default OrgHomePage;