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
import { useState } from "react";
import DataTable from "./DataTable";
import "../style/Orders.css";
import AddNewOrder from "./AddNewOrder";

const tableData = [
  {
    orderId: "ORD-1001",
    trader: "John Smith",
    city: "New York",
    price: "$240",
    shippingFee: "$12",
    shippingType: "Express",
    state: "Delivered",
    date: "2026-08-21",
    permissions: "Manage",
  },
  {
    orderId: "ORD-1002",
    trader: "Sarah Lee",
    city: "Chicago",
    price: "$185",
    shippingFee: "$10",
    shippingType: "Standard",
    state: "Pending",
    date: "2026-08-22",
    permissions: "Manage",
  },
  {
    orderId: "ORD-1003",
    trader: "Mike Brown",
    city: "Boston",
    price: "$320",
    shippingFee: "$14",
    shippingType: "Express",
    state: "Delivered",
    date: "2026-08-23",
    permissions: "Manage",
  },
];
const tableHeader = [
  "OrderID",
  "Trader",
  "City",
  "Price",
  "Shipping fee",
  "Shipping type",
  "State",
  "Date",
  "Permissions",
];

export default function Order() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            new order
          </button>
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
            <DataTable header={tableHeader} data={tableData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <DataTable header={tableHeader} data={tableData} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <DataTable header={tableHeader} data={tableData} />
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
      <AddNewOrder handleClose={handleClose} isOpen={open} />
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
