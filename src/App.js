import React, { useState, createContext } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import Scratch from "./Scratch";

function App() {

  const [page, changePage] = useState("REGISTER");

  return (
    <Router>
      <header variant="h1" className="App-header">
      </header>
      <Switch>
        <Route exact path="/"> <Login />  </Route>
        <Route exact path="/register"> <Register />  </Route>
        <Route exact path="/scratch"> <Scratch />  </Route>
      </Switch>
  
    </Router>
  );
}
export default App;
