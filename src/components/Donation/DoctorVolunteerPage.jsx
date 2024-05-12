import DonationsGrid from "./DonationsGrid";
import React, { useState } from "react";
import { DoctorData } from "../../data/DoctorData";
import FilterBar from "../FiltrationBar/FilterBar";
import { NormalFilter } from "../FiltrationBar/FiltersEnum";

const filterOptions = {
  "Medical Specialty": <NormalFilter inputType="str" />,
  "Organization Name": <NormalFilter inputType="str" />,
  Governorate: <NormalFilter inputType="str" />,
  Area: <NormalFilter inputType="str" />,
};

function DoctorVolunteerPage() {
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
        data={DoctorData}
        isDoner={true}
        filterFunction={categoryFilterFunction}
      />
    </div>
  );
}

export default DoctorVolunteerPage;
