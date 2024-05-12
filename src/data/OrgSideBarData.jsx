import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import FulfilledPosts from "../components/org/FulfilledPosts";
import PendingPosts from "../components/org/PendingPosts";
import WaitingPosts from "../components/org/WaitingPosts";
import HomeDiv from "../components/org/HomeDiv";
import { MdPendingActions, MdDoneOutline} from "react-icons/md";

const OrgSidebarData = [
  {
    title: "Home",
    content: <HomeDiv />,
    icon: <AiIcons.AiFillHome />,
  },
  {

    title: "Donations",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Pending Approval",
        content:<PendingPosts />,
        icon: <MdPendingActions />,
      },
      {
        title: "Waiting for donation",
        content:<WaitingPosts />,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Fulfilled",
        content:<FulfilledPosts />,
        icon: <MdDoneOutline />,
      },
    ]
  },
];

export default OrgSidebarData;