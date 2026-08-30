import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import "./Orders.css";

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

export default function Order() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");

  const handleChangeBranch = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTap = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTrader = (event) => {
    setAge(event.target.value);
  };
  return (
    // content container
    <div className="container">
      {/* Header */}
      <div className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Manage Orders</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-green">Upload Excel</button>
          <button className="panalBtn action-orange">new order</button>
        </div>
        {/*=== buttons === */}
      </div>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* Taps*/}
        <Box className="orders-tabs orders-toolbar">
          <Tabs
            value={value}
            onChange={handleChangeTap}
            aria-label="basic tabs"
          >
            <Tab label="Item One" className="tab-label" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} className="tab-label" />
            <Tab
              label="Item Three"
              {...a11yProps(2)}
              className="tab-label"
            />{" "}
            <Tab label="Item Three" {...a11yProps(2)} className="tab-label" />{" "}
            <Tab label="Item Three" {...a11yProps(2)} className="tab-label" />{" "}
            <Tab label="Item Three" {...a11yProps(2)} className="tab-label" />
          </Tabs>
          {/* ===Taps=== */}
        </Box>
        {/* === Taps ===*/}
        {/* Filter settings */}
        <Box className="orders-filters orders-toolbar">
          <OutlinedInput
            placeholder="Search with id or name of trader"
            id={`${1}-input`}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            aria-describedby={`${1}-helper-text`}
            className="search-input search-input-wide"
          />
          <Select
            className="filter-select"
            value={age}
            onChange={handleChangeBranch}
            displayEmpty
            inputProps={{ "aria-label": "Branch" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <Select
            className="filter-select"
            value={age}
            onChange={handleChangeTrader}
            displayEmpty
            inputProps={{ "aria-label": "Branch" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <input type="date" name="startDate" className="filter-select" />
          <input type="date" name="endDate" className="filter-select" />
          <input
            type="submit"
            value="search"
            className="filter-select submit-filter"
          />
        </Box>
        {/* === Filter settings === */}
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
        <Box className="orders-pagination">
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
function OrderTable() {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table">
        <TableHead className="table-head-background">
          <TableRow>
            <StyledTableCell align="right">OrderID</StyledTableCell>
            <StyledTableCell align="right">Trader</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Shipping fee</StyledTableCell>
            <StyledTableCell align="right">Shipping type</StyledTableCell>
            <StyledTableCell align="right">State</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Permissions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
