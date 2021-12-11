import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.css";

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
    <div >
      <nav className="navbar fixed-bottom navbar-light my-0" 
      style={{
        maxWidth: "480px",
        margin: "0 auto",
      }}
      role="navigation">
        <Nav className="w-100 m-0">
          <div className=" d-flex align-items-center justify-content-evenly w-100 bg-white m-0">
            <NavItem className=" d-flex align-items-center justify-content-evenly w-100 bg-white py-2 m-0">
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
              <a class="dropdown-item" href="/create/:topic"><BsJournalCheck/><span style={{marginLeft:"15px"}}>Proposal</span></a>
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
