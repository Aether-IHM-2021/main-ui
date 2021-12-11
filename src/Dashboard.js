import React from "react";
import "./index.css";
import { BsFillGearFill,BsStar, BsSearch } from "react-icons/bs";
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";
import Logo from "./assets/download.jpg";
import CardPosts from "./components/CardPosts";
const Dashboard = () => {
  return (
    <>
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <div className="dp"></div>
        <span className="search">
          <BsSearch className="text-muted" />
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
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <a style={{ fontSize: "14px", color: "grey" }}>Show all</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Proposal</a>
        <a style={{ fontSize: "14px", color: "grey" }}>Announcements</a>
        <a style={{ fontSize: "14px" }}>Concerns</a>
      </div>
      <div className="pt-5" style={{display:"flex", flexDirection:"column", gap:"1em"}}>
        <CardPosts
            agreeCount={580}
            disagreeCount={420}
            title={"Proposal for construction of more public library"}
            name={"Juan Dela Cruz"}
            date={"December 12, 2021"}
            description={"Now, just imagine if we have at least one public library in each congressional district..."}
            starCount={34}
            topic={"proposal"}
            imageSrc={"https://lh3.googleusercontent.com/proxy/NMKVF0unzGF-SIG3jVoRSe9j0qosZYeGZVeDSeLX7SPswVzsQiSmLRTnAZAZFJfhGg4LRbeQ4pDdB9FIT03ZwAXtijPf7Ql382k0tM3noTVWdbIjZOzzlmip2YnUCyopGDcF"}
        />
        <CardPosts
            agreeCount={580}
            disagreeCount={420}
            title={"Christmas Clean Up Drive"}
            name={"LGU of Pasay City"}
            date={"December 10, 2021"}
            description={"It has long been a challenge trying to rehabilitate the Pasig River. Environmentally it is pretty devastated..."}
            starCount={21}
            topic={"news"}
            imageSrc={"https://www.adb.org/sites/default/files/styles/content_media/public/content-media/6402-philippines-cleaning-pasig-river-feature-01.jpg?itok=SOhmA1xZ"}
        />
        <CardPosts
            agreeCount={580}
            disagreeCount={420}
            title={"No Manhole Cover | May nahulog na!"}
            name={"Ronald James Dizon"}
            date={"December 07, 2021"}
            description={"There's an open manhole along the street of Mapayapa. Looking forward to cover this Mayor!"}
            starCount={12}
            topic={"concern"}
            imageSrc={"http://4.bp.blogspot.com/-hsqL4cku7NM/VD4fvqd0zeI/AAAAAAAAXOg/Q-uukYGHEII/s1600/DSCN1266.JPG"}
        />
        {/* makeshift padding bottom */}
        <br/><br/><br/>
      </div>
    </>
  );
};

export default Dashboard;
