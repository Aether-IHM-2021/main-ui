import React from "react";
import "./index.css";
import { BsFillGearFill,BsStar } from "react-icons/bs";
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";
import Logo from "./assets/download.jpg";
const Dashboard = () => {
  return (
    <>
      <div className="my-3 d-flex justify-content-between align-items-center">
        <div className="dp"></div>
        <span>
          <input className="search" type="text" placeholder="search" />
        </span>
        <BsFillGearFill />
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <button style={{ borderRadius: "25px" }} className="btn btn-primary">
          Education
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-primary">
          Social
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-primary">
          Employment
        </button>
        <button style={{ borderRadius: "25px" }} className="btn btn-primary">
          Health
        </button>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between align-items-center">
        <DropdownButton id="dropdown-basic-button" title="Top Post">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <a style={{ fontSize: "14px", color: "grey" }}>Show all</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Proposal</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Announcements</a>
        <a style={{ fontSize: "14px" }}>Concerns</a>
      </div>
      <div className="pt-5">
        <Card style={{ width: "100%" }} >
          <Card.Img height="200" variant="top" src="https://www.adb.org/sites/default/files/styles/content_media/public/content-media/6402-philippines-cleaning-pasig-river-feature-01.jpg?itok=SOhmA1xZ" />
          <Card.Body>
            <Card.Title>
              Christmas Clean Up Drive
            </Card.Title>
            <small className="text-muted">
              December 26, 2021 · LGU of Pasay City
            </small>
            <Card.Text>
            "It has long been a challenge trying to rehabilitate the Pasig River. Environmentally it is pretty devastated,"
            <br></br>
            Click to participate: <a href="/participate">Join Now!</a>
            </Card.Text>
            <small className="text-muted">
              <strong>1,224</strong> citizens are joining
            </small>
            <div className="col-sm-12 d-flex justify-content-end">
            <BsStar/>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%" }} className="mt-3">
          <Card.Img height="200" variant="top" src="http://4.bp.blogspot.com/-hsqL4cku7NM/VD4fvqd0zeI/AAAAAAAAXOg/Q-uukYGHEII/s1600/DSCN1266.JPG" />
          <Card.Body>
            <Card.Title>
              No Manhole Cover | May nahulog na!
            </Card.Title>
            <small className="text-muted">
              December 07, 2021 · Ronald James Dizon
            </small>
            <Card.Text>
              There's an open manhole along the street of Mapayapa. Looking forward to cover this Mayor!
            </Card.Text>
            <small className="text-muted">
              <strong>Status :</strong> Under Review
            </small>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%" }}  className="mt-3">
          <Card.Img height="200" variant="top" src={Logo} />
          <Card.Body>
            <Card.Title>
              Proposal for construction of more public library
            </Card.Title>
            <small className="text-muted">
              December 12, 2021 · Juan Dela Cruz
            </small>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has...
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

export default Dashboard;
