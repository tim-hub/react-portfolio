import React from "react";
import { connect } from "react-redux";
import { Chat } from "grommet-icons";
import { Button } from "grommet";
import { showSidebar } from "../../redux/actions";
const FloatingButton = props =>
  !props.showBar && (
    <Button
      icon={<Chat />}
      primary
      className={"float-bottom-right"}
      onClick={() => {
        props.showSidebar();
      }}
    />
  );

const mapStatusToProps = status => {
  return {
    showBar: status.root.showBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showSidebar: () => {
      dispatch(showSidebar());
    }
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(FloatingButton);
