import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import DataTable from "./DataTable";

const tableHeader = [
  "#",
  "City name",
  "Shipping fee",
  "Pick up fee",
  "State",
  "Permissions",
];
const tableData = [
  {
    number: 1,
    cityName: "New York",
    shippingFee: "$12",
    pickUpFee: "$5",
    state: "Active",
    permissions: "Manage",
  },
  {
    number: 2,
    cityName: "Chicago",
    shippingFee: "$10",
    pickUpFee: "$4",
    state: "Active",
    permissions: "Manage",
  },
  {
    number: 3,
    cityName: "Boston",
    shippingFee: "$14",
    pickUpFee: "$6",
    state: "Inactive",
    permissions: "Manage",
  },
];

export default function Cities() {
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
  return (
    // content container
    <div className="container">
      {/* Header */}
      <div className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Manage Cities</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            New Cities
          </button>
        </div>
        {/*=== buttons === */}
      </div>
      {/* === Header === */}
      {/* body */}
      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>Table of Cities</h2>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
              className="search-input search-input-city"
            />
          </Box>
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
      <AddCity handleClose={handleClose} isOpen={open} />
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
function AddCity({ handleClose, isOpen }) {
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
          Add New City
        </DialogTitle>
        <DialogContent dividers>
          <form action="" className="modalForm">
            <div style={{ width: "100%" }}>
              <select name="Governorate" id="Governorate">
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="City">City</label>
              <input
                type="text"
                placeholder="New Capital"
                name="City"
                id="City"
              />
            </div>
            <div>
              <label htmlFor="ShippingFees">Shipping Fees</label>
              <input
                type="number"
                placeholder="60"
                name="ShippingFee"
                id="ShippingFee"
              />
            </div>
            <div>
              <label htmlFor="PickupFee">Pickup Fee</label>
              <input
                type="number"
                placeholder="40"
                name="PickupFee"
                id="PickupFee"
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
            Save City
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
