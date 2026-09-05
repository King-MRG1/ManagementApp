import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DataTable from "./DataTable";
import { useState } from "react";

const tableHeader = [
  "Employee",
  "Email",
  "Role",
  "Branch",
  "Bank",
  "State",
  "Permissions",
];
const tableData = [
  {
    employee: "John Smith",
    email: "john.smith@example.com",
    role: "Manager",
    branch: "Central",
    bank: "First Bank",
    state: "Active",
    permissions: "Manage",
  },
  {
    employee: "Sarah Lee",
    email: "sarah.lee@example.com",
    role: "Accountant",
    branch: "North",
    bank: "City Bank",
    state: "Active",
    permissions: "Manage",
  },
  {
    employee: "Mike Brown",
    email: "mike.brown@example.com",
    role: "Dispatcher",
    branch: "South",
    bank: "Union Bank",
    state: "Inactive",
    permissions: "Manage",
  },
];

export default function Employees() {
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
          <Typography variant="p">Manage Employees</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            new employee
          </button>
        </div>
        {/*=== buttons === */}
      </div>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>Table of Employees</h2>
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
      <AddEmployee handleClose={handleClose} isOpen={open} />
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
function AddEmployee({ handleClose, isOpen }) {
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
          Add New Employee
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
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
              <label htmlFor="Branch">Branch</label>
              <select name="Branch" id="Branch">
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            </div>
            <div>
              <label htmlFor="Bank">Bank</label>
              <select name="Bank" id="Bank">
                <option value="October6">October 6</option>
                <option value="Zamalek">Zamalek</option>
                <option value="BolaqEldakror">Bolaq Eldakror</option>
              </select>
            </div>
            <div>
              <label htmlFor="Role">Role</label>
              <select name="Role" id="Role">
                <option value="NormalShipping">Normal Shipping</option>
                <option value="ShippingOn2Days">Shipping on 2 days</option>
                <option value="ShippingOn24">Shipping On 24h</option>
                <option value="ShippingOnBranch">Shipping on branch</option>
              </select>
            </div>
            <div>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="Address"
                id="Address"
              />
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
