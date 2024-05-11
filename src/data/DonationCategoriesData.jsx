import * as IoIcons from "react-icons/io";
import { DonationDetails } from "./DonationsData";
import DonationsGrid from "../components/Donation/DonationsGrid"

export const DonationCategoriesData = [
  {
    id: 1,
    title: "Clothes",
    content: <DonationsGrid data={DonationDetails} filterFunction={(donation) => donation.category === "Clothes"}  isDoner={true} isFullfilled={false} isPending={false} isWaiting={false} />,
    // path: "/overview/users",
    icon: <IoIcons.IoIosPaper />,
  }, 
  {
    id: 2,
    title: "Food",
    content: <h1>Food</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 3,
    title: "Toys",
    content: <h1>Toys</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 4,
    title: "Books",
    content: <h1>Books</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 5,
    title: "Electronics",
    content: <h1>Electronics</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 6,
    title: "Furniture",
    content: <h1>Furniture</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 7,
    title: "Household Items",
    content: <h1>Household Items</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 8,
    title: "Miscellaneous",
    content: <h1>Miscellaneous</h1>,
    path: "/overview/revenue",
    icon: <IoIcons.IoIosPaper />,
  },

]