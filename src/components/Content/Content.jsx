import { Container } from "@mui/material";
import Cards from "./Cards";
import Graphs from "./Graphs";
import CVETable from "./CVETable";

function Content() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "72px" }}>
      <Cards />
      <Graphs />
      <CVETable />
    </Container>
  );
}

export default Content;
