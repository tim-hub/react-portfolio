import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext, Button, Text } from "grommet";
import { Attraction } from "grommet-icons";

import "./App.css";

import Chat from "./components/layout/Chat";
import FloatingButton from "./components/utils/FloatingButton";
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
            <Box fill background={{ color: "accent-3", opacity: true }}>
              <Box flex direction="row">
                {
                  <Box
                    flex
                    align="center"
                    justify="center"
                    gap={"small"}
                    direction={"column"}
                  >
                    <Box
                      direction="row-responsive"
                      justify="center"
                      align="center"
                      gap={size}
                    >
                      <Box
                        pad={size}
                        align="center"
                        background={{ color: "light-2", opacity: "strong" }}
                        round
                        gap="small"
                      >
                        <Attraction size={size} />
                        <Text>Party</Text>
                        <Button size={size} label="Button" onClick={() => {}} />
                      </Box>
                      <Box
                        pad={size}
                        align="center"
                        background={{ color: "light-2", opacity: "strong" }}
                        round
                        gap="small"
                      >
                        <Attraction size={size} />
                        <Text>Party</Text>
                        <Button size={size} label="Button" onClick={() => {}} />
                      </Box>
                    </Box>
                    <Box
                      direction="row-responsive"
                      justify="center"
                      align="center"
                      gap={size}
                    >
                      <Box
                        pad={size}
                        align="center"
                        background={{ color: "light-2", opacity: "strong" }}
                        round
                        gap="small"
                      >
                        <Attraction size={size} />
                        <Text>Party</Text>
                        <Button size={size} label="Button" onClick={() => {}} />
                      </Box>
                      <Box
                        pad={size}
                        align="center"
                        background={{ color: "light-2", opacity: "strong" }}
                        round
                        gap="small"
                      >
                        <Attraction size={size} />
                        <Text>Party</Text>
                        <Button size={size} label="Button" onClick={() => {}} />
                      </Box>
                    </Box>
                  </Box>
                }
                <Chat />
                <FloatingButton />
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
