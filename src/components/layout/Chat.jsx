import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Collapsible,
  TextInput,
  InfiniteScroll,
  Text,
  Clock
} from "grommet";
import { Next, Close } from "grommet-icons";

import { ask, answer, answering, setToTyping } from "../../redux/actions/chat";
import { hideSidebar } from "../../redux/actions/index";
import { answerInChat } from "../../chattingengine/chat";
import { nlpBot } from "../../chattingengine/chat";
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
        this.setState({ question: "" });
      });
      nlpBot(question).then(result => {
        this.props.answer(result["srcAnswer"]);
        this.setState({ question: "" });
      });
    };
    return (
      <Collapsible direction="horizontal" open={this.props.showBar}>
        <Box
          flex
          width={"medium"}
          height="large"
          align="center"
          justify="center"
        >
          <Box
            background={{ color: "accent-3" }}
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
            height="large"
            gap="small"
            round
            elevation="medium"
          >
            <Box
              direction="row"
              align="center"
              alignContent="start"
              background="light-2"
              justify="between"
              elevation="small"
              round={{ size: "medium", corner: "top" }}
              fill="horizontal"
            >
              <Button
                icon={<Close size={"small"} />}
                type={"button"}
                onClick={() => {
                  this.props.hideSidebar();
                }}
                reverse={false}
              />

              <Text size="xsmall">
                {this.props.statuses[this.props.status]}
              </Text>
              <Clock
                type="digital"
                precision={"minutes"}
                size={"small"}
                margin={"small"}
              />
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
              background="light-2"
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
                onChange={event => {
                  this.setState({ question: event.target.value });
                  this.props.typing();
                }}
                onKeyDown={event => {
                  if (event.key === "Enter" && this.props.status !== 1) {
                    askAQuestion(this.state.question);
                  }
                }}
              />

              <Button
                disabled={this.props.status === 1}
                icon={<Next size={"small"} />}
                primary
                type={"button"}
                margin={{ left: "small" }}
                onClick={() => {
                  askAQuestion(this.state.question);
                }}
                reverse={false}
              >
                ""
              </Button>
            </Box>
          </Box>
        </Box>
      </Collapsible>
    );
  }
}

const mapStatusToProps = (status, ownProps) => {
  return {
    status: status.chat.status,
    statuses: status.chat.statuses,
    questions: status.chat.questions,
    remote: status.chat.remote,
    size: status.root.size,
    parentBackground: ownProps.parentBackground,
    showBar: status.root.showBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ask: question => {
      dispatch(ask(question));
    },
    answer: result => {
      dispatch(answer(result));
    },
    answering: () => {
      dispatch(answering());
    },
    typing: () => {
      dispatch(setToTyping());
    },
    hideSidebar: () => {
      dispatch(hideSidebar());
    }
  };
};

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Chat);
