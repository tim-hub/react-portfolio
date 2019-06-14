import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext } from "grommet";
import "./App.css";
import AppBarContainer from "./components/AppBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { updateDeviceSize } from "./redux/actions/index";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateDeviceSize: size => {
      dispatch(updateDeviceSize(size));
    }
  };
};

export const App = props => (
  <BrowserRouter>
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => {
          props.updateDeviceSize(size);
          return (
            <Box fill>
              <AppBarContainer />
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  <Switch>
                    {/* <Redirect exact path="/" to="/" /> */}
                    <Route path="/" component={Home} />
                  </Switch>
                </Box>
                <SideBar />
              </Box>
            </Box>
          );
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  </BrowserRouter>
);

export default connect(
  null,
  mapDispatchToProps
)(App);
