import { Container } from "@mui/material";
import Cards from "./Cards";
import Graphs from "./Graphs";

function Content() {
  return (
    <Container maxWidth="xl">
      <Cards />
      <Graphs />
    </Container>
  );
}

export default Content;
