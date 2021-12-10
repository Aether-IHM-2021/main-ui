import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Scratch from "./Scratch";
import Verification from "./Verification";
import Verify2 from "./Verify2";
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
            <Login />{" "}
          </Route>
          <Route exact path="/register">
            {" "}
            <Register />{" "}
          </Route>
          <Route exact path="/scratch">
            {" "}
            <Scratch />{" "}
          </Route>
          <Route exact path="/verify">
            {" "}
            <Verification />{" "}
          </Route>
          <Route exact path="/verify2">
            {" "}
            <Verify2 />{" "}
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
