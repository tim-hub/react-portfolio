import React from "react";
import { connect } from "react-redux";
import { Box, Collapsible } from "grommet";

import Chat from "./Chat";
import { HIDE_SIDEBAR } from "../../redux/constants/action-types";

const mapStateToProps = (state, ownProps) => {
  return {
    showSidebar: state.root.showBar,
    size: state.root.size,
    background: ownProps.background
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch({ type: HIDE_SIDEBAR })
  };
};
/**
 * A responsive sidebar.
 * @param {*} props - props from parent component. {size, showSideBar}
 */
const SideBar = props => {
  return (
    <Collapsible direction="horizontal" open={props.showSidebar}>
      <Box
        background={props.background}
        flex
        width="medium"
        align="center"
        justify="center"
      >
        <Chat background={{ color: "chat-background", opacity: true }} />
      </Box>
    </Collapsible>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
