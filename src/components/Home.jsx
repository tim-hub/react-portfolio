import React from "react";
import { connect } from "react-redux";
import { Box, Button, Text, Markdown } from "grommet";
import { Launch, Achievement, ContactInfo, Services } from "grommet-icons";

const MenuBox = props => (
  <Box
    align="center"
    background={props.background}
    pad={"large"}
    width={props.size}
    round
    gap={props.size}
  >
    {props.icon}
    <Text size={props.size}>{props.description}</Text>
    {/*<Markdown> </Markdown>*/}
    {/*<Button primary color="dark-1" label={props.description} />*/}
    {/*<Button size={props.size} label="Button" onClick={props.onClick} />*/}
  </Box>
);

const Home = props => {
  const size = props.size;

  return (
    <Box
      flex
      align="center"
      justify="center"
      gap={"small"}
      direction={"column"}
      margin={props.size}
    >
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        gap={props.size}
      >
        <MenuBox
          background={{ color: "light-2", opacity: "strong" }}
          description={"About "}
          icon={<Launch size={"large"} color={"brand"} />}
          onClick={() => {}}
          size={size}
        />

        <MenuBox
          background={{ color: "dark-3", opacity: "strong" }}
          description={"Achieve"}
          icon={<Achievement size={"large"} color={"accent-1"} />}
          onClick={() => {}}
          size={size}
        />
      </Box>
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        gap={props.size}
      >
        <MenuBox
          background={{ color: "dark-3", opacity: "strong" }}
          description={"Projects"}
          icon={<Services size={"large"} color={"accent-1"} />}
          onClick={() => {}}
          size={size}
        />

        <MenuBox
          background={{ color: "light-2", opacity: "strong" }}
          description={"Contact"}
          icon={<ContactInfo size={"large"} color={"brand"} />}
          onClick={() => {}}
          size={size}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    size: state.root.size
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
