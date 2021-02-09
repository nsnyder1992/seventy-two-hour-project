import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";

//components
import NASA from "../components/NASA";
import Weather from "../components/Weather";
import Zomato from "../components/Zomato";

const Header = ({ latitude, longitude, geo }) => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">Geo Location App</NavbarBrand>
        <Link to="/nasa">Nasa</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/zomato">Zomato</Link>
        <Nav className="ml-auto">
          <NavLink
            href="https:github.com/nsnyder1992/seventy-two-hour-project"
            target="blank"
          >
            Github
          </NavLink>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/nasa">
          {document.body.classList.add("background-red")}
          <NASA latitude={latitude} longitude={longitude} geo={geo} />
        </Route>
        <Route exact path="/weather">
          <Weather latitude={latitude} longitude={longitude} geo={geo} />
        </Route>
        <Route exact path="/zomato">
          <Zomato latitude={latitude} longitude={longitude} geo={geo} />
        </Route>
        <Route exact path="/">
          <NASA latitude={latitude} longitude={longitude} geo={geo} />
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
