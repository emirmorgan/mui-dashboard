import { Box, Container, useTheme } from "@mui/material";
import Cards from "./Cards";
import Graphs from "./Graphs";
import CVETable from "./CVETable";
import User from "../Navbar/User";
import Ticket from "../Navbar/Ticket";

const useStyles = (theme) => ({
  responsiveContainer: {
    marginTop: "72px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "sm",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "xl",
    },
  },
  responsiveBox: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
});

function Content() {
  const theme = useTheme();
  const Classes = useStyles(theme);

  return (
    <Container sx={Classes.responsiveContainer}>
      <Box
        display={Classes.responsiveBox}
        justifyContent="space-between"
        marginTop="32px"
      >
        <Ticket />
        <User />
      </Box>
      <Cards />
      <Graphs />
      <CVETable />
    </Container>
  );
}

export default Content;
