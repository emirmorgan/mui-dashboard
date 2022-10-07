import { Box } from "@mui/material";
import React from "react";

function Logo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginY="24px"
    >
      <img
        src="https://github.com/emirmorgan/mui-dashboard/blob/master/src/assets/logo.png?raw=true"
        alt="Logo"
        width="80px"
      />
    </Box>
  );
}

export default Logo;
