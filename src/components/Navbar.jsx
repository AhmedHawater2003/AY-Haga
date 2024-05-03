import logo from "../assets/logo_no_bg.png";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Sidebar from "./Sidebar";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #1b5e39;
`;

const Navbar = ({ showSideBar, sideBarFlag }) => {
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
      className={
        !isScrolled
          ? "header-navbar sticky-top"
          : "header-navbar sticky-top scrolled"
      }
    >
      <div
        className={
          !isScrolled ? "header-background" : "header-background scrolled"
        }
      ></div>
      <nav
        className={
          !isScrolled
            ? "navbar navbar-expand-lg navbar-light  sticky-top"
            : "navbar navbar-expand-lg navbar-light sticky-top scrolled"
        }
      >
        <NavIcon to="#">
          {sideBarFlag ? (
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          ) : (
            <FaIcons.FaBars onClick={showSideBar} />
          )}
        </NavIcon>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <img className="navbar-logo" src={logo} alt="logo" />
          </ul>
        </div>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
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

export default Navbar;
