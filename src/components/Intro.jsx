import React from "react";
import { Box, Grid } from "grommet";

const Intro = props => (
  <Grid
    rows={["small", "medium"]}
    columns={["medium", "large"]}
    gap="small"
    areas={[
      { name: "header", start: [0, 0], end: [1, 0] },
      { name: "nav", start: [0, 1], end: [0, 1] },
      { name: "main", start: [1, 1], end: [1, 1] }
    ]}
  >
    <Box gridArea="header" background="brand" />
    <Box gridArea="nav" background="light-5" />
    <Box gridArea="main" background="light-2" />
  </Grid>
);

export default Intro;
