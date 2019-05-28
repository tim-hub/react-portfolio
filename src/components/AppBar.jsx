import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Button } from "grommet";
import { Notification } from "grommet-icons";
import { toggleSidebar } from "../redux/actions/index";

const mapStateToProps = state => {
  return {
    title: state.title,
    showSidebar: state.showBar
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
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Heading level="3" margin="none">
      {props.title + props.showSidebar} Hi
    </Heading>
    <Button
      icon={<Notification />}
      onClick={() => {
        props.toggleSidebar(props.showSidebar);
      }}
    />
  </Box>
);

const AppBatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);

export default AppBatContainer;
