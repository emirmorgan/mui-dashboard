import { Box, Container } from "@mui/material";
import Cards from "./Cards";
import Graphs from "./Graphs";
import CVETable from "./CVETable";
import User from "../Navbar/User";
import Ticket from "../Navbar/Ticket";

function Content() {
  return (
    <Box marginTop="72px">
      <Container>
        <Box
          display={{ xs: "flex", sm: "flex", md: "none" }}
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
    </Box>
  );
}

export default Content;
