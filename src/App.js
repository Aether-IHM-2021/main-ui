import React, { useState, createContext } from "react";
import Login from "./Login";

const AppContext = createContext(null);

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
