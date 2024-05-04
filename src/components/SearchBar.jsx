import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchFomr = styled.form`
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 9px 0 5px 30px;
`;

const SearchInput = styled.input`
  padding: 0 10px;
  height: inherit;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  width: ${(props) => props.width}vw; /* Adjust width as needed */
  font-weight: 500;

  :focus {
    outline: none;
    border-color: #1b5e39; /* YouTube's blue color */
  }
`;

const SearchButton = styled.button`
  border: 1px solid #1b5e39;
  background-color: #e3f9eb;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: inherit;
  width: ${(props) => props.width}vw;
  padding: 0 10px;
  margin: 0;

  i {
    color: "#1b5e39",
    fontSize: ${(props) => props.fontSize}px,
  }
`;
const SearchBar = ({ height, width }) => {
  return (
    <SearchFomr height={height}>
      <SearchInput
        type="text"
        placeholder="Search By Category..."
        width={width}
      />
      <SearchButton
        onClick={() => console.log("Ahmed")}
        width={width > 30 ? 6 : width / 5}
      >
        <FaSearch fontSize={height / 2} />
      </SearchButton>
    </SearchFomr>
  );
};

export default SearchBar;
