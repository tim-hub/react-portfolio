import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext, Grid } from "grommet";
import "./App.css";

import Chat from "./components/layout/Chat";
import Routers from "./components/utils/Routers";
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
              {/*<AppBarContainer />*/}

              <Grid
                fill
                areas={[
                  { name: "c1", start: [0, 0], end: [0, 0] },
                  { name: "c2", start: [1, 0], end: [1, 0] },
                  { name: "c3", start: [2, 0], end: [2, 0] }
                ]}
                columns={["flex", "medium", "flex"]}
                rows={["flex"]}
                gap="small"
              >
                <Box gridArea="c1" background="" />

                <Box
                  background={{ color: "", opacity: true }}
                  gridArea="c3"
                  justify="center"
                >
                  <Routers />
                </Box>
                <Box
                  flex
                  align="center"
                  alignContent={"center"}
                  alignSelf={"center"}
                  animation={"zoomIn"}
                  background={{}}
                  gridArea="c2"
                  width="medium"
                  justify="center"
                >
                  <Chat
                    background={{ color: "chat-background", opacity: true }}
                  />
                </Box>
              </Grid>
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
