import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import FulfilledPosts from "../components/org/FulfilledPosts";
import PendingPosts from "../components/org/PendingPosts";
import WaitingPosts from "../components/org/WaitingPosts";
import HomeDiv from "../components/org/HomeDiv";

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
        icon: <IoIcons.IoIosPrint />,
      },
      {
        title: "Waiting for donation",
        content:<WaitingPosts />,
        icon: <IoIcons.IoIosPrint />,
      },
      {
        title: "Fulfilled",
        content:<FulfilledPosts />,
        icon: <IoIcons.IoIosPrint />,
      },
    ]
  },
  {
    title: "Track Donations",
    path: "#",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];




// [
//   {
//     title: "Overview",
//     path: "#",
//     icon: <AiIcons.AiFillHome />,
//   },
//   {
//     title: "Donation Posts",
//     path: "#",
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: "Pending Approval",
//         icon: <IoIcons.IoIosPrint />,
//         cName: "sub-nav",
//       },
//       {
//         title: "Waiting for donation",
//         path: "/org/my-donation-post/waiting-for-donation",
//         icon: <IoIcons.IoIosPaper />,
//         cName: "sub-nav",
//       },
//       {
//         title: "Fullfilled",
//         path: "/org/my-donation-post/fullfilled",
//         icon: <IoIcons.IoIosPaper />,
//       },
//     ],
//   },
//   {
//     title: "Team",
//     path: "/team",
//     icon: <IoIcons.IoMdPeople />,
//   },
//   {
//     title: "Support",
//     path: "/support",
//     icon: <IoIcons.IoMdHelpCircle />,
//   },
// ];

export default OrgSidebarData;