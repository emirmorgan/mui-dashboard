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
      <img src="src/assets/logo.png" alt="Logo" width="80px" />
    </Box>
  );
}

export default Logo;
