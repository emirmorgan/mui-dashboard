import { KeyboardArrowDown } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";

function User() {
  return (
    <Box display="flex" gap="12px" alignItems="center">
      <Typography>Name surname</Typography>
      <Box display="flex" gap="4px">
        <Avatar
          alt="User image"
          src="/src/assets/avatar.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <IconButton>
          <KeyboardArrowDown />
        </IconButton>
      </Box>
    </Box>
  );
}

export default User;
