import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext } from "grommet";
import "./App.css";
import AppBarContainer from "./components/layout/AppBar";
import SideBar from "./components/layout/SideBar";
import Home from "./components/Home";
import Ai from "./components/Ai";
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
          console.log(size);
          props.updateDeviceSize(size);
          return (
            <Box fill>
              <AppBarContainer />
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  <Switch>
                    {/*<Redirect exact path="/" to="/" />*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Ai" component={Ai} />
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
