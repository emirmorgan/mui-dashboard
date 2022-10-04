import { Add } from "@mui/icons-material";
import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

function Ticket() {
  return (
    <Box display="flex">
      <Button
        startIcon={<Add />}
        display="flex"
        variant="contained"
        color="secondary"
        size="small"
        sx={{ borderRadius: "12px", backgroundColor: "#8D81FF" }}
      >
        New Ticket
      </Button>
    </Box>
  );
}

export default Ticket;
