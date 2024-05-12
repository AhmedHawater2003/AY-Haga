import { FaIceCream } from "react-icons/fa";
import {
  NormalFilter,
  DropDownFilter,
} from "../components/FiltrationBar/FiltersEnum";

export const DonationCategoriesData = [
  {
    id: 1,
    title: "Clothes",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      Age: <NormalFilter inputType="number" />,
      Gender: <DropDownFilter dropDownData={["Male", "Female"]} />,
      Seaseon: <DropDownFilter dropDownData={["Winter", "Summer"]} />,
    },
  },
  // {
  //   id: 2,
  //   title: "Food",
  //   content: <h1>Food</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 3,
  //   title: "Toys",
  //   content: <h1>Toys</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 4,
  //   title: "Books",
  //   content: <h1>Books</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 5,
  //   title: "Electronics",
  //   content: <h1>Electronics</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 6,
  //   title: "Furniture",
  //   content: <h1>Furniture</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 7,
  //   title: "Household Items",
  //   content: <h1>Household Items</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  // {
  //   id: 8,
  //   title: "Miscellaneous",
  //   content: <h1>Miscellaneous</h1>,
  //   path: "/overview/revenue",
  //   icon: <IoIcons.IoIosPaper />,
  // },
];
