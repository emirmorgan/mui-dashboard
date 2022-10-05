import React from "react";

import { Badge, Box, IconButton } from "@mui/material";
import Ticket from "./Ticket";
import User from "./User";
import { Notifications } from "@mui/icons-material";

function Navbar() {
  return (
    <Box
      display="flex"
      position="fixed"
      backgroundColor="#FFF"
      width="calc(100% - 279px)"
      zIndex="1"
      alignItems="center"
      justifyContent="space-between"
      py="16px"
      px="38px"
      borderBottom="solid 1px #EAEAEA"
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
  );
}

export default Navbar;
