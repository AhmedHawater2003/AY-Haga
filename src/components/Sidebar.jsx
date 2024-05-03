import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Navbar from "./Navbar";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #1b5e39;
`;

const Nav = styled.nav`
  background: #ddf9e8;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 15px;
  background: #ddf9e8;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 200ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ sideBarState }) => {
  const sidebar = sideBarState[0];
  const showSideBar = sideBarState[1];

  return (
    <>
      <IconContext.Provider value={{}}>
        <Navbar showSideBar={showSideBar} sideBarFlag={sidebar} />
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to="#">
               />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
