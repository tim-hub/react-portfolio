import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Grommet, ResponsiveContext, Text } from "grommet";
import "./App.css";

import Chat from "./components/layout/Chat";
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
            <Box
              fill
              background={{ color: "accent-3", opacity: true }}
              direction="row-responsive"
            >
              {/*<AppBarContainer />*/}
              {/*<Grid*/}
              {/*  fill*/}
              {/*  areas={[*/}
              {/*    { name: "c1", start: [0, 0], end: [0, 0] },*/}
              {/*    { name: "c2", start: [1, 0], end: [1, 0] },*/}
              {/*    { name: "c3", start: [2, 0], end: [2, 0] },*/}
              {/*    { name: "c4", start: [3, 0], end: [3, 0] },*/}
              {/*    { name: "c5", start: [4, 0], end: [4, 0] }*/}
              {/*  ]}*/}
              {/*  columns={["flex", "xsmall", "medium", "xsmall", "flex"]}*/}
              {/*  rows={["flex"]}*/}
              {/*  gap="small"*/}
              {/*>*/}
              {/*  */}
              {/*</Grid>*/}
              <Box
                flex
                direction={"column"}
                gap={"small"}
                width={"xsmall"}
                align="center"
                alignContent={"center"}
                alignSelf={"center"}
                justify={"center"}
              >
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>

                <Text>hi</Text>
                <Text>hi</Text>
              </Box>

              <Box
                align="center"
                alignContent={"center"}
                alignSelf={"center"}
                animation={"zoomIn"}
                background={{}}
                height={"auto"}
                width="medium"
                justify="start"
                // fill="vertical"
                // overflow="auto"
              >
                <Chat
                  background={{ color: "chat-background", opacity: true }}
                />
              </Box>

              {/*<Box*/}
              {/*  flex*/}
              {/*  fill*/}
              {/*  background={{ color: "accent-3", opacity: true }}*/}
              {/*  direction={"column"}*/}
              {/*  gap={"small"}*/}
              {/*  width={"xsmall"}*/}
              {/*  align="center"*/}
              {/*  alignContent={"center"}*/}
              {/*  alignSelf={"center"}*/}
              {/*  justify={"center"}*/}
              {/*>*/}
              {/*  <Text>hi</Text>*/}
              {/*  <Text>hi</Text>*/}
              {/*  <Text>hi</Text>*/}
              {/*  <Text>hi</Text>*/}
              {/*  <Text>hi</Text>*/}
              {/*</Box>*/}
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
