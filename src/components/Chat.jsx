import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Button, Grid, InfiniteScroll, Text } from "grommet";
import { Notification } from "grommet-icons";
import { updateChattingStatus } from "../redux/actions/chat";
import BubbleLoading from "./utils/Loading.js";
import { ask, answer } from "../redux/actions/chat";
import { asyncAnswer, answerInChat } from "../chattingengine/chat";

const mapStatusToProps = (status, ownProps) => {
  return {
    status: status.chat.status,
    questions: status.chat.questions,
    answers: status.chat.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ask: question => {
      dispatch(ask(question));
    },
    answer: result => {
      dispatch(answer(result));
    }
  };
};

const data = [
  { index: 0, from: 0, content: "hi there ," },
  { index: 1, from: 1, content: "hi," },
  { index: 2, from: 1, content: "what is your name," },
  {
    index: 3,
    from: 0,
    references: {
      work: "/"
    },
    content:
      "I am a bot built by Tim, for introducing him,I am a bot built by Tim, for introducing him,I am a bot built by Tim, for introducing him, <a href=/> a</a>"
  },
  {
    index: 4,
    from: 0,
    references: {
      work: "/"
    },
    content: "..."
  }
];

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
        left: "xsmall",
        right: "xsmall"
      }}
      pad="small"
      round={fromBot ? { corner: "right" } : { corner: "left" }}
      width={getWidth(props.item.content)}
    >
      <Text size="small">{props.item.content}</Text>
    </Box>
  );
};

const Chat = props => {
  const askAQuestion = question => {
    props.ask(props.questions.concat(question));
    answerInChat(question).then(result => {
      props.answer(props.answers.concat(result));
    });
  };
  return (
    <Box
      background="accent-3"
      justify="start"
      margin={{
        top: "medium",
        bottom: "medium",
        left: "large",
        right: "large"
      }}
      align="start"
      alignContent="start"
      alignSelf="center"
      fill="horizontal"
      height="700px"
      gap="small"
      round
      elevation="medium"
    >
      <Box
        direction="row"
        align="center"
        alignContent="center"
        justify="center"
        background="light-2"
        pad={{ left: "medium", right: "left", vertical: "small" }}
        elevation="medium"
        round={{ corner: "top" }}
        fill="horizontal"
      >
        <Text size="xsmall">{props.status}</Text>
      </Box>

      <Box fill overflow="auto">
        <InfiniteScroll items={data}>
          {/*<BubbleLoading key={"asd"} type="bubbles" />*/}
          {(item, index) => <ConversationBox item={item} key={index} />}
        </InfiniteScroll>
      </Box>

      <Box
        direction="row"
        align="end"
        alignContent="end"
        background="light-4"
        pad={{ left: "medium", right: "left", vertical: "small" }}
        elevation="medium"
        round={{ corner: "bottom" }}
        fill="horizontal"
      >
        {/*<Text size="large">Talking</Text>*/}
        <Button
          onClick={() => {
            askAQuestion("asd");
          }}
        >
          Send
        </Button>
      </Box>

      {/* <Box>

    </Box> */}
    </Box>
  );
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Chat);
