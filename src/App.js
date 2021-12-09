import React, { createContext } from "react";
import Login from "./Login.js";

const AppContext = createContext(null);

function App() {

  const [username, setUsername] = setState("");
  const [email, setEmail] = setState("");
  const [passsword, setPassword] = setState("");

  return (
    <AppContext.Provider className="App">
      <header className="App-header">
          GOODLUCK AETHER
      </header>
      <Login /> 
    </AppContext.Provider>
  );
}

export default App;
export {AppContext};
