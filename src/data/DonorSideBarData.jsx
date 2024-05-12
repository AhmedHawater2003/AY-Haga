import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { DonationDetails } from "../data/DonationsData";
import { TeachingData } from "../data/TeachingData";
import { DoctorData } from "../data/DoctorData";
import DonationTracker from "../components/Tracking/DonationTracker";
import RegOrg from "../components/Admin/RegOrg";
import { RegOrgData } from "./RegOrgData";
import DonationsPage from "../components/Donation/DonationsPage";
import TeacherVolunteerPage from "../components/Donation/TeacherVolunteerPage";
import DoctorVolunteerPage from "../components/Donation/DoctorVolunteerPage";
import DonorHome from "../components/Donation/DonorHome";
export const allData = [...DonationDetails, ...TeachingData, ...DoctorData];

export const DonorSideBarData = [
  {
    title: "Home",
    content: <DonorHome />,

    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Donations",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    content: <DonationsPage />,
  },

  {
    title: "Organizations",
    content: <RegOrg userData={RegOrgData} />,
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Volunteering",
    icon: <IoIcons.IoMdPeople />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "As a Teacher",
        content: <TeacherVolunteerPage />,
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "As a Doctor",
        content: <DoctorVolunteerPage />,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Track Donations",
    content: <DonationTracker />,
    icon: <FaIcons.FaCartPlus />,
  },
];
