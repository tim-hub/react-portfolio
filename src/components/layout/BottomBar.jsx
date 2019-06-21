import React from "react";
import { connect } from "react-redux";
import { Box, Button, Text } from "grommet";
import { Home, Chat, Next } from "grommet-icons";
import { showSidebar, hideSidebar } from "../../redux/actions";

const BottomBar = props => (
  <Box
    direction="row"
    align="center"
    alignContent="start"
    background="dark-2"
    elevation="medium"
    round={{ size: "medium", corner: "top" }}
    margin={{ left: "small", right: "small" }}
    fill="horizontal"
    justify={"between"}
    gap={"small"}
  >
    <Button
      icon={<Home size={"medium"} />}
      primary
      type={"button"}
      margin={{ left: "small" }}
      onClick={() => {}}
    />
    <Text flex>fjhkjkhfhjk sfdjkhfdshkjsfd fsdjkhdfshjkhjkdf sfdjksfdkhj</Text>
    {props.showBar ? (
      <Button
        icon={<Next size={"medium"} />}
        primary
        type={"button"}
        margin={{ right: "small" }}
        onClick={() => {
          props.hideSidebar();
        }}
      />
    ) : (
      <Button
        icon={<Chat size={"medium"} />}
        primary
        type={"button"}
        margin={{ right: "small" }}
        onClick={() => {
          props.showSidebar();
        }}
      />
    )}
  </Box>
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
    },
    hideSidebar: () => {
      dispatch(hideSidebar());
    }
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(BottomBar);
