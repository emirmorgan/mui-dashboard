import React, { useState } from "react";

import { Badge, Box, Divider, IconButton } from "@mui/material";
import Ticket from "./Ticket";
import User from "./User";

import {
  BugReport,
  Campaign,
  CrisisAlert,
  Dashboard,
  FindInPage,
  Help,
  Menu,
  Notifications,
  Public,
} from "@mui/icons-material";
import MenuBox from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

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
      {/* Desktop Navbar */}
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
      {/* Mobile Navbar */}
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
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "mobile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Menu fontSize="large" />
          </IconButton>
        </Box>
        <MenuBox
          id="mobile-menu"
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
          <MenuItem sx={{ gap: "16px" }}>
            <Dashboard /> Dashboard
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <Public /> Threat Map
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <CrisisAlert /> All threats
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <FindInPage /> Reports
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <BugReport /> Blacklists
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <Campaign /> Announcements
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: "16px" }}>
            <Help /> Support
          </MenuItem>
        </MenuBox>
      </Box>
    </Box>
  );
}

export default Navbar;
