import React from "react";
import { Route, Link, Switch } from "react-router-dom";

//components
import NASA from "../components/NASA";
import Weather from "../components/Weather";
import Zomato from "../components/Zomato";

const SideNav = ({ latitude, longitude }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Nasa Coordinates</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/zomato">Restaurants</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-route">
        <Switch>
          <Route exact path="/nasa">
            <NASA latitude={latitude} longitude={longitude} />
          </Route>
          <Route exact path="/weather">
            <Weather latitude={latitude} longitude={longitude} />
          </Route>
          <Route exact path="/zomato">
            <Zomato latitude={latitude} longitude={longitude} />
          </Route>
          <Route exact path="/">
            <NASA latitude={latitude} longitude={longitude} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default SideNav;
