import Styles from "../../styles.module.sass";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Article } from "@mui/icons-material";

function Card({ count, label }) {
  return (
    <Box
      className={Styles.content_card}
      display="flex"
      flexDirection="column"
      px="24px"
      gap="16px"
    >
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize="22px" fontWeight="bold">
          {count}
        </Typography>
        <Box className={Styles.content_cardbox}>
          <Article sx={{ color: "gray" }} fontSize="large" />
        </Box>
      </Box>
      <Box>
        <Typography fontSize="13px">{label}</Typography>
      </Box>
    </Box>
  );
}

export default Card;
