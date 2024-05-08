import Navbar from "./Navbar";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";


const HowToUse = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sideBarData = [
        {
          title: "Summary",
          icon: <AiIcons.AiFillHome />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
      
          subNav: [
            {
              title: "Users",
              content: <h1>Users</h1>,
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Revenue",
              content: <h1>Reven</h1>,
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
    ];
    const [content,setContent] = useState(<h1>home</h1>);
    const sideBarFunction = (value) => {
        setContent(value.content);
    }
    return (
        <div>
            <Navbar sideBarFlag={true} isSideBarOpen={isSideBarOpen}
                showSideBar={() => setIsSideBarOpen(!isSideBarOpen)}
                sideBarData={sideBarData} sideBarFunction={sideBarFunction} />
            <div
                style={{
                    margin: `20px 20px 20px ${isSideBarOpen ? "270px" : "20px"}`,
                    transition: "200ms",
                }}>
                    {content}
            </div>
            
        </div>
    );
}
export default HowToUse;