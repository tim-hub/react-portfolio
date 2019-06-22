import React from "react";
import { connect } from "react-redux";
import { Redirect, NavLink, withRouter } from "react-router-dom";
import { chatData } from "../../data/data";
import { Box, Button, Text } from "grommet";
import { Home, Chat, Next } from "grommet-icons";
import { showSidebar, hideSidebar } from "../../redux/actions";

const getRandomTip = () => {
  return chatData["tips"][Math.floor(Math.random() * chatData["tips"].length)];
};

// const updateTip = () => {
//   setTimeout(updateTip, 1000);
//   return getRandomTip();
// };

const BottomBar = (props, context) => {
  const sizeIsSmall =
    props.size === "small" ||
    props.size === "xsmall" ||
    props.size === "xxsmall";
  return (
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
        onClick={() => {
          props.history.push("/");
        }}
      />
      {!(sizeIsSmall && props.showBar) ? (
        <Text flex>{getRandomTip()}</Text>
      ) : null}

      {props.showBar ? (
        !sizeIsSmall ? (
          <Button
            icon={<Next size={"medium"} />}
            primary
            type={"button"}
            margin={{ right: "small" }}
            onClick={() => {
              props.hideSidebar();
            }}
          />
        ) : null
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
};

const mapStatusToProps = (status, ownProps) => {
  return {
    showBar: status.root.showBar,
    size: status.root.size,
    history: ownProps.history
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

export default withRouter(
  connect(
    mapStatusToProps,
    mapDispatchToProps
  )(BottomBar)
);
