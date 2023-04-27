import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Flicker from "./component/Flicker";
import Script from "./component/Script";
import Footer from "./component/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/flicker" Component={Flicker}/>
          <Route exact path="/script" Component={Script}/>
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
