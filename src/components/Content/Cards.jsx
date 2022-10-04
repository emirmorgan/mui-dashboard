import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <Grid container spacing={2} marginTop={3} justifyContent="space-around">
      <Grid item xs={12} lg={4}>
        <Card count="2.148.611" label="Total Threat Count For Platform" />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          count="1.016.531"
          label="Total Analyzed Threat Count For Platform"
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          count="388.955"
          label="Total Terminated Threat Count For Platform"
        />
      </Grid>
    </Grid>
  );
}

export default Cards;
