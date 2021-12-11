import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Scratch from "./Scratch";
import Verification from "./Verification";
import Verify2 from "./Verify2";
import UserType from "./UserType";
import CreateTopic from "./CreateTopic";
import Main from "./Main";
import Dashboard from "./Dashboard";
import Notifications from "./Notifications";
import Navigation from "./components/Nav/Nav";
import Proposal from "./Proposal";
import Announcement from "./Announcement";
import Profile from "./Profile";
import Concern from "./Concern";
import Participate from "./Participate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container
      style={{
        maxWidth: "480px",
        height: "100vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        padding:"0"
      }}
    >
      <Router>
        <header variant="h1" className="App-header"></header>
        <Switch>
          <Route exact path="/">
            {" "}
            <Main />{" "}
          </Route>
          <Route exact path="/login">
            {" "}
            <Login />{" "}
          </Route>
          <Route exact path="/userType">
            {" "}
            <UserType />{" "}
          </Route>
          <Route exact path="/register/:userType">
            {" "}
            <Register />{" "}
          </Route>
          <Route exact path="/create/:topic">
            {" "}
            <CreateTopic />{" "}
          </Route>
          <Route exact path="/verification">
            {" "}
            <Verification />{" "}
          </Route>
          <Route exact path="/verify2">
            {" "}
            <Verify2 />{" "}
          </Route>
          <Route exact path="/notifications">
            {" "}
            <Notifications />{" "}
          </Route>
          <Route exact path="/scratch">
            {" "}
            <Scratch />{" "}
          </Route>
          <Route exact path="/dashboard">
            {" "}
            <Dashboard />{" "}
          </Route>
          <Route exact path="/proposal">
            {" "}
            <Proposal />{" "}
          </Route>
          <Route exact path="/profile">
            {" "}
            <Profile />{" "}
          </Route>
          <Route exact path="/announcement">
            {" "}
            <Announcement />{" "}
          </Route>
          <Route exact path="/concern">
            {" "}
            <Concern />{" "}
          </Route>
          <Route exact path="/participate">
            {" "}
            <Participate />{" "}
          </Route>
        </Switch>
        <br/><br/><br/>
        <Navigation />
      </Router>
    </Container>
  );
}
export default App;
