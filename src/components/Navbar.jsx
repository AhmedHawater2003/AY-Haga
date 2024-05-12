import logo from "../assets/logo_no_bg.png";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar/SearchBar";
import NotificationCenter from "./NotificationCenter/NotificationCenter";
import OrgNotificationData from "../data/OrgNotificationData";
import AccountButton from "./AccountButton";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  padding-right: 20px;
  justify-content: flex-start;
  align-items: center;
  color: #0ca678;
`;

const Navbar = ({
  sideBarFlag = false,
  showSideBar = () => {},
  isSideBarOpen = false,
  searchBarData = [],
  searchBarFunction,
  searchBarFlag = false,
  sideBarData = [],
  sideBarFunction,
  notificationCenterFlag = false,
  notificationCenterData = [],
  resetSearch,
  setContent,
}) => {
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
        sideBarFlag
          ? "header-navbar sticky-top"
          : isScrolled
          ? "header-navbar landing sticky-top scrolled"
          : "header-navbar landing sticky-top"
      }`}
    >
      <div
        className={
          !isScrolled && !sideBarFlag
            ? "header-background"
            : "header-background scrolled"
        }
      ></div>
      <nav
        className={
          sideBarFlag
            ? "navbar navbar-expand navbar-light  sticky-top"
            : isScrolled
            ? "navbar landing navbar-expand navbar-light sticky-top scrolled"
            : "navbar landing navbar-expand navbar-light sticky-top"
        }
      >
        {sideBarFlag ? (
          <>
            <NavIcon to="#">
              {isSideBarOpen ? (
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              ) : (
                <FaIcons.FaBars onClick={showSideBar} />
              )}
            </NavIcon>
            {searchBarFlag && (
              <SearchBar
                inputStyle={{
                  width: "30vw",
                  height: "40px",
                  padding: "10px 10px",
                }}
                buttonStyle={{
                  fontSize: "20px",
                  padding: "4px",
                  width: "80px",
                  height: "40px",
                }}
                searchResultsData={searchBarData}
                onSearchResultSelection={searchBarFunction}
                resultLabellKey="title"
              />
            )}
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
            {notificationCenterFlag && (
              <>
                <li className="nav-item">
                  <div style={{display:"flex",gap:"10px", alignItems: "center"}}>
                  <NotificationCenter
                    notificationData={OrgNotificationData}
                  />
                  <AccountButton setContent={setContent}/>
                  </div>
                </li>
              </>
            )}
            {!notificationCenterFlag && (
              <>
                <li className="nav-item">
                  <a className="btn" href="/login">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn" href="/register">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {isSideBarOpen && (
        <Sidebar
          sideBarState={[isSideBarOpen, showSideBar]}
          sideBarData={sideBarData}
          sideBarFunction={sideBarFunction}
          resultLabellKey="title"
        />
      )}
    </div>
  );
};

export default Navbar;
