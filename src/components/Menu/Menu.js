import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import About from "../../Pages/About";
import FindTutor from "../../Pages/FindTutor";
import Home from "../../Pages/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Router>
        <Link to="/userhome">
          <a href="/">
            <span role="img" aria-label="contact"></span>
            Home
          </a>
        </Link>

        <Link to="/findtutor">
          <a href="/">
            <span role="img" aria-label="find a tutor"></span>
            Find a Tutor
          </a>
        </Link>
        <Link to="/chatrooms">
          <a href="/">
            <span role="img" aria-label="messages"></span>
            Messages
          </a>
        </Link>

        <Link to="/aboutus">
          <a href="/">
            <span role="img" aria-label="about us"></span>
            About
          </a>
        </Link>

        <Link to="/donate">
          <a href="/">
            <span role="img" aria-label="donate"></span>
            Donate
          </a>
        </Link>
        <Link to="/contact">
          <a href="/">
            <span role="img" aria-label="contact"></span>
            Contact
          </a>
        </Link>

        <Switch>
          <Route path="/userhome" component={About}>
            <About />
          </Route>
          <Route path="/findtutor" component={FindTutor}>
            <FindTutor />
          </Route>
          <Route path="/chatrooms" component={Home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
