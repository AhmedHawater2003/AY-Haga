import logo from "../assets/logo_no_bg.png";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { Container } from "react-bootstrap";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  padding-right: 20px;
  justify-content: flex-start;
  align-items: center;
  color: #1b5e39;
`;

const OrgNavbar = ({ isLanding, showSideBar, sideBarFlag }) => {
  OrgNavbar.defaultprops = {
    isLanding: false,
    showSideBar: () => {},
    sideBarFlag: false,
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <div
      className={`container-flow ${
        !isLanding
          ? "header-navbar sticky-top"
          : isScrolled
          ? "header-navbar landing sticky-top scrolled"
          : "header-navbar landing sticky-top"
      }`}
    >
      <div
        className={
          !isScrolled && isLanding
            ? "header-background"
            : "header-background scrolled"
        }
      ></div>
      <nav
        className={
          !isLanding
            ? "navbar navbar-expand navbar-light  sticky-top"
            : isScrolled
            ? "navbar landing navbar-expand navbar-light sticky-top scrolled"
            : "navbar landing navbar-expand navbar-light sticky-top"
        }
      >
        {!isLanding ? (
          <>
            <NavIcon to="#">
              {sideBarFlag ? (
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              ) : (
                <FaIcons.FaBars onClick={showSideBar} />
              )}
            </NavIcon>
            <SearchBar
              inputStyle={{
                width: "15vw",
                height: "40px",
                padding: "10px 10px",
              }}
              buttonStyle={{
                fontSize: "20px",
                padding: "4px",
                width: "80px",
                height: "40px",
              }}
            />
          </>
        ) : (
          <a className="navbar-brand" href="/how-to-use">
            How To Use?
          </a>
        )}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <a href="/">
              <img className="navbar-logo" src={logo} alt="logo" href="/" />
            </a>
          </ul>
        </div>
        <div>    
         <ul className="navbar-nav ml-auto">
             <li className="nav-item">
             <a className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
        </a>
            </li>
            <li className="nav-item">
              <a className="btn">
              account
              </a>
             </li>
             <li className="nav-item">
             <button type="button" class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"></path>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"></path>
</svg>
                Button
              </button>
             </li>
          </ul>
        </div>
      </nav>
      {sideBarFlag ? (
        <Sidebar sideBarState={[sideBarFlag, showSideBar]} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrgNavbar;