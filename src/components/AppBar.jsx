import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";
import { toggleSidebar, hideSidebar } from "../redux/actions/index";
import { TOGGLE_SIDEBAR } from "../redux/constants/action-types";

const mapStateToProps = state => {
  return {
    title: state.title
  };
};
const mapDispatchToProps = {
  onClick: () => {
    return {
      type: TOGGLE_SIDEBAR
    };
  } // equal onClick: () => dispatch({type: TOGGLE_SIDEBAR})
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
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Heading level="3" margin="none">
      {props.title} Hi
    </Heading>
    <Button icon={<Notification />} onClick={props.onClick} />
  </Box>
);

const AppBatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);

export default AppBatContainer;
