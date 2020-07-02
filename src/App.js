import React from "react";
import logo from "./assets/images/covid.png";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>COVID-19 Relief</p>
        <a
          className="App-link"
          href="https://www.coronavirus.in.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Indiana COVID-19 website
        </a> */}
      </header>
    </div>
  );
}

export default App;
