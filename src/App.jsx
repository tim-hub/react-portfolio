import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext } from "grommet";
import "./App.css";
import AppBarContainer from "./components/layout/AppBar";
import SideBar from "./components/layout/SideBar";
import Home from "./components/Home";
import Ai from "./components/Ai";
import Chat from "./components/layout/Chat";
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
              {/*<AppBarContainer />*/}

              <Box
                flex
                align="center"
                alignContent={"center"}
                alignSelf={"center"}
                width="medium"
                justify="center"
              >
                <Chat />
              </Box>
              {/*<SideBar />*/}
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
