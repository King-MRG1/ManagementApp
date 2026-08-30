//mui
import Typography from "@mui/material/Typography";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DangerousIcon from "@mui/icons-material/Dangerous";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
//charts
import MyAreaChart from "./AreaChart";
import MyPieChart from "./PieChart";
import "./ControlPanal.css";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "hsl(120, 4%, 78%)",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function ControlPanal() {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ];
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
            <button className="panalBtn action-white">
              Update
            </button>
            <button className="panalBtn action-orange">new order</button>
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
              <div className="graphHeadLine">
                <p>delivered</p>
                <p>UnDelivered</p>
              </div>
            </div>
            {/*=== Header === */}

            <div className="chart-body">
              <MyAreaChart />
            </div>
          </div>
          {/*=== preformance === */}
          {/* graph */}
          <div className="dashboard-panel graph-panel">
            {/* Header */}
            <div className="table-heading table-heading-compact">
              <p className="table-heading-title">Pie Chart</p>
            </div>
            {/* === header === */}
            <div className="chart-body">
              <MyPieChart />
            </div>
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
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">OrderID</StyledTableCell>
                      <StyledTableCell align="right">Trader</StyledTableCell>
                      <StyledTableCell align="right">Price</StyledTableCell>
                      <StyledTableCell align="right">State</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell align="right">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
      </div>
      {/* === container === */}
    </>
  );
}
