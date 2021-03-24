import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dnrm from "./pages/Dnrm";
import AddToArray from "./pages/AddToArray";
import StateTest from "./pages/StateTest";
import Effect from "./pages/Effect";
import Coldplay from "./pages/Coldplay";
import Hidden from "./pages/Hidden";

import styled from "styled-components";

import "./styles/navbar.css";

const Container = styled.div`
  padding: 50px;
  color: #92593a;
`;

export default function Navbar() {
  useEffect(() => {
    document.querySelector(".navbar-toggle").addEventListener("click", () => {
      document.querySelector(".main-nav").classList.toggle("active");
    });

    return () => {
      document.querySelector(".navbar-toggle").removeEventListener("click", () => {
        document.querySelector(".main-nav").classList.toggle("active");
      });
    }
  }, []);

  return (
    <Router>
      <nav className="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <Link to="/" className="logo">
          Home
        </Link>
        <ul className="main-nav">
          <li>
            <Link to="/dnrm" className="nav-links">
              Dnrm
            </Link>
          </li>
          <li>
            <Link to="/state-test" className="nav-links">
              State Test
            </Link>
          </li>
          <li>
            <Link to="/add-to-array" className="nav-links">
              Add to array
            </Link>
          </li>
          <li>
            <Link to="/effect" className="nav-links">
              useEffect Test
            </Link>
          </li>
          <li>
            <Link to="/coldplay" className="nav-links">
              Coldplay
            </Link>
          </li>
          <li>
            <Link to="/package" className="nav-links">
              Package
            </Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
      <Container className="main-content">
        <Switch>
          <Route path="/dnrm">
            <Dnrm />
          </Route>
          <Route path="/add-to-array">
            <AddToArray />
          </Route>
          <Route path="/state-test">
            <StateTest />
          </Route>
          <Route path="/effect">
            <Effect />
          </Route>
          <Route path="/coldplay">
            <Coldplay />
          </Route>
          <Route path="/hidden">
            <Hidden />
          </Route>
          <Route path="/package">
            <Hidden />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
