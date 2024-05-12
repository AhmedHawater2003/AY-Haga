import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import SearchResultsList from "./SearchResultsList";

const SearchForm = styled.form`
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
    border-color: #0ca678; /* YouTube's blue color */
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0ca678;
  background-color: #0ca678;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: inherit;
  color: #e3f9eb;
  font-size: 24px;
`;

const searchResultsListStyle = {
  width: "75%",
  backgroundColor: "#fffffc",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  maxHeight: "300px",
  overflowY: "auto",
  position: "absolute",
  zIndex: "1000",
  top: "5rem",
};
const SearchBar = ({
  globalStyling,
  formStyling,
  inputStyle,
  buttonStyle,
  searchResultsData,
  onSearchResultSelection,
  resultLabellKey,
  searchResultsListStyle,
}) => {
  const mergedFormStyling = { ...globalStyling, ...formStyling };
  const mergedInputStyle = { ...globalStyling, ...inputStyle };
  const mergedButtonStyle = { ...globalStyling, ...buttonStyle };
  const [results, setResults] = useState(searchResultsData);
  const [query, setQuery] = useState("");

  const filterdResults = useMemo(() => {
    return query
      ? results.filter((result) =>
          result.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];
  }, [results, query]);

  return (
    <div className="d-flex flex-column ">
      <SearchForm style={mergedFormStyling}>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={mergedInputStyle}
          type="text"
          placeholder="Search By Name"
        />
        <SearchButton
          style={mergedButtonStyle}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FaSearch />
        </SearchButton>
      </SearchForm>
      <SearchResultsList
        styling={searchResultsListStyle}
        data={filterdResults}
        resultLabellKey={resultLabellKey}
        onSearchResultSelection={(resultData) => {
          onSearchResultSelection(resultData);
          setQuery((prev) => "");
        }}
      />
    </div>
  );
};

export default SearchBar;
