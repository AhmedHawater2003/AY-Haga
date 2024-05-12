import Navbar from "../components/Navbar";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {PendingOrgData} from "../data/PendingOrgData";
import PendingOrg from "../components/Admin/PendingOrg";
import { RegOrgData } from "../data/RegOrgData";
import RegOrg from "../components/Admin/RegOrg";
import PendingDonor from "../components/Admin/PendingDonor";
import { PendingDonorData } from "../data/PendingDonorData";
import RegDonor from "../components/Admin/RegDonor";
import { RegDonorData } from "../data/RegDonorData";
import { IoPersonSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
const AdminPage = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sideBarData = [
        {
            title: "Dashboard",
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            content: <h1>Dashboard</h1>,
        },
        {
            title: "Donors",
            icon: <IoPersonSharp />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,

            subNav: [
                {
                    title: "Active Donor Accounts",
                    content: <RegDonor userData={RegDonorData}/>,
                    icon: <IoIcons.IoIosPaper />,
                    data: RegDonorData
                },
                {
                    title: "Pending Probono Requests",
                    content: <PendingDonor userData={PendingDonorData}/>,
                    icon: <IoIcons.IoIosPaper />,
                    data: PendingDonorData
                },
            ],
        },
        {
            title: "Organizations",
            icon: <VscOrganization />,
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
