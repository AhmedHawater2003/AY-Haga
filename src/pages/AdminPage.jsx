import Navbar from "../components/Navbar";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

import DonationsGrid from "../components/Donation/DonationsGrid";
import FilterBar from "../components/FiltrationBar/FilterBar";
import AdminList from "../components/Admin/AdminList";
const AdminPage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sideBarData = [
      {
        title: "Donors",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
  
        subNav: [
          {
            title: "Active Donor Accounts",
            content: <h1>Active</h1>,
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "Pending Probono Requests",
            content: <AdminList />,
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      {
        title: "Organizations",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Active Organization Accounts",
                content: <h1>Active</h1>,
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Pending Organization Requests",
                content: <h1>Pending</h1>,
                icon: <IoIcons.IoIosPaper />,
            },
            ],
        },
    ];
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
          sideBarData={sideBarData}
          sideBarFunction={sideBarFunction}
          notificationCenterFlag={true}
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
export default AdminPage;
  