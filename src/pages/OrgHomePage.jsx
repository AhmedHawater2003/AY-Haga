import React from 'react'
import OrgSidebarData from "../data/OrgSideBarData";
import { useState } from "react";
import HomeDiv from '../components/org/HomeDiv';
import PendingPosts from '../components/org/PendingPosts';
import WaitingPosts from '../components/org/WaitingPosts';
import FulfilledPosts from '../components/org/FulfilledPosts';
import Navbar from '../components/Navbar';
import OrgAccountDetails from '../components/org/OrgAccountDetails';
import AccountButton from '../components/AccountButton';

const OrgHomePage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const [isFulfilled, setIsFulfilled] = useState(false);
    const [isAccount, setIsAccount] = useState(true);

    const [content, setContent] = useState(<h1>home</h1>);
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
      />
                <div
                    style={{
                        margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
                        transition: "200ms",
                    }}
                >
                    {isHome && <HomeDiv/>}
                    {isPending && <PendingPosts/>}
                    {isWaiting && <WaitingPosts/>}
                    {isFulfilled && <FulfilledPosts/>}
                    {isAccount && <OrgAccountDetails/>}
                </div>
            </div>  
  )
}

export default OrgHomePage;