import React from "react";
import { Box, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";
import { TOGGLE_SIDEBAR } from "../redux/constants/action-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    title: state.title
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch({ type: TOGGLE_SIDEBAR })
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
