import React, { useState } from "react";
import styled from "styled-components";
import { OrgSidebarData } from "./OrgSidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SearchBar from "./SearchBar";

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 9vh;
  background: #ddf9e8;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 200ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ sideBarState,sideBarData,sideBarFunction }) => {
  const sidebar = sideBarState[0];
  const showSideBar = sideBarState[1];



  return (
    <>
      <IconContext.Provider value={{}}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {sideBarData.map((item, index) => {
              return <SubMenu item={item} key={index} sideBarFunction={sideBarFunction}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
