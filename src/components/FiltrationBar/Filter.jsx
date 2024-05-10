import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px;
  border: 1px solid #1b5e39;
  :hover button {
    transition: 0.3s;
    display: block;
  }
`;

const FilterText = styled.div`
  font-size: 1rem;
  color: #1b5e39;
  font-weight: bold;
  padding: 0 5px;
`;

const IconButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: red;
`;

function Filter({ id, filterValue, removeFilter, filterCategory }) {
  return (
    <FilterContainer className="rounded-5">
      <FilterText>{filterCategory}</FilterText>
      <Badge pill bg="success" className="fs-6">
        {filterValue}
      </Badge>
      <IconButton type="button" onClick={() => removeFilter(id)}>
        <FaIcons.FaTimes />
      </IconButton>
    </FilterContainer>
  );
}

export default Filter;
