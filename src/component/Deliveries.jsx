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
    delivery: "DEL-1001",
    branch: "Central",
    factoryPercentage: "12%",
    orders: 42,
    amount: "$4,280",
    commission: "$428",
    state: "Active",
    permissions: "Manage",
  },
  {
    delivery: "DEL-1002",
    branch: "North",
    factoryPercentage: "10%",
    orders: 35,
    amount: "$3,640",
    commission: "$364",
    state: "Active",
    permissions: "Manage",
  },
  {
    delivery: "DEL-1003",
    branch: "South",
    factoryPercentage: "15%",
    orders: 51,
    amount: "$5,190",
    commission: "$519",
    state: "Inactive",
    permissions: "Manage",
  },
];
const tableHeader = [
  "Delivery",
  "Branch",
  "factory percentage",
  "Orders",
  "Amount",
  "commission",
  "state",
  "Permissions",
];

export default function Deliveries() {
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
          <Typography variant="p">Manage Deliveries</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            new Delivery
          </button>
        </div>
        {/*=== buttons === */}
      </div>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>Table of Deliveries</h2>
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
      <AddDelivery handleClose={handleClose} isOpen={open} />
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
function AddDelivery({ handleClose, isOpen }) {
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
          Add New Delivery
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
            <div>
              <label htmlFor="FullName">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="FullName"
                id="FullName"
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
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                placeholder="0112165465"
                name="Phone"
                id="Phone"
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input type="password" name="Password" id="Password" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "100%",
              }}
            >
              <label htmlFor="ServicedBranches">
                Serviced Branches(can choose more than one)
              </label>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "6px",
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <label htmlFor="Cairo" className="label-checkbox-branch">
                  <input
                    type="checkBox"
                    name="CairoBranch"
                    className="checkbox-branch"
                    id="Cairo"
                  />
                  Cairo
                </label>
                <label htmlFor="Giza" className="label-checkbox-branch">
                  <input
                    type="checkBox"
                    name="GizaBranches"
                    className="checkbox-branch"
                    id="Giza"
                  />
                  Giza
                </label>
                <label htmlFor="Alexandria" className="label-checkbox-branch">
                  <input
                    type="checkBox"
                    name="AlexandriaBranch"
                    className="checkbox-branch"
                    id="Alexandria"
                  />
                  Alexandria
                </label>
                <label htmlFor="Elfayom" className="label-checkbox-branch">
                  <input
                    type="checkBox"
                    name="ElfayomBranch"
                    className="checkbox-branch"
                    id="Elfayom"
                  />
                  Elfayom
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="CompanyPercentage">Company Percentage</label>
              <input
                type="number"
                name="CompanyPercentage"
                id="CompanyPercentage"
                placeholder="60"
              />
            </div>
            <div>
              <label htmlFor="DeliveryPercentage">Delivery Percentage</label>
              <input
                type="text"
                name="DeliveryPercentage"
                id="DeliveryPercentage"
                placeholder="40"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="ComissionType">Comission Type</label>
              <select name="ComissionType" id="ComissionType">
                <option value="October6">October 6</option>
                <option value="Zamalek">Zamalek</option>
              </select>
            </div>
            <div>
              <label htmlFor="VicaleNumber">Vicale Number</label>
              <input
                type="text"
                placeholder="212saw"
                name="VicaleNumber"
                id="VicaleNumber"
              />
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className="modal-submit"
            variant="contained"
            autoFocus
            onClick={handleClose}
          >
            Add Delivery
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
