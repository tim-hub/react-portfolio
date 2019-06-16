import React from "react";
import { connect } from "react-redux";
import { Box, Collapsible, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import SideContent from "./SideContent";
import Chat from "./Chat";
import { HIDE_SIDEBAR } from "../redux/constants/action-types";

const mapStateToProps = (state, ownProps) => {
  return {
    showSidebar: state.root.showBar,
    size: state.root.size
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
  const renderContent = () => {
    return <Chat />;
  };

  const getCloseButton = clickingFun => (
    <Box
      background="light-2"
      tag="header"
      justify="end"
      align="center"
      direction="row"
    >
      <Button icon={<FormClose />} onClick={clickingFun} />
    </Box>
  );

  return (
    <Collapsible direction="horizontal" open={props.showSidebar}>
      {props.showSidebar &&
      (props.size === "small" || props.size === "xsmall") ? (
        <Layer flex>
          {getCloseButton(props.onClick)}
          {renderContent()}
        </Layer>
      ) : (
        <Box
          flex
          width="medium"
          elevation="small"
          align="center"
          justify="start"
        >
          {renderContent()}
        </Box>
      )}
    </Collapsible>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
