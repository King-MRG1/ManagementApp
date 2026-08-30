import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DangerousIcon from "@mui/icons-material/Dangerous";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "black",
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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

export default function TraderView() {
  const [value, setValue] = useState(0);
  const handleChangeTap = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // content container
    <div className="container">
      {/* Header */}
      <div className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Trader view</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange">New Order</button>
        </div>
        {/*=== buttons === */}
      </div>
      <Box>
        <div className="control-panel-stats">
          <div className="card four">
            <div className="card-icon">
              <CheckCircleRoundedIcon />
            </div>

            <div className="stat-content">
              <Typography variant="h6" className="stat-label">
                New orders
              </Typography>
              <Typography variant="h5" className="stat-value">
                11
              </Typography>
              <Typography variant="h5" className="stat-description">
                No change
              </Typography>
            </div>
          </div>
          <div className="card one">
            <div className="card-icon">
              <InventoryIcon />
            </div>
            <div className="stat-content">
              <Typography variant="h6" className="stat-label">
                New orders
              </Typography>
              <Typography variant="h5" className="stat-value">
                11
              </Typography>
              <Typography variant="h5" className="stat-description">
                No change
              </Typography>
            </div>
          </div>
          <div className="card two">
            <div className="card-icon">
              <CheckCircleRoundedIcon />
            </div>

            <div className="stat-content">
              <Typography variant="h6" className="stat-label">
                New orders
              </Typography>
              <Typography variant="h5" className="stat-value">
                11
              </Typography>
              <Typography variant="h5" className="stat-description">
                No change
              </Typography>
            </div>
          </div>
          <div className="card five">
            <div className="card-icon">
              <DangerousIcon />
            </div>

            <div className="stat-content">
              <Typography variant="h6" className="stat-label">
                New orders
              </Typography>
              <Typography variant="h5" className="stat-value">
                11
              </Typography>
              <Typography variant="h5" className="stat-description">
                No change
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>My orders</h2>
          <Tabs
            value={value}
            onChange={handleChangeTap}
            aria-label="basic tabs"
          >
            <Tab label="Item One" className="tab-label" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} className="tab-label" />
            <Tab label="Item Three" {...a11yProps(2)} className="tab-label" />
          </Tabs>
        </Box>

        {/* === table header === */}
        <Box className="table-section">
          <CustomTabPanel value={value} index={0}>
            <OrderTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <OrderTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <OrderTable />
          </CustomTabPanel>
        </Box>
        {/* pagenation */}
        <Box className="pagination-bar">
          <Typography variant="p">Show 5 from 30</Typography>
          <div className="pagnation">
            <button>{"<="}</button>
            <button className="active-page">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>{"=>"}</button>
          </div>
        </Box>
        {/*=== pagenation === */}
      </Box>
      {/*=== body === */}
    </div>
    // === content container ===
  );
}
function OrderTable() {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table">
        <TableHead className="table-head-background">
          <TableRow>
            <StyledTableCell align="right">#</StyledTableCell>
            <StyledTableCell align="right">State</StyledTableCell>
            <StyledTableCell align="right">Customer</StyledTableCell>
            <StyledTableCell align="right">estate</StyledTableCell>
            <StyledTableCell align="right">city</StyledTableCell>
            <StyledTableCell align="right">order cost</StyledTableCell>
            <StyledTableCell align="right">shipping fee</StyledTableCell>
            <StyledTableCell align="right">display</StyledTableCell>
            <StyledTableCell align="right">Permissions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="tab-panel-content">{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
