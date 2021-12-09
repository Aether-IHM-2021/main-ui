import React, { createContext } from "react"

function App() {

  const AppContext = createContext(null);
  return (
    <AppContext.Provider className="App">
      <header className="App-header">
          GOODLUCK AETHER
      </header>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default App;
