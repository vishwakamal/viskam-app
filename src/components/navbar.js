import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./about";
import { Tips } from "./tips";
import { Home } from "./home";

import Tracker from "./tracker";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-toggler {
    background-color: grey;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={process.env.PUBLIC_URL + "/about"}>
                General Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={process.env.PUBLIC_URL + "/tracker"}>
                Tracker
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={process.env.PUBLIC_URL + "/tips"}>
                Tips and Tricks
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/tips">
        <Tips />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/tracker">
        <Tracker />
      </Route>
    </Switch>
  </Router>
);
