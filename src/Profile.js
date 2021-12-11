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
        <p className="mt-5 text-center">{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>
        <button style={{ borderRadius: "25px" }} className="btn btn-danger">
          Not Verified
        </button>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-evenly align-items-center">
        <strong><a className="btn btn-options m-0" style={{ padding:"10px", borderRadius: "25px" }}>Starred Projects</a></strong>
        <strong><a className="btn btn-options m-0" style={{ padding:"10px", borderRadius: "25px" }}>Raised Concerns</a></strong>
        <strong><a className="btn btn-options m-0" style={{ padding:"10px", borderRadius: "25px" }}>Accomplished Projects</a></strong>
      </div>
      <hr></hr>
     
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
      </div>
    </>
  );
};

export default Profile;
