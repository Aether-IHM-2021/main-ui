import React, { useState, createContext } from "react";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContext = createContext(null);

function App() {

  const [page, changePage] = useState("REGISTER");

  return (
    <main>
      <header variant="h1" className="App-header">
      </header>
      <AppContext.Provider values={{changePage}}>

      { (page === "LOGIN") ? <Login /> : null} 
      
      { (page === "REGISTER") ? <Register /> : null} 

     </AppContext.Provider>
    </main>
  );
}

export default App;
export {AppContext};
