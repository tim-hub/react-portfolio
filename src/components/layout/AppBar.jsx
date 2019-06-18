import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Box, Heading, Button, Stack, Anchor, Tab, Tabs, Text } from "grommet";
import { Notification } from "grommet-icons";
import { toggleSidebar } from "../../redux/actions";

const mapStateToProps = state => {
  return {
    title: state.root.title,
    showSidebar: state.root.showBar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: showing => {
      dispatch(toggleSidebar(showing));
    }
  };
};

/**
 * An app header bar.
 * @param {*} props
 */
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "left", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Box direction={"row"} gap={"small"} align={"baseline"}>
      <Heading level="3" margin="none">
        <NavLink to={"/"} className="App-tab" activeClassName="App-tab-active">
          {props.title}
        </NavLink>
        <span> </span>
      </Heading>
      <Heading level="4" margin="none">
        <NavLink
          to={"/Ai"}
          className="App-tab"
          activeClassName="App-tab-active"
        >
          About Ai
        </NavLink>
        <span> </span>
      </Heading>
    </Box>

    <Stack anchor="top-right">
      {/*<Box background="red" pad={{ horizontal: "xsmall" }} round>*/}
      {/*  <Text>8</Text>*/}
      {/*</Box>*/}
      <Button
        icon={<Notification />}
        onClick={() => {
          props.toggleSidebar(props.showSidebar);
        }}
      />
    </Stack>
  </Box>
);

const AppBatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);

export default AppBatContainer;
