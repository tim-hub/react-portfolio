import React from "react";
import { Switch, Route } from "react-router-dom";
// import AppBarContainer from "./components/layout/AppBar";
// import SideBar from "./components/layout/SideBar";
import Home from "../Home";
import Ai from "../Ai";

const Routers = props => (
  <Switch>
    {/* <Redirect exact path="/" to="/" /> */}
    <Route path="/home" component={Home} />
    <Route path="/ai" component={Ai} />
  </Switch>
);

export default Routers;
