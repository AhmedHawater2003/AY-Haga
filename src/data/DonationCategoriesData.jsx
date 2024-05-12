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

  {
    id: 2,
    title: "Toys",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      Age: <NormalFilter inputType="number" />,
      Gender: <DropDownFilter dropDownData={["Boy", "Girl"]} />,
      SubCategory: <DropDownFilter dropDownData={[
        "Board Games",
        "Stuffed Toys",
        "Dolls",
        "Sports", 
        "Cars", 
        "Outdoor", 
      ]} />,
    },
  },

  {
    id: 3,
    title: "Food",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      SubCategory: <DropDownFilter dropDownData={[
        "Fruits & Vegetables", 
        "Canned Foods",
        "Fresh Meals",
        "Baked Goods",
      ]} />,
    },
  },

  {
    id: 4,
    title: "Medical Supplies",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      SubCategory: <DropDownFilter dropDownData={[
        "Medical Devices",
        "Medical Equipment",
        "Medication", 
      ]} />,
    },
  },

  {
    id: 5,
    title: "School Supplies",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      SubCategory: <DropDownFilter dropDownData={[ "Books","Stationary" ]} />,
    },
  },

  {
    id: 6,
    title: "Blood Donations",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      Hospital: <NormalFilter placeholder="Search Hospital Name" />,
      Governorate: <DropDownFilter dropDownData={["Cairo", "Alexandria", "Port Said", "Suez", "Damietta", "Dakahlia", "Damietta", "Sharqia", "Gharbia", "Kafr El Sheikh", "Monufia", "Qalyubia", "Beheira", "Red Sea", "North Sinai", "South Sinai", "Fayoum", "Beni Suef", "Minya", "Assiut", "New Valley", "Sohag", "Qena", "Luxor", "Aswan", "Matrouh", "Ismailia"  ]} />,
      Area: <NormalFilter placeholder="Enter Area" />,
    },
  },

  {
    id: 7,
    title: "Teaching Posts",
    icon: (
      <FaIceCream
        style={{ marginRight: "10px", position: "relative", top: "-1px" }}
      />
    ),
    filters: {
      Subject: <NormalFilter placeholder="Enter Subject" />, 
  Area: <NormalFilter placeholder="Enter Area" />, 
  Governorate: <DropDownFilter dropDownData={["Cairo", "Alexandria", "Port Said", "Suez", "Damietta", "Dakahlia", "Damietta", "Sharqia", "Gharbia", "Kafr El Sheikh", "Monufia", "Qalyubia", "Beheira", "Red Sea", "North Sinai", "South Sinai", "Fayoum", "Beni Suef", "Minya", "Assiut", "New Valley", "Sohag", "Qena", "Luxor", "Aswan", "Matrouh", "Ismailia"  ]} />,
},
    },

    {
      id: 8,
      title: "Medical Cases",
      icon: (
        <FaIceCream
          style={{ marginRight: "10px", position: "relative", top: "-1px" }}
        />
      ),
      filters: {
        "Medical Specialty": <NormalFilter placeholder="Search Specialty" />,
        "Organization Name": <NormalFilter placeholder="Search Organization" />, 
        Area: <NormalFilter placeholder="Enter Area" />,
        Governorate: <DropDownFilter dropDownData={["Cairo", "Alexandria", "Port Said", "Suez", "Damietta", "Dakahlia", "Damietta", "Sharqia", "Gharbia", "Kafr El Sheikh", "Monufia", "Qalyubia", "Beheira", "Red Sea", "North Sinai", "South Sinai", "Fayoum", "Beni Suef", "Minya", "Assiut", "New Valley", "Sohag", "Qena", "Luxor", "Aswan", "Matrouh", "Ismailia"  ]} />,
  },
      },
  
  
  
];
