import React from "react";
import { connect } from "react-redux";
import {
  Icons,
  Box,
  Heading,
  Button,
  Select,
  TextInput,
  TextArea,
  InfiniteScroll,
  Text
} from "grommet";
import { Notification, Edit, Next } from "grommet-icons";
import { updateChattingStatus } from "../redux/actions/chat";
import BubbleLoading from "./utils/Loading.js";
import { ask, answer } from "../redux/actions/chat";
import { asyncAnswer, answerInChat } from "../chattingengine/chat";

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
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: "" };
    console.log(this.props.questions);
  }

  render() {
    const askAQuestion = question => {
      this.props.ask(this.props.questions.concat(question));
      answerInChat(question).then(result => {
        this.props.answer(this.props.answers.concat(result));
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
          round={{ size: "medium", corner: "top" }}
          fill="horizontal"
        >
          <Text size="xsmall">{this.props.statuses[this.props.status]}</Text>
        </Box>

        <Box fill overflow="auto">
          <InfiniteScroll items={this.props.questions}>
            {/*<BubbleLoading key={"asd"} type="bubbles" />*/}

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

const mapStatusToProps = (status, ownProps) => {
  return {
    status: status.chat.status,
    statuses: status.chat.statuses,
    questions: status.chat.questions,
    answers: status.chat.answers,
    size: status.root.size
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

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Chat);
