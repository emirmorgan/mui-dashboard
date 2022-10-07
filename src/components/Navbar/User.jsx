import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function User() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" gap="12px" marginRight="12px" alignItems="center">
      <Typography display={{ xs: "none", sm: "none", md: "block" }}>
        Name surname
      </Typography>
      <Box display="flex" gap="4px">
        <Avatar
          alt="User image"
          src="https://github.com/emirmorgan/mui-dashboard/blob/master/src/assets/avatar.jpg?raw=true"
          sx={{ width: 36, height: 36 }}
        />
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <KeyboardArrowDown />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem> Profile</MenuItem>
        <Divider />
        <MenuItem> Settings</MenuItem>
        <Divider />
        <MenuItem>Extend the license</MenuItem>
        <Divider />
        <MenuItem>Support</MenuItem>
        <Divider />
        <MenuItem>Log out</MenuItem>
      </Menu>
    </Box>
  );
}

export default User;
