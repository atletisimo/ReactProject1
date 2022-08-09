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
    <div className="App-header" >
      <Header />
      <Background />
      <div style={{backgroundColor:"white",width:"800px" ,position:'relative',left:"400px",bottom:'100px'}}>
      <MonitorRiser />
      <Numbers />
        <About />
        </div>
    </div>
  );
}

export default App;
