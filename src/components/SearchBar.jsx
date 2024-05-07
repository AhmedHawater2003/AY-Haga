import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchFomr = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  height: inherit;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  font-weight: 500;
  :focus {
    outline: none;
    border-color: #1b5e39; /* YouTube's blue color */
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1b5e39;
  background-color: #1b5e39;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: inherit;
  color: #e3f9eb;
  font-size: 24px;
`;
const SearchBar = ({ globalStyling, formStyling, inputStyle, buttonStyle }) => {
  const mergedFormStyling = { ...globalStyling, ...formStyling };
  const mergedInputStyle = { ...globalStyling, ...inputStyle };
  const mergedButtonStyle = { ...globalStyling, ...buttonStyle };

  return (
    <SearchFomr style={mergedFormStyling}>
      <SearchInput
        style={mergedInputStyle}
        type="text"
        placeholder="Search By Category..."
      />
      <SearchButton
        style={mergedButtonStyle}
        onClick={() => console.log("Ahmed")}
      >
        <FaSearch />
      </SearchButton>
    </SearchFomr>
  );
};

export default SearchBar;
