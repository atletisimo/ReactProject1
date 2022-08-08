import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Background from "./components/Background";
import MonitorRiser from "./components/MonitorRiser";
import Numbers from "./components/Numbers";
import About from "./components/About";
function App() {
  return (
    <div className="App-header">
      <Header />
      <Background />
      <MonitorRiser />
      <Numbers />
      <About />
    </div>
  );
}

export default App;
