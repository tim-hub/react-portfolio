import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Box, Grommet, ResponsiveContext } from "grommet";
import "./App.css";
import AppBarContainer from "./components/AppBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

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
  render() {
    return (
      <BrowserRouter>
        <Grommet theme={theme} full>
          <ResponsiveContext.Consumer>
            {size => (
              <Box fill>
                <AppBarContainer />
                <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                  <Box flex align="center" justify="center">
                    <Switch>
                      {/* <Redirect exact path="/" to="/" /> */}
                      <Route path="/" component={Home} />
                    </Switch>
                  </Box>
                  <SideBar size={size} />
                </Box>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </BrowserRouter>
    );
  }
}

export default App;
