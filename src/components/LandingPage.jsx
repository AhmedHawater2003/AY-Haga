import Navbar from "./Navbar";
import Sections from "./Sections";
import Summary from "./Summary";
import Contact from "./Contact";
import { useState } from "react";
const LandingPage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const titles = ["Medical Sector", "Blood Donations", "School Donations", "Food Donations", "Clothing Donations", "Toy Donations"];
    const values = [250, 100, 150, 200, 300, 50];
    return ( 
        <>
            <Navbar isLanding={true} sideBarFlag={isSideBarOpen} showSideBar={() => setIsSideBarOpen(!isSideBarOpen)} />
            <Sections />
            <Summary />
            <Sections insights={true} titles={titles} values={values}/>
            <Contact />
        </>
    );
}

export default LandingPage;