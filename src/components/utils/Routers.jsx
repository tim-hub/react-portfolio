import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import AppBarContainer from "./components/layout/AppBar";
// import SideBar from "./components/layout/SideBar";
import Home from "../Home";
import Ai from "../Ai";
import { Box, Heading, Markdown } from "grommet";

const Routers = () => (
  <Switch>
    {/* <Redirect exact path="/" to="/" /> */}
    <Route exact path="/" component={Home} />
    <Redirect path="/home" to="/" />
    <Route path="/ai" component={Ai} />
    <Route
      render={() => (
        <Box
          flex
          align="center"
          justify="center"
          gap={"small"}
          direction={"column"}
        >
          <Heading> 404 </Heading>
          <Markdown>Cannot be found.</Markdown>
          <Markdown>
            You can go to the home page to know more [Go Back](/)
          </Markdown>
        </Box>
      )}
    />
  </Switch>
);

export default Routers;
