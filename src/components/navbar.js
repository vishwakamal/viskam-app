import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./about";
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
  <Router>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">General Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/tracker">Tracker</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/tips">Tips and Tricks</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      {/* <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/">
        <Home />
      </Route> */}
    </Switch>
  </Router>
);
