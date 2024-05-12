import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Badge } from "@mantine/core";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0px 10px;
  border: 1px solid #0ca678;
  :hover button {
    transition: 0.3s;
    display: block;
  }
`;

const FilterText = styled.div`
  font-size: 1rem;
  color: #0ca678;
  font-weight: bold;
  padding: 0 5px;
`;

const IconButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fa5252;
`;

function Filter({ id, filterValue, removeFilter, filterCategory }) {
  return (
    <FilterContainer className="rounded-5">
      <FilterText>{filterCategory}</FilterText>
      <Badge color="teal" size="lg" radius="lg">
        {filterValue}
      </Badge>
      <IconButton type="button" onClick={() => removeFilter(id)}>
        <FaIcons.FaTimes />
      </IconButton>
    </FilterContainer>
  );
}

export default Filter;
