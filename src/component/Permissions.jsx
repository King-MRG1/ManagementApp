import Typography from "@mui/material/Typography";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../style/Permissions.css";
import { useState } from "react";
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "hsl(120, 4%, 78%)",
    color: "black",
    border: "1px solid black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid black",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
export default function Permissions() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      {/* Header */}
      <div className="control-panel-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Manage Permissions</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange" onClick={handleClickOpen}>
            new Role
          </button>
        </div>
        {/*=== buttons === */}
      </div>
      {/*==== Header === */}

      {/* States */}
      <div className="control-panel-stats">
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
            <HourglassEmptyIcon />
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
        <div className="card three">
          <div className="card-icon">
            <LocalShippingIcon />
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
      {/*=== States === */}

      <Box className="panel">
        {/* table header */}
        <Box className="table-header">
          <h2>Table of Employees</h2>
        </Box>
        {/* === table header === */}
        <Box className="table-section">
          <PermissionsTable />
        </Box>
        {/* pagenation */}
        <Box className="table-footer">
          <button>save changes</button>
        </Box>
      </Box>
      <AddRole handleClose={handleClose} isOpen={open} />
    </div>
  );
  /* === container === */
}
function PermissionsTable() {
  // Data for pages/operations
  const pages = [
    "Order",
    "Trader",
    "Delivery",
    "Finance Report",
    "settings",
    "Permissions",
  ];

  // Data for roles
  const roles = ["Admin", "Sales", "Accountant"];

  // Permissions structure
  const operations = ["Display", "Add", "Edit", "Delete"];

  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table">
        <TableHead className="table-head-background">
          {/* First header row */}
          <TableRow>
            <StyledTableCell align="right">OP/Page</StyledTableCell>
            {roles.map((role) => (
              <StyledTableCell key={role} colSpan={4} align="center">
                {role}
              </StyledTableCell>
            ))}
          </TableRow>

          <TableRow>
            <StyledTableCell align="right">--</StyledTableCell>
            {roles.map((role) =>
              operations.map((op) => (
                <StyledTableCell key={`${role}-${op}`} align="center">
                  {op}
                </StyledTableCell>
              )),
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {pages.map((page) => (
            <StyledTableRow key={page}>
              <StyledTableCell align="right">{page}</StyledTableCell>
              {roles.map((role) =>
                operations.map((op) => (
                  <StyledTableCell key={`${page}-${role}-${op}`} align="center">
                    <input type="checkbox" className="table-input" />
                  </StyledTableCell>
                )),
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
function AddRole({ handleClose, isOpen }) {
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
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
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
