import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DarkMode from "./DarkMode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
