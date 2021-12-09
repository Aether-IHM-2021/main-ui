import React, { useState, createContext } from "react";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContext = createContext(null);
const RegisterContext = createContext(null);

function App() {

  const [register,setRegister] = useState(true);
  const [login,setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <main>
      <header className="App-header">
          GOODLUCK AETHER
      </header>
      <AppContext.Provider className="App" value={{email, setEmail, password, setPassword}}>
        {!login && <Login />} 
      </AppContext.Provider>
      <RegisterContext.Provider value={{firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword}}>
        {register && <Register />}
      </RegisterContext.Provider>
    </main>
  );
}

export default App;
export {AppContext, RegisterContext};
