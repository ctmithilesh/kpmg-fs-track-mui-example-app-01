import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

function createData(name, office, email) {
  return { name, office, email };
}
const rows = [
  createData("KPMG-Bangalore", "Whitefield", "whitefield@kpmg.com"),
  createData("KPMG-Mumbai", "Churchgate", "churchgate@kpmg.com"),
  createData("KPMG-Delhi", "moti nagar", "motinagar@kpmg.com"),
];

const Location = () => {
  return (
    <Box sx={{ m: 4, p: 2, width: `90%` }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: `lightblue` }}>
            <TableRow>
              <TableCell>Location Name </TableCell>
              <TableCell align="right">Office Address </TableCell>
              <TableCell align="right">Email Address </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.office}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Location;
