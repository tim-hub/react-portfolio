import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext, Button, Text } from "grommet";

import "./App.css";

import Chat from "./components/layout/Chat";
import FloatingButton from "./components/utils/FloatingButton";
import { updateDeviceSize } from "./redux/actions/index";
import Home from "./components/Home";
import BottomBar from "./components/layout/BottomBar";
import Routers from "./components/utils/Routers";
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
    },
    size: {
      medium: "414px" // for iphone 6/7/8 plus
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
            <Box fill background={{ color: "accent-3", opacity: true }}>
              <Box flex direction="row">
                {/*<Home size={size} />*/}
                <Box
                  flex
                  align="center"
                  justify="center"
                  gap={"small"}
                  direction={"column"}
                  margin={{
                    horizontal: !(
                      size === "small" ||
                      size === "xsmall" ||
                      size === "xxsmall"
                    )
                      ? size
                      : null
                  }}
                >
                  <Routers />
                  <BottomBar history={props.history} />
                </Box>

                <Chat />
                {/*<FloatingButton />*/}
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
