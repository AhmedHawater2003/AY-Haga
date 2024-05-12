import DonationsGrid from "./DonationsGrid";
import CategoryFilter from "../FiltrationBar/CategoryFilter";
import React, { useState } from "react";
import { DonationDetails } from "../../data/DonationsData";
import FilterBar from "../FiltrationBar/FilterBar";

function DonationsPage() {
  const [category, setCategory] = useState({ id: 0, title: "All" });
  const [appliedFilters, setAppliedFilters] = useState([]);

  const categoryFilterFunction = (item) => {
    if (!(category.title === "All" || item.category === category.title))
      return false;
    for (let filter of appliedFilters) {
      if (item["primaryDetails"][filter.category] != filter.value) return false;
    }
    return true;
  };
  return (
    <div>
      <CategoryFilter
        setCategory={setCategory}
        clearDetailedFilters={() => {
          setAppliedFilters([]);
        }}
        currentCategory={category}
      />
      {category.title !== "All" && (
        <FilterBar
          filterOptions={category.filters}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />
      )}
      <DonationsGrid
        data={DonationDetails}
        isDoner={true}
        filterFunction={categoryFilterFunction}
      />
    </div>
  );
}

export default DonationsPage;
