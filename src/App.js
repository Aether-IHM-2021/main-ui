import React, { setState, createContext } from "react";
import Login from "./Login";
import {Button, Container, Form} from "react-bootstrap";

const AppContext = createContext(null);

function App() {

  const [email, setEmail] = setState("");
  const [password, setPassword] = setState("");

  return (
    <main>
      <AppContext.Provider className="App" value={{email, setEmail, password, setPassword}}>
      <header className="App-header">
          GOODLUCK AETHER
      </header>
      <Login /> 
      </AppContext.Provider>
    </main>
  );
}

export default App;
export {AppContext};
