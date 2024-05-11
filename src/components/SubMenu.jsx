import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled.div`
  display: flex;
  margin: 10px;
  color: #1b5e39;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #1b5e39;
    border-left: 4px solid green;
    cursor: pointer;
    color: #ddf9e8;
    border-radius: 0 10px 10px 0;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: #fffffc;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #323232;
  font-size: 16px;
  transition: 150ms;
  &:hover {
    color: green;
    font-size: 20px;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, sideBarFunction }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={() => {
        if(item.subNav)
          showSubnav()
        else
          sideBarFunction(item)
      }}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              key={index}
              onClick={() => {
                sideBarFunction(item);
              }}
            >
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
