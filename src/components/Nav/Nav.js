import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsHouseDoor,
  BsClipboardCheck,
  BsBellFill,
  BsPersonFill,
  BsPlusSquareFill,
  BsMegaphoneFill,
  BsJournalCheck,
  BsExclamationDiamond
} from "react-icons/bs";



const Navigation = ( props ) => {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex align-items-center justify-content-evenly w-100 bg-white">
            <NavItem className=" d-flex align-items-center justify-content-evenly w-100 bg-white">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
              >
                <BsHouseDoor />
              </NavLink>
              <NavLink
                to="/proposal"
                className="nav-link"
                activeClassName="active"
              >
                <BsClipboardCheck />
              </NavLink>
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsPlusSquareFill />
            </button>
            <div class="dropdown-menu w-50">
              <a class="dropdown-item" href="/proposal"><BsJournalCheck/><span style={{marginLeft:"15px"}}>Proposal</span></a>
              <a class="dropdown-item" href="/announcement"><BsMegaphoneFill/><span style={{marginLeft:"15px"}}>Announcement</span></a>
              <a class="dropdown-item" href="/concern"><BsExclamationDiamond/><span style={{marginLeft:"15px"}}>Concern</span></a>
              </div>
              <NavLink
                to="/notifications"
                className="nav-link"
                activeClassName="active"
              >
                <BsBellFill />
              </NavLink>
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="active"
              >
                <BsPersonFill />
              </NavLink>
            </NavItem>

          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
