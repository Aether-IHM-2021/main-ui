import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faHome,
  faPlusCircle,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/dashboard",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/proposal",
    icon: faClipboardCheck,
    label: "Proposals",
  },
  {
    route: "/",
    icon: faPlusCircle,
  },
  {
    route: "/notifications",
    icon: faBell,
    label: "Notifications",
  },
  {
    route: "/profile",
    icon: faUser,
    label: "Profile",
  },
];

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100 bg-white">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
