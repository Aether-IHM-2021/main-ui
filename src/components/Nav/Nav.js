import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsHouseDoor,
  BsClipboardCheck,
  BsBellFill,
  BsPersonFill,
  BsPlusSquareFill,
} from "react-icons/bs";

const tabs = [
  {
    route: "/dashboard",
    icon: BsHouseDoor,
    label: "Home",
  },
  {
    route: "/proposal",
    icon: BsClipboardCheck,
    label: "Proposals",
  },
  {
    route: "/",
    icon: BsPlusSquareFill,
  },
  {
    route: "/notifications",
    icon: BsBellFill,
    label: "Notifications",
  },
  {
    route: "/profile",
    icon: BsPersonFill,
    label: "Profile",
  },
];

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div  className=" d-flex align-items-center justify-content-evenly w-100 bg-white">
              <NavItem  className=" d-flex align-items-center justify-content-evenly w-100 bg-white">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  activeClassName="active"
                >
                  <BsHouseDoor/>
                </NavLink>
                <NavLink
                  to="/proposal"
                  className="nav-link"
                  activeClassName="active"
                >
                  <BsClipboardCheck/>
                </NavLink>
                <NavLink
                  to="/create/:topic"
                  className="nav-link"
                  activeClassName="active"
                >
                  <BsPlusSquareFill/>
                </NavLink>
                <NavLink
                  to="/notifications"
                  className="nav-link"
                  activeClassName="active"
                >
                  <BsBellFill/>
                </NavLink>
                <NavLink
                  to="/profile"
                  className="nav-link"
                  activeClassName="active"
                >
                  <BsPersonFill/>
                </NavLink>
              </NavItem>
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
