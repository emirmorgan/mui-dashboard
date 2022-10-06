import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

import { Box } from "@mui/system";

function Container() {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        marginLeft={{ sm: "0px", md: "244px" }}
      >
        <Navbar />
        <Content />
      </Box>
    </Box>
  );
}

export default Container;
