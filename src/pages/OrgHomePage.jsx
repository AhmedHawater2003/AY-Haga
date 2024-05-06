import React from 'react'
import OrgNavbar from "../components/OrgNavbar";
import { useState } from "react";
import HomeDiv from '../components/org/HomeDiv';
import PendingPosts from '../components/org/PendingPosts';
import WaitingPosts from '../components/org/WaitingPosts';
import FulfilledPosts from '../components/org/FulfilledPosts';

const OrgHomePage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const isHome=false;
    const isPending=false;
    const isWaiting=false;
    const isFulfilled=true;

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
                    {isHome&&<HomeDiv/>}
                    {isPending&&<PendingPosts/>}
                    {isWaiting&&<WaitingPosts/>}
                    {isFulfilled&&<FulfilledPosts/>}
                </div>
            </div>  
  )
}

export default OrgHomePage;