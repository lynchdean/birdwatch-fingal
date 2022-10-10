import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import brand from "./assets/brand.png";
import IWebs from "./pages/IWebs";
import Hides from "./pages/Hides";
import Sites from "./pages/Sites";
import Birds from "./pages/Birds";
import Links from "./pages/Links";
import Downloads from "./pages/Downloads"

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">
            <img
              alt="BirdWatch Fingal"
              src={brand}
              width="200"
              className="d-inline-block align-top my-2 mr-4"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/hides">
                <Nav.Link>Rogerstown Hides</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/iWebs">
                <Nav.Link>I-Webs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sites">
                <Nav.Link>Sites</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/birds">
                <Nav.Link>Birds</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/links">
                <Nav.Link>Links</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/downloads">
                <Nav.Link>Downloads</Nav.Link>
              </LinkContainer>
              <Link className="nav-link" to={{pathname: "https://docs.google.com/spreadsheets/d/12SfG8sqV5vCh1qfEGdM02i1AeBb2y26BADTigknyEBg/edit#gid=455322855"}} target="_blank">Events</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="flex-fill">
          <Switch>
            <Route path="/downloads">
              <Downloads />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/birds">
              <Birds />
            </Route>
            <Route path="/sites">
              <Sites />
            </Route>
            <Route path="/iwebs">
              <IWebs />
            </Route>
            <Route path="/hides">
              <Hides />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <nav className="navbar navbar-fixed-bottom navbar-dark bg-dark text-light">
          <div className="navbar-text mx-auto">
            <small>© 2021. Bird Watch Ireland. All Rights Reserved.</small>
          </div>
        </nav>
      </Router>
    </div>
  );
}
