import React from "react";
import { Box, Text } from "grommet";
import LoadingComponent from "../utils/Loading";

const ConversationBox = props => {
  const fromBot = props.item.from === 0;

  if (props.item.waiting) {
    return <LoadingComponent type={"bubbles"} />;
  } else {
    return (
      <Box
        align={fromBot ? "start" : "end"}
        alignContent={fromBot ? "start" : "end"}
        alignSelf={fromBot ? "start" : "end"}
        animation={fromBot ? "fadeIn" : "slideLeft"}
        background={fromBot ? { color: "dark-1" } : { color: "light-3" }}
        elevation="small"
        flex={false}
        justify={fromBot ? "start" : "end"}
        margin={{
          top: "xsmall",
          left: "",
          right: ""
        }}
        pad="small"
        round={fromBot ? { corner: "right" } : { corner: "left" }}
      >
        <Text size="small">{props.item.content}</Text>
      </Box>
    );
  }
};

export default ConversationBox;
