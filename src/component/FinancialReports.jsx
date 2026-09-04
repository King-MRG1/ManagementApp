import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import DataTable from "./DataTable";
import "../style/FinancialReport.css";

// table data
const tableHeader = [
  "delivery",
  "Branch",
  "Done Orders",
  "Total Amount",
  "comission",
  "Net Profit",
  "Action",
];
const tableData = [
  {
    delivery: "DEL-1001",
    branch: "Central",
    doneOrders: 42,
    totalAmount: "$4,280",
    commission: "$428",
    netProfit: "$3,852",
  },
  {
    delivery: "DEL-1002",
    netProfit: "$3,276",
  },
  {
    delivery: "DEL-1003",
    branch: "South",
    doneOrders: 51,
    totalAmount: "$5,190",
    commission: "$519",
    netProfit: "$4,671",
  },
  {
    delivery: "DEL-1004",
    branch: "East",
    doneOrders: 28,
    totalAmount: "$2,870",
    commission: "$287",
    netProfit: "$2,583",
  },
  {
    delivery: "DEL-1005",
    branch: "West",
    doneOrders: 46,
    totalAmount: "$4,710",
    commission: "$471",
    netProfit: "$4,239",
  },
];
// chart data
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 5200, 6100, 4700, 5600, 6800, 7200,
  4900, 8300, 7600, 6400, 9100, 8700, 5900, 4500, 7100, 9500, 6200, 7800, 5400,
  6900, 8800, 7300, 5100,
];
const xLabels = Array.from({ length: 30 }, (_, index) => index + 1);

export default function FinancialReport() {
  return (
    <div className="container">
      {/* Header */}
      <Box className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Financial Report</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
        {/* buttons */}
        <div>
          <button className="panalBtn action-orange">PDF</button>
          <button className="panalBtn action-green">Excel</button>
        </div>
        {/*=== buttons === */}
      </Box>
      {/* === Header === */}
      {/* body */}
      <Box>
        {/* Filter settings */}
        <Box className="panal" sx={{ backgroundColor: "#f1e8df" }}>
          {/* Header */}
          <Box
            sx={{
              borderBottom: "1px solid #e2d3c7",
              textAlign: "right",
              padding: "20px",
            }}
          >
            <h2>Report Filter</h2>
          </Box>
          {/* === Header === */}
          <Box className="report-filter">
            <div className="input-group">
              <label>Start Date</label>
              <input type="date" name="startDate" className="filter-select" />
            </div>
            <div className="input-group">
              <label>End Date</label>
              <input type="date" name="endDate" className="filter-select" />
            </div>

            <div className="input-group">
              <label htmlFor="">Age</label>
              <select
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: `${1}-select`,
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="">Age</label>
              <select
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: `${1}-select`,
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="">Age</label>
              <select
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: `${1}-select`,
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </select>
            </div>

            <input
              type="submit"
              value="search"
              className="filter-select submit-filter"
            />
          </Box>
        </Box>
        {/* === Filter settings === */}
        {/* Cards */}
        <Box className="cards-panal panal">
          <Box className="financial-card" sx={{ background: "#1565c0" }}>
            <p>Total</p>
            <h2>num</h2>
            <p>details</p>
          </Box>
          <Box className="financial-card" sx={{ background: "#4b9560" }}>
            <p>Total</p>
            <h2>num</h2>
            <p>details</p>
          </Box>
          <Box className="financial-card" sx={{ background: "#00a6a6" }}>
            <p>Total</p>
            <h2>num</h2>
            <p>details</p>
          </Box>
          <Box className="financial-card" sx={{ background: "#d64545" }}>
            <p>Total</p>
            <h2>num</h2>
            <p>details</p>
          </Box>
        </Box>
        {/*=== Cards === */}
        {/* Chart */}
        <Box className="panal" sx={{ backgroundColor: "#e8eef5" }}>
          {/* Header */}
          <Box
            sx={{
              borderBottom: "1px solid #d7e0ea",
              textAlign: "right",
              padding: "20px",
            }}
          >
            <h2>Revneu last 30 days</h2>
          </Box>
          {/* === Header === */}
          <Box sx={{ width: "100%", height: 300 }}>
            <BarChart
              borderRadius={10}
              series={[{ data: pData, label: "pv", id: "pvId" }]}
              xAxis={[{ data: xLabels, height: 28 }]}
              yAxis={[{ width: 50 }]}
            />
          </Box>
        </Box>
        {/* === Chart === */}
        {/* Table */}
        <Box className="panal" sx={{ backgroundColor: "#e8eef5" }}>
          {/* Header */}
          <Box
            sx={{
              borderBottom: "1px solid #d7e0ea",
              textAlign: "right",
              padding: "20px",
            }}
          >
            <h2>Delegates indebtedness</h2>
          </Box>
          {/* === Header === */}
          <Box>
            <DataTable header={tableHeader} data={tableData} />
          </Box>
        </Box>
        {/* === Table === */}
      </Box>
      {/*=== body === */}
    </div>
  );
}
