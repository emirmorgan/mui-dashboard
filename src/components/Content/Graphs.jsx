import { Grid, Typography } from "@mui/material";
import React from "react";
import Graph from "./Graph";

const threatData = [
  {
    name: "05/10/22",
    Threat: 12312,
  },
  {
    name: "06/10/22",
    Threat: 10488,
  },
  {
    name: "07/10/22",
    Threat: 11969,
  },
  {
    name: "08/10/22",
    Threat: 9788,
  },
  {
    name: "09/10/22",
    Threat: 13591,
  },
  {
    name: "10/10/22",
    Threat: 14121,
  },
  {
    name: "11/10/22",
    Threat: 13487,
  },
];

const analyzeData = [
  {
    name: "05/10/22",
    Analyze: 5312,
  },
  {
    name: "06/10/22",
    Analyze: 3488,
  },
  {
    name: "07/10/22",
    Analyze: 2969,
  },
  {
    name: "08/10/22",
    Analyze: 3788,
  },
  {
    name: "09/10/22",
    Analyze: 4591,
  },
  {
    name: "10/10/22",
    Analyze: 5121,
  },
  {
    name: "11/10/22",
    Analyze: 5487,
  },
];

function Graphs() {
  return (
    <Grid container spacing={2} marginTop={3} justifyContent="space-around">
      <Grid item sm={12} lg={6}>
        <Typography
          fontWeight="bold"
          fontSize={12}
          sx={{ color: "gray" }}
          marginLeft="24px"
          marginBottom="12px"
        >
          Weekly Threat Count Chart
        </Typography>
        <Graph data={threatData} datakey={"Threat"} />
      </Grid>
      <Grid item sm={12} lg={6}>
        <Typography
          fontWeight="bold"
          fontSize={12}
          sx={{ color: "gray" }}
          marginLeft="24px"
          marginBottom="12px"
        >
          Weekly Analyzed Threat Count Chart
        </Typography>
        <Graph data={analyzeData} datakey={"Analyze"} />
      </Grid>
    </Grid>
  );
}

export default Graphs;
