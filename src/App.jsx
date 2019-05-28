import React from "react";
import { Box, Button, Heading, Grommet, ResponsiveContext } from "grommet";

import "./App.css";
import AppBar from "./components/AppBar";
import SideBarContainer from "./components/SideBar";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
    this.hideSideBar = this.hideSideBar.bind(this);
  }
  hideSideBar() {
    console.log("hide side bar");
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar />
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  app body
                </Box>
                <SideBarContainer size={size} />
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
