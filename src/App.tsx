import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import brand from "./assets/brand.png";
import IWebs from "./pages/IWebs";
import Hides from "./pages/Hides";

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="BirdWatch Fingal"
            src={brand}
            width="200"
            className="d-inline-block align-top my-2 mr-4"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Text className="mr-3">
            <Link to="/">Home</Link>
          </Navbar.Text>
          <Navbar.Text className="mr-3">
            <Link to="/about">About</Link>
          </Navbar.Text>
          <Navbar.Text className="mr-3">
            <Link to="/hides">Rogerstown Hides</Link>
          </Navbar.Text>
          <Navbar.Text className="mr-3">
            <Link to="/iWebs">iWebs</Link>
          </Navbar.Text>
        </Nav>
      </Navbar>

      <Switch>
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

      <nav className="navbar sticky-bottom navbar-dark bg-dark text-light">
        <div className="navbar-text mx-auto">
          <small>© 2020. Bird Watch Ireland. All Rights Reserved.</small>
        </div>
      </nav>
    </Router>
  );
}
