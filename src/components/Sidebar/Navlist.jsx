import {
  BugReport,
  Campaign,
  CrisisAlert,
  Dashboard,
  FindInPage,
  Help,
  Public,
} from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import React from "react";
import Styles from "../../styles.module.sass";

function Navlist() {
  return (
    <Box overflow="auto">
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          px: "8px",
        }}
      >
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <Public />
            </ListItemIcon>
            <ListItemText primary="Threat Map"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <CrisisAlert />
            </ListItemIcon>
            <ListItemText primary="All threats"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <FindInPage />
            </ListItemIcon>
            <ListItemText primary="Reports"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <BugReport />
            </ListItemIcon>
            <ListItemText primary="Blacklists"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <Campaign />
            </ListItemIcon>
            <ListItemText primary="Announcements"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding="true">
          <ListItemButton className={Styles.nav_button}>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Support"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Navlist;
