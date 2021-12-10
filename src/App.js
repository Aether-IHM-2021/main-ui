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
          <Route exact path="/scratch">
            {" "}
            <Scratch />{" "}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
