import React from "react";
import { Box, Text } from "grommet";
import LoadingComponent from "./utils/Loading";

const ConversationBox = props => {
  const fromBot = props.item.from === 0;

  const getWidth = content => {
    if (content.length >= 128) {
      return "medium";
    } else if (content.length < 16) {
      return "xsmall";
    } else {
      return "small";
    }
  };

  if (props.item.waiting) {
    return <LoadingComponent type={"bubbles"} />;
  } else {
    return (
      <Box
        align={fromBot ? "start" : "end"}
        alignContent={fromBot ? "start" : "end"}
        alignSelf={fromBot ? "start" : "end"}
        animation={fromBot ? "fadeIn" : "slideLeft"}
        background={`dark-${props.item.from + 1}`}
        flex={false}
        justify={fromBot ? "start" : "end"}
        margin={{
          top: "xsmall",
          left: "",
          right: ""
        }}
        pad="small"
        round={fromBot ? { corner: "right" } : { corner: "left" }}
        width={getWidth(props.item.content)}
      >
        <Text size="small">{props.item.content}</Text>
      </Box>
    );
  }
};

export default ConversationBox;