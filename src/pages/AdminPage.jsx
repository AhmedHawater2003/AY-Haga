import Navbar from "../components/Navbar";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {PendingOrgData} from "../data/PendingOrgData";
import PendingOrg from "../components/Admin/PendingOrg";
import { Button } from "react-bootstrap";
import { RegOrgData } from "../data/RegOrgData";
import RegOrg from "../components/Admin/RegOrg";
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
                    content: <PendingOrg />,
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
                    content: <RegOrg  userData={RegOrgData}/>,
                    icon: <IoIcons.IoIosPaper />,
                    data: RegOrgData
                },
                {
                    title: "Organization Requests",
                    content: <PendingOrg userData={PendingOrgData}/>,
                    icon: <IoIcons.IoIosPaper />,
                    data: PendingOrgData
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
