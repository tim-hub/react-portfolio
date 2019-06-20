import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext } from "grommet";
import "./App.css";

import SideBar from "./components/layout/SideBar";
import { updateDeviceSize } from "./redux/actions/index";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      "chat-background": "#EBFAF7"
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
            <Box fill background={{ color: "accent-3" }}>
              <Box flex direction="row">
                <Box flex align="center" justify="center">
                  Dashboard content goes here, click on the notification icon
                </Box>
                <SideBar background={{ color: "accent-3" }} />
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
