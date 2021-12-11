import React from "react";
import "./index.css";
import { BsFillGearFill } from "react-icons/bs";
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";
import Logo from "./assets/download.jpg";
const Proposal = () => {
  return (
    <>
      <div className="m-3 d-flex justify-content-between align-items-center">
        <div className="dp"></div>
        <span>
          <input className="search" type="text" placeholder="search" />
        </span>
        <BsFillGearFill />
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <button style={{ borderRadius: "25px" }} className="btn btn-options">
          <strong>Education</strong>
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-options">
          <strong>Social</strong>
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-options">
          <strong>Employment</strong>
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-options">
          <strong>Health</strong>
        </button>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between align-items-center">
        <DropdownButton id="dropdown-basic-button" title="Top Post">
          <Dropdown.Item href="#/action-1" className="text-muted disabled">Sort by</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Hot</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Rising</Dropdown.Item>
          <Dropdown.Item href="#/action-4">New</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Top (Past 24 Hours)</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Top (Past Month)</Dropdown.Item>
          <Dropdown.Item href="#/action-7">Top (Past Year)</Dropdown.Item>
          
        </DropdownButton>
        <a style={{ fontSize: "14px", color: "grey" }}>Show all</a>
        <a style={{ fontSize: "14px" }}>Proposal</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Announcements</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Concerns</a>
      </div>
      <div className="pt-5">
      {localStorage["title"] && (
        <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            {localStorage["title"]}
          </Card.Title>
          <small className="text-muted">
            {new Date().toLocaleString()}
          </small>
          <Card.Text>
          {localStorage["description"]}
          </Card.Text>
          <small className="text-muted">
          </small>
        </Card.Body>
      </Card>
      )}
        <Card style={{ width: "100%" }}>
          <Card.Img height="200" variant="top" src={Logo} />
          <Card.Body>
            <Card.Title>
              Proposal for construction of more public library
            </Card.Title>
            <small className="text-muted">
              December 12, 2021 · Juan Dela Cruz
            </small>
            <Card.Text>
            Now, just imagine if we have at least one public library in each congressional district. These district libraries would complement the provincial, city and municipal public libraries, and the libraries of local and state colleges and universities.
            </Card.Text>
            <small className="text-muted">
              <strong>580</strong> out of 1,000 citizens agree
            </small>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Proposal;
