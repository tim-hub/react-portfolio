import React from "react";
import { connect } from "react-redux";
import { Box, Button, TextInput, InfiniteScroll, Text } from "grommet";
import { Next } from "grommet-icons";

import { ask, answer, answering } from "../redux/actions/chat";
import { answerInChat } from "../chattingengine/chat";
import ConversationBox from "./ConversationBox";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "", loading: false };
  }

  render() {
    const askAQuestion = question => {
      this.props.ask(question);
      this.props.answering();
      answerInChat(question).then(result => {
        this.props.answer(result);
      });
    };
    return (
      <Box
        background="accent-3"
        justify="start"
        margin={{
          top: "xsmall",
          // bottom: "medium",
          left: "large",
          right: "large"
        }}
        align="start"
        alignContent="start"
        alignSelf="center"
        fill="horizontal"
        height="750px"
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
          round={{ size: "medium", corner: "top" }}
          fill="horizontal"
        >
          <Text size="xsmall">{this.props.statuses[this.props.status]}</Text>
        </Box>

        <Box fill overflow="auto">
          <InfiniteScroll items={this.props.questions}>
            {(item, index) => <ConversationBox item={item} key={index} />}
          </InfiniteScroll>
        </Box>

        <Box
          direction="row"
          align="end"
          alignContent="start"
          background="light-4"
          pad={{
            left:
              this.props.size === "small" || this.props.size === "xsmall"
                ? "medium"
                : "small",
            right:
              this.props.size === "small" || this.props.size === "xsmall"
                ? "medium"
                : "small",
            top:
              this.props.size === "small" || this.props.size === "xsmall"
                ? "medium"
                : "small",
            bottom: "xsmall"
          }}
          elevation="medium"
          round={{ size: "medium", corner: "bottom" }}
          fill="horizontal"
        >
          <TextInput
            primary
            value={this.state.question}
            onChange={event => this.setState({ question: event.target.value })}
          />

          <Button
            type={"button"}
            icon={<Next size={"small"} />}
            primary
            margin={{ left: "small" }}
            onClick={() => {
              askAQuestion(this.state.question);
            }}
          />
        </Box>
      </Box>
    );
  }
}

const mapStatusToProps = status => {
  return {
    status: status.chat.status,
    statuses: status.chat.statuses,
    questions: status.chat.questions,
    remote: status.chat.remote,
    size: status.root.size
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ask: question => {
      dispatch(ask(question));
    },
    answer: result => {
      console.log(result);
      dispatch(answer(result));
    },
    answering: () => {
      console.log("answering");
      dispatch(answering());
    }
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Chat);
