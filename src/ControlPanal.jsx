//mui
import Typography from "@mui/material/Typography";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DangerousIcon from "@mui/icons-material/Dangerous";
import StorefrontIcon from "@mui/icons-material/Storefront";
//charts
import MyAreaChart from "./AreaChart";
import MyPieChart from "./PieChart";

export default function ControlPanal() {
  return (
    <>
      {/* container */}
      <div className="control-container">
        {/* name & date & buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* name & date */}
          <div>
            <Typography variant="p" className="TD">
              control panal
            </Typography>
            <Typography
              variant="p"
              className="TD"
              style={{ fontSize: "15px", color: "gray" }}
            >
              friday 21 aug 2026
            </Typography>
          </div>
          {/* === name & date === */}
          {/* buttons */}
          <div>
            <button
              className="panalBtn"
              style={{ background: "white", color: "black" }}
            >
              Update
            </button>
            <button className="panalBtn" style={{ background: "orange" }}>
              new order
            </button>
          </div>
          {/*=== buttons === */}
        </div>
        {/*==== name & date & buttons === */}
        {/* States */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="card one">
            <div className="card-icon">
              <InventoryIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
          <div className="card two">
            <div className="card-icon">
              <HourglassEmptyIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
          <div className="card three">
            <div className="card-icon">
              <LocalShippingIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
          <div className="card four">
            <div className="card-icon">
              <CheckCircleRoundedIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
          <div className="card five">
            <div className="card-icon">
              <DangerousIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
          <div className="card six">
            <div className="card-icon">
              <StorefrontIcon />
            </div>

            <div style={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: "15px" }}
              >
                New orders
              </Typography>
              <Typography
                variant="h5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                11
              </Typography>
              <Typography variant="h5" style={{ fontSize: "12px" }}>
                No change
              </Typography>
            </div>
          </div>
        </div>
        {/*=== States === */}
        {/* order preformance & graph */}
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `"orders orders orders graph"`,
          }}
        >
          {/* preformance */}
          <div
            style={{
              background: "white",
              gridArea: "orders",
              margin: "10px",
              border: "none",
              borderRadius: "10px",
              boxShadow: "",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                alignItems: "center",
                background: "#dcd9d9",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Order Preformance - last 7 days
              </p>
              <div className="graphHeadLine">
                <p>delivered</p>
                <p>UnDelivered</p>
              </div>
            </div>
            {/*=== Header === */}

            <div
              style={{
                background: "white",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                height: "330px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MyAreaChart />
            </div>
          </div>

          {/*=== preformance === */}
          {/* graph */}
          <div
            style={{
              background: "white",
              gridArea: "graph",
              margin: "10px",
              border: "none",
              borderRadius: "10px",
              boxShadow: "",
            }}
          >
            {/* Header */}
            <div className="headerPieChart">
              <p style={{ fontSize: "20px", fontWeight: "500" }}>Pie Chart</p>
            </div>
            {/* === header === */}
            <div
              style={{
                background: "white",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                height: "330px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MyPieChart />
            </div>
          </div>
          {/*=== graph === */}
        </div>
        {/*=== order proformance & graph === */}

        {/* last orders and actions */}
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `"la la lo lo"`,
          }}
        >
          {/* last orders */}
          <div style={{ background: "#4c4ec4", gridArea: "lo" }}>
            <h2>lo</h2>
          </div>
          {/* === last orders === */}
          {/* last actions */}
          <div style={{ background: "#229398", gridArea: "la" }}>
            <h2>la</h2>
          </div>
          {/* === last actions === */}
        </div>
        {/*=== last orders and actions === */}
      </div>
      {/* === container === */}
    </>
  );
}
