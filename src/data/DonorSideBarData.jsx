import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { DonationCategoriesData } from "./DonationCategoriesData";
import DonationsGrid from "../components/Donation/DonationsGrid";
import { DonationDetails } from "../data/DonationsData";
import { TeachingData } from "../data/TeachingData";
import { DoctorData } from "../data/DoctorData";
import DonationTracker from "../components/Tracking/DonationTracker";

export const allData = [...DonationDetails, ...TeachingData, ...DoctorData];

export const DonorSideBarData = [
  {
    title: "Home",
    content: (
      <DonationsGrid
        data={allData}
        isDoner={true}
        isFullfilled={false}
        isPending={false}
        isWaiting={false}
      />
    ),
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Donations",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: DonationCategoriesData,
  },
  {
    title: "Volunteering",
    icon: <IoIcons.IoMdPeople />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "As a Teacher",
        content: (
          <DonationsGrid
            data={TeachingData}
            isVolunteer={true}
            isDoner={true}
            isFullfilled={false}
            isPending={false}
            isWaiting={false}
          />
        ),
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "As a Doctor",
        content: (
          <DonationsGrid
            data={DoctorData}
            isVolunteer={true} isDoner={true}
            isFullfilled={false}
            isPending={false}
            isWaiting={false}
          />
        ),
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
