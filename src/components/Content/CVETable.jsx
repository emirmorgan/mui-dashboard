import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, cvss, summary, lastupdate, publishdate) {
  return { id, cvss, summary, lastupdate, publishdate };
}

const rows = [
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
  createData(
    "CVE-2022-2778",
    "None",
    "In affected versions of Octopus Deploy it is possible to bypass rate limiting on login using null bytes.",
    "30-09-2022 - 04:15	",
    "30-09-2022 - 04:15"
  ),
];

function CVETable() {
  return (
    <TableContainer sx={{ my: "18px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>CVSS</TableCell>
            <TableCell>Summary</TableCell>
            <TableCell>Last Major Update</TableCell>
            <TableCell>Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.cvss}</TableCell>
              <TableCell>{row.summary}</TableCell>
              <TableCell>{row.lastupdate}</TableCell>
              <TableCell>{row.publishdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CVETable;
