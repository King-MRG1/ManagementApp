//mui
import Typography from "@mui/material/Typography";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DangerousIcon from "@mui/icons-material/Dangerous";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

import DataTable from "./DataTable";
import "../style/ControlPanal.css";
import { useState } from "react";
import AddNewOrder from "./AddNewOrder";

//table data
const tableHeader = ["OrderID", "Trader", "Price", "State"];
const tableData = [
  {
    orderId: "ORD-1001",
    trader: "John Smith",
    price: "$240",
    state: "Delivered",
  },
  { orderId: "ORD-1002", trader: "Sarah Lee", price: "$185", state: "Pending" },
  {
    orderId: "ORD-1003",
    trader: "Mike Brown",
    price: "$320",
    state: "Delivered",
  },
  {
    orderId: "ORD-1004",
    trader: "Emma Davis",
    price: "$95",
    state: "Cancelled",
  },
];

//charts data
const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
export default function ControlPanal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* container */}
      <div className="container">
        {/* Header */}
        <div className="control-panel-header">
          {/* name & date */}
          <div className="TD">
            <Typography variant="p">control panal</Typography>
            <Typography variant="p" className="page-date">
              friday 21 aug 2026
            </Typography>
          </div>
          {/* === name & date === */}
          {/* buttons */}
          <div>
            <button className="panalBtn action-white">Update</button>
            <button
              className="panalBtn action-orange"
              onClick={handleClickOpen}
            >
              new order
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
          <div className="card six">
            <div className="card-icon">
              <StorefrontIcon />
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

        {/* order preformance & graph */}
        <div className="chart-grid">
          {/* preformance */}
          <div className="dashboard-panel orders-panel">
            {/* Header */}
            <div className="table-heading">
              <p className="table-heading-title">
                Order Preformance - last 7 days
              </p>
            </div>
            {/*=== Header === */}

            <Box sx={{ width: "100%", height: 300 }}>
              <LineChart
                series={[
                  { data: pData, label: "pv" },
                  { data: uData, label: "uv" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
                yAxis={[{ width: 50 }]}
                margin={{ right: 24 }}
              />
            </Box>
          </div>
          {/*=== preformance === */}
          {/* graph */}
          <div className="dashboard-panel graph-panel">
            {/* Header */}
            <div className="table-heading table-heading-compact">
              <p className="table-heading-title">Pie Chart</p>
            </div>
            {/* === header === */}
            <Box sx={{ width: "100%", height: 300, placeContent: "center" }}>
              <PieChart
                series={[{ data, innerRadius: 80 }]}
                width={200}
                height={200}
              ></PieChart>
            </Box>
          </div>
          {/*=== graph === */}
        </div>
        {/*=== order proformance & graph === */}

        {/* last orders and actions */}
        <div className="activity-grid">
          {/* last orders */}
          <div className="dashboard-panel last-orders-panel">
            {/* header */}
            <div className="table-heading">
              <h2>Last Orders</h2>
              <Button variant="text">{"Show More -->"}</Button>
            </div>
            {/*=== header ===*/}
            {/* Table */}
            <div className="table-height">
              <DataTable header={tableHeader} data={tableData} />
            </div>
          </div>
          {/* === last orders === */}
          {/* last actions */}
          <div className="activity-panel actions-panel">
            <div className="activity-header">
              <h2>Last Actions</h2>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">icon</div>
                <div className="activity-content">
                  <p>new order</p>
                  <span>description</span>
                </div>
                <span>time</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon">icon</div>
                <div className="activity-content">
                  <p>new order</p>
                  <span>description</span>
                </div>
                <span>time</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon">icon</div>
                <div className="activity-content">
                  <p>new order</p>
                  <span>description</span>
                </div>
                <span>time</span>
              </div>
            </div>
          </div>
          {/* === last actions === */}
        </div>
        {/*=== last orders and actions === */}
        <AddNewOrder handleClose={handleClose} isOpen={open} />
      </div>
      {/* === container === */}
    </>
  );
}
