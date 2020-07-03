import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from "./components/navbar";
import logo from "./assets/images/covid.png";

function App() {
  return (
    <div className="App">
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
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
