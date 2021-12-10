import React from "react";
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";
import Logo from "./assets/download.jpg";

import "./index.css";
const Profile = () => {
  return (
    <>
      <div className="bg-grey d-flex justify-content-center align-items-end"></div>
      <div className="dprofile"></div>
      <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
        <p className="mt-5 text-center">Juan Dela Cruz</p>
        <button style={{ borderRadius: "25px" }} className="btn btn-danger">
          Not Verify
        </button>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-evenly align-items-center">
        <a>Starred Projects</a>
        <a style={{ color: "grey" }}>Raised Concerns</a>
        <a style={{ color: "grey" }}>Accomplished Projects</a>
      </div>
      <hr></hr>
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
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Img
            height="200"
            variant="top"
            src="https://www.depedtagbilaran.org/wp-content/uploads/2020/05/BE20LOGO.png"
          />
          <Card.Body>
            <Card.Title>Brigada Eskwela</Card.Title>
            <small className="text-muted">June 12, 2020 · Monmon Mamon</small>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has...
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
