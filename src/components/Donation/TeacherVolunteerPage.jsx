import DonationsGrid from "./DonationsGrid";
import React, { useState } from "react";
import { TeachingData } from "../../data/TeachingData";
import FilterBar from "../FiltrationBar/FilterBar";
import { NormalFilter } from "../FiltrationBar/FiltersEnum";

const filterOptions = {
  Subject: <NormalFilter inputType="str" />,
  Area: <NormalFilter inputType="str" />,
  Governorate: <NormalFilter inputType="str" />,
};
function TeacherVolunteerPage() {
  const [appliedFilters, setAppliedFilters] = useState([]);

  const categoryFilterFunction = (item) => {
    for (let filter of appliedFilters) {
      if (item["primaryDetails"][filter.category] != filter.value) return false;
    }
    return true;
  };
  return (
    <div>
      <FilterBar
        filterOptions={filterOptions}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <DonationsGrid
        data={TeachingData}
        isDoner={true}
        filterFunction={categoryFilterFunction}
      />
    </div>
  );
}

export default TeacherVolunteerPage;
