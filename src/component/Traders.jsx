import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import DataTable from "./DataTable";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const tableData = [
  {
    trader: "John Smith",
    store: "Fresh Market",
    city: "New York",
    receiveFee: "8%",
    rejectionPercentage: "2%",
    orders: 128,
    state: "Active",
    sendReport: "Enabled",
    permissions: "Manage",
  },
  {
    trader: "Sarah Lee",
    store: "Daily Goods",
    city: "Chicago",
    receiveFee: "7%",
    rejectionPercentage: "1%",
    orders: 96,
    state: "Active",
    sendReport: "Enabled",
    permissions: "Manage",
  },
  {
    trader: "Mike Brown",
    store: "City Supplies",
    city: "Boston",
    receiveFee: "9%",
    rejectionPercentage: "4%",
    orders: 74,
    state: "Inactive",
    sendReport: "Disabled",
    permissions: "Manage",
  },
];
const tableHeader = [
  "Trader",
  "store",
  "city",
  "receve fee",
  "rejection percentage",
  "n.orders",
  "State",
  "send report",
  "Permissions",
];

export default function Traders() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    // content container
    <div className="container">
      {/* Header */}
      <div className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Manage Traders</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            new trader
          </button>
        </div>
        {/*=== buttons === */}
      </div>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>Table of Trader</h2>
          <OutlinedInput
            placeholder="Search"
            id={`${1}-input`}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            aria-describedby={`${1}-helper-text`}
            inputProps={{
              "aria-label": "search",
            }}
            className="search-input"
          />
        </Box>
        {/* === table header === */}
        <Box className="table-section">
          <DataTable header={tableHeader} data={tableData} />
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
      <AddTrader handleClose={handleClose} isOpen={open} />
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
function AddTrader({ handleClose, isOpen }) {
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
          Add New Trader
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
            <div>
              <label htmlFor="TraderName">Trader Name</label>
              <input
                type="text"
                placeholder="Name"
                name="TraderName"
                id="TraderName"
              />
            </div>
            <div>
              <label htmlFor="StoreName">Store Name</label>
              <input
                type="text"
                placeholder="Name"
                name="StoreName"
                id="StoreName"
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
              <label htmlFor="Password">Password</label>
              <input type="password" name="Password" id="Password" />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                placeholder="Optional"
                name="Phone"
                id="Phone"
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
            <div style={{ width: "100%" }}>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="Address"
                id="Address"
              />
            </div>
            <hr />
            <p>Pricing</p>
            <div>
              <label htmlFor="ReciveFee">Recive Fee</label>
              <input
                type="number"
                name="ReciveFee"
                id="ReciveFee"
                placeholder="0"
              />
            </div>
            <div>
              <label htmlFor="RejectionPercentage">Rejection Percentage</label>
              <input
                type="number"
                name="RejectionPercentage"
                id="RejectionPercentage"
                placeholder="20"
              />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="SpicialPricing">Spicial Pricing</label>
              <input
                type="checkBox"
                name="SpicialPricing"
                id="SpicialPricing"
              />
            </div>
            <div className="show modalForm" style={{ width: "100%" }}>
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
              <div style={{ width: "100%" }}>
                <label htmlFor="SpicalPrice">Spical Price</label>
                <input
                  type="number"
                  name="SpicalPrice"
                  id="SpicalPrice"
                  placeholder="40"
                />
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
