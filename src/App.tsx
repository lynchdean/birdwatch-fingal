import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import brand from "./assets/brand.png";

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
          <Navbar.Text className="mr-2">
            <Link to="/">Home</Link>
          </Navbar.Text>
          <Navbar.Text className="mr-2">
            <Link to="/about">About</Link>
          </Navbar.Text>
        </Nav>
      </Navbar>

      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
