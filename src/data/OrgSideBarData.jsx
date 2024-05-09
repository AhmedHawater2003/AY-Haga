import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const OrgSidebarData = [
  {
    title: "Overview",
    path: "#",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Donation Posts",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Pending Approval",
        path: "/org/my-donation-post/pending-approval",
        icon: <IoIcons.IoIosPrint />,
        cName: "sub-nav",
      },
      {
        title: "Waiting for donation",
        path: "/org/my-donation-post/waiting-for-donation",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Fullfilled",
        path: "/org/my-donation-post/fullfilled",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];