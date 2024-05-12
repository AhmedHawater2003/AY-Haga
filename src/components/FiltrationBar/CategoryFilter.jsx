import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./customStyle.css";
import { DonationCategoriesData } from "../../data/DonationCategoriesData";
import { Badge } from "@mantine/core";
import { IconX, IconXboxX } from "@tabler/icons-react";
import { FaIceCream } from "react-icons/fa";

function CategoryFilter({
  setCategory,
  clearDetailedFilters,
  currentCategory,
}) {
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  return (
    <div className="d-flex flex-row-reverse p-2 mb-1 align-items-center gap-3  ">
      <Dropdown className="d-flex align-items-center">
        <Dropdown.Toggle
          className="hide-arrow"
          variant="success"
          id="dropdown-basic"
          style={
            isCategorySelected
              ? { backgroundColor: "white", color: "#12b886" }
              : {}
          }
        >
          {isCategorySelected ? "Change Category" : "Filter By Category"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {DonationCategoriesData.map((item) => (
            <Dropdown.Item
              onClick={() => {
                setCategory(item);
                setIsCategorySelected(true);
              }}
              key={item.id}
            >
              {item.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {isCategorySelected && (
        <>
          <Badge color="teal" size="xl" radius="lg">
            {currentCategory.icon}
            {currentCategory.title}
            <IconX
              onClick={() => {
                clearDetailedFilters();
                setCategory({ id: 0, title: "All" });
                setIsCategorySelected(false);
              }}
              color="#fa5252"
              style={{
                cursor: "pointer",
                position: "relative",
                top: "-2px",
                marginLeft: "5px",
                right: "-5px",
              }}
            />
          </Badge>
        </>
      )}
    </div>
  );
}
export default CategoryFilter;
