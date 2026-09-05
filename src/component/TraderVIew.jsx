import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DangerousIcon from "@mui/icons-material/Dangerous";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import DataTable from "./DataTable";

const tableData = [
  {
    number: 1,
    state: "Delivered",
    customer: "Alice Johnson",
    estate: "Downtown",
    city: "New York",
    orderCost: "$240",
    shippingFee: "$12",
    display: "Visible",
    permissions: "Manage",
  },
  {
    number: 2,
    state: "Pending",
    customer: "Robert Davis",
    estate: "North Side",
    city: "Chicago",
    orderCost: "$185",
    shippingFee: "$10",
    display: "Visible",
    permissions: "Manage",
  },
  {
    number: 3,
    state: "Cancelled",
    customer: "Emily Wilson",
    estate: "Back Bay",
    city: "Boston",
    orderCost: "$320",
    shippingFee: "$14",
    display: "Hidden",
    permissions: "Manage",
  },
];
const tableHeader = [
  "#",
  "State",
  "Customer",
  "estate",
  "city",
  "order cost",
  "shipping fee",
  "display",
  "Permissions",
];

export default function TraderView() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            New Order
          </button>
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
      <AddOrder handleClose={handleClose} isOpen={open} />
    </div>
    // === content container ===
  );
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function AddOrder({ handleClose, isOpen }) {
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: "700", fontSize: "20px !important" }}
          id="customized-dialog-title"
        >
          Add New Order
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
            <div style={{ width: "100%" }}>
              <label htmlFor="DeliveryType">Delivery Type</label>
              <select name="DeliveryType" id="DeliveryType">
                <option value="OnBranch">On Branch</option>
                <option value="PickUp">PickUp</option>
              </select>
            </div>
            <hr />
            <p>Customer Data</p>
            <div>
              <label htmlFor="CustomerName">Customer Name</label>
              <input
                type="text"
                placeholder="Name"
                name="CustomerName"
                id="CustomerName"
              />
            </div>
            <div>
              <label htmlFor="Phone1">Phone</label>
              <input
                type="number"
                placeholder="01xxxxxxxxx"
                name="Phone1"
                id="Phone1"
              />
            </div>
            <div>
              <label htmlFor="Phone2">Phone2</label>
              <input
                type="number"
                placeholder="Optional"
                name="Phone2"
                id="Phone2"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                name="Email"
                id="Email"
              />
            </div>
            <div>
              <label htmlFor="Governorate">Governorate</label>
              <select name="Governorate" id="Governorate">
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            </div>
            <div>
              <label htmlFor="City">City</label>
              <select name="City" id="City">
                <option value="October6">October 6</option>
                <option value="Zamalek">Zamalek</option>
                <option value="BolaqEldakror">Bolaq Eldakror</option>
              </select>
            </div>
            <div>
              <label htmlFor="Street">Street</label>
              <input
                type="text"
                placeholder="Street"
                name="Street"
                id="Street"
              />
            </div>
            <div>
              <label htmlFor="Inside">Inside Street</label>
              <input type="checkBox" name="Inside" id="Inside" />
            </div>
            <div style={{ width: "calc(100% - 10px)" }}>
              <label htmlFor="Branch">Branch</label>
              <select name="Branch" id="Branch">
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            </div>
            <hr />
            <p>Products</p>
            <div className="table-container">
              <table border={1}>
                <tr>
                  <th>Product Name</th>
                  <th>Qantity</th>
                  <th>Weight (kg)</th>
                  <th>Delete</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="ProductName"
                    />
                  </td>
                  <td>
                    <input type="number" placeholder="1" name="Qantity" />
                  </td>
                  <td>
                    <input type="number" placeholder="0.5" name="Weight" />
                  </td>
                  <td>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="ProductName"
                    />
                  </td>
                  <td>
                    <input type="number" placeholder="1" name="Qantity" />
                  </td>
                  <td>
                    <input type="number" placeholder="0.5" name="Weight" />
                  </td>
                  <td>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              </table>
              <br />
              <button>Add new Product</button>
            </div>
            <hr />
            <p>Shipping details</p>
            <div>
              <label htmlFor="ShippingType">Shipping Type</label>
              <select name="ShippingType" id="ShippingType">
                <option value="NormalShipping">Normal Shipping</option>
                <option value="ShippingOn2Days">Shipping on 2 days</option>
                <option value="ShippingOn24">Shipping On 24h</option>
                <option value="ShippingOnBranch">Shipping on branch</option>
              </select>
            </div>
            <div>
              <label htmlFor="PayingType">Paying Type</label>
              <select name="PayingType" id="PayingType">
                <option value="CashOnDeliver">Cash on deliver</option>
                <option value="BankTransfer">Bank transfer</option>
                <option value="Card">Card</option>
              </select>
            </div>
            <div>
              <label htmlFor="OrderCost">Order Cost</label>
              <input
                type="text"
                placeholder="Order Cost"
                name="OrderCost"
                id="OrderCost"
              />
            </div>
            <div>
              <label htmlFor="TotalWeight">Total Weight</label>
              <input
                type="text"
                name="TotalWeight"
                id="TotalWeight"
                placeholder="Total Weight"
              />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="Notes">Notes</label>
              <textarea
                name="Notes"
                id="Notes"
                placeholder="Extra Notes"
              ></textarea>
            </div>
            <div className="trader-Data">
              <p>Trader details</p>
              <div className="dataContainer">
                <div>
                  <label htmlFor="TraderPhone">Trader Phone</label>
                  <input
                    type="text"
                    name="TraderPhone"
                    id="TraderPhone"
                    readOnly
                    value={"0123546554"}
                  />
                </div>
                <div>
                  <label htmlFor="TraderAddress">Trader Address</label>
                  <input
                    type="text"
                    name="TraderAddress"
                    id="TraderAddress"
                    readOnly
                    value={"giza"}
                  />
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            autoFocus
            onClick={handleClose}
          >
            Success
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
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
