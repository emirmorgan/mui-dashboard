import React from "react";

import { Badge, Box, IconButton } from "@mui/material";
import Ticket from "./Ticket";
import User from "./User";

import { Menu, Notifications } from "@mui/icons-material";
import Logo from "../Sidebar/Logo";

function Navbar() {
  return (
    <Box
      display="flex"
      position="fixed"
      backgroundColor="#FFF"
      width={{ xs: "100%", sm: "100%", md: "calc(100% - 244px)" }}
      zIndex="1"
      alignItems="center"
      py="16px"
      borderBottom="solid 1px #EAEAEA"
    >
      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
        width="100%"
        gap="16px"
      >
        <Ticket />
        <Box display="flex" gap="16px">
          <IconButton>
            <Badge badgeContent={4} color="secondary" sx={{ color: "#8D81FF" }}>
              <Notifications />
            </Badge>
          </IconButton>
          <User />
        </Box>
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        alignItems="center"
        justifyContent="space-around"
        width="100%"
        gap="16px"
      >
        <Box width="60px" marginLeft="24px">
          <img src="src/assets/logo.png" alt="Logo" width="100%"></img>
        </Box>
        <Box width="60px" marginRight="24px">
          <IconButton>
            <Menu fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
