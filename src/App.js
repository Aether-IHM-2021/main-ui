import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <header variant="h1" className="App-header">
      </header>
      <Switch>
        <Route exact path="/login"> <Login />   </Route>
        <Route exact path="/register">  <Register /> </Route>
      </Switch>
  
    </Router>
  );
}
export default App;
