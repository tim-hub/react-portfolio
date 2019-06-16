import React from "react";
import { Box, Text } from "grommet/es6";
import LoadingComponent from "./utils/Loading";
import { getRandomLoading } from "../utils/random";

class ConversationBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fromBot: props.item.from === 0,
      waiting: props.item.waiting //props.item.from === 0 && !props.remote
    };
  }

  render() {
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
      <Box>
        {this.state.waiting ? (
          <LoadingComponent type={"bubbles"} />
        ) : (
          <Box
            align={this.state.fromBot ? "start" : "end"}
            alignContent={this.state.fromBot ? "start" : "end"}
            alignSelf={this.state.fromBot ? "start" : "end"}
            animation={this.state.fromBot ? "fadeIn" : "slideLeft"}
            background={`dark-${this.props.item.from + 1}`}
            flex={false}
            justify={this.state.fromBot ? "start" : "end"}
            margin={{
              top: "xsmall",
              left: "",
              right: ""
            }}
            pad="small"
            round={
              this.state.fromBot ? { corner: "right" } : { corner: "left" }
            }
            width={getWidth(this.props.item.content)}
          >
            <Text size="small">{this.props.item.content}</Text>
          </Box>
        )}
      </Box>
    );
  }

  // componentDidMount() {
  //   if (this.state.waiting) {
  //     this.timer = setTimeout(() => {
  //       this.setState({ waiting: false });
  //     }, getRandomLoading(3000));
  //   }
  // }
  //
  // componentWillUnmount() {
  //   if (this.state.waiting) {
  //     clearTimeout(this.timer);
  //   }
  // }
}

export default ConversationBox;
