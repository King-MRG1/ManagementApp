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
