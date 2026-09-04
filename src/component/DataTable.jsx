import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#172b24",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "20px",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataTable(props) {
  const { header, data, actionButtons = ["View"] } = props;
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table">
        <TableHead className="table-head-background">
          <TableRow>
            {header.map((header) => (
              <TableCell align="center" key={header}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => {
            const values = Object.values(row);
            let valueIndex = 0;
            return (
              <StyledTableRow key={row.id ?? rowIndex}>
                {header.map((column) => {
                  if (column.toLowerCase() === "action") {
                    return (
                      <StyledTableCell align="center" key={column}>
                        {actionButtons.map((action) => (
                          <button
                            type="button"
                            className="table-action-button"
                            key={action}
                          >
                            {action}
                          </button>
                        ))}
                      </StyledTableCell>
                    );
                  }

                  return (
                    <StyledTableCell align="center" key={column}>
                      {values[valueIndex++]}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
