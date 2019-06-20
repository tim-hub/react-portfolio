import React from "react";
import { connect } from "react-redux";
import { Box, Button, Text } from "grommet";
import { Attraction } from "grommet-icons";

const Home = props => {
  const size = props.size;
  return (
    <Box
      flex
      align="center"
      justify="center"
      gap={"small"}
      direction={"column"}
    >
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        gap={size}
      >
        <Box
          pad={size}
          align="center"
          background={{ color: "light-2", opacity: "strong" }}
          round
          gap="small"
        >
          <Attraction size={size} />
          <Text>Party</Text>
          <Button size={size} label="Button" onClick={() => {}} />
        </Box>
        <Box
          pad={size}
          align="center"
          background={{ color: "light-2", opacity: "strong" }}
          round
          gap="small"
        >
          <Attraction size={size} />
          <Text>Party</Text>
          <Button size={size} label="Button" onClick={() => {}} />
        </Box>
      </Box>
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        gap={size}
      >
        <Box
          pad={size}
          align="center"
          background={{ color: "light-2", opacity: "strong" }}
          round
          gap="small"
        >
          <Attraction size={size} />
          <Text>Party</Text>
          <Button size={size} label="Button" onClick={() => {}} />
        </Box>
        <Box
          pad={size}
          align="center"
          background={{ color: "light-2", opacity: "strong" }}
          round
          gap="small"
        >
          <Attraction size={size} />
          <Text>Party</Text>
          <Button size={size} label="Button" onClick={() => {}} />
        </Box>
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
