import React from "react";

import { Box } from "@mui/material";
import Logo from "./Logo";
import Navlist from "./Navlist";

function Sidebar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth="175px"
      px="32px"
      borderRight="solid 1px #EAEAEA"
    >
      <Logo />
      <Navlist />
    </Box>
  );
}

export default Sidebar;
