import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Scratch from "./Scratch";
import Main from "./Main";

function App() {
  return (
    <Container style={{maxWidth: "480px", margin: "auto", display: "flex", flexDirection: "column"}}>
      <Router>
      <header variant="h1" className="App-header">
      </header>
      <Switch>
        <Route exact path="/"> <Main />  </Route>
        <Route exact path="/login"> <Login /> </Route>
        <Route exact path="/register"> <Register />  </Route>
        <Route exact path="/scratch"> <Scratch />  </Route>
      </Switch>
  
      </Router>
    </Container>
  );
}
export default App;
