import React from "react";

import { Box } from "@mui/material";
import Logo from "./Logo";
import Navlist from "./Navlist";

function Sidebar() {
  return (
    <Box
      display="flex"
      position="fixed"
      height="100%"
      backgroundColor="#FFF"
      flexDirection="column"
      width="180px"
      zIndex="2"
      px="32px"
      borderRight="solid 1px #EAEAEA"
    >
      <Logo />
      <Navlist />
    </Box>
  );
}

export default Sidebar;
