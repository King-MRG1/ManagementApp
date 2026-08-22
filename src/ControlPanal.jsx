import Typography from "@mui/material/Typography";
import InventoryIcon from "@mui/icons-material/Inventory";
export default function ControlPanal() {
  let bStyle = {
    margin: "10px",
    height: "40px",
    border: "none",
    borderRadius: "10px",
    padding: "10px",
    fontWeight: "600",
  };
  let pStyle = {
    padding: "5px",
    fontSize: "25px",
    fontWeight: "600",
    display: "block",
  };
  return (
    <>
      {/* container */}
      <div className="control-container">
        {/* name & date & buttons */}
        <div
          style={{
            // background: "lime",
            gridArea: "head",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* name & date */}
          <div>
            <Typography variant="p" style={pStyle}>
              control panal
            </Typography>
            <Typography
              variant="p"
              style={{ ...pStyle, fontSize: "15px", color: "gray" }}
            >
              friday 21 aug 2026
            </Typography>
          </div>
          {/* === name & date === */}
          {/* buttons */}
          <div>
            <button style={{ ...bStyle, background: "white", color: "black" }}>
              Update
            </button>
            <button style={{ ...bStyle, background: "orange" }}>
              new order
            </button>
          </div>
          {/*=== buttons === */}
        </div>
        {/*==== name & date & buttons === */}
        {/* States */}
        <div
          style={{
            background: "#b100ff",
            gridArea: "state",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="card 1">
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
          <div className="card 1">
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
          <div className="card 1">
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
          <div className="card 1">
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
          <div className="card 1">
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
          <div className="card 1">
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
        </div>
        {/*=== States === */}
        {/* order preformance & graph */}
        <div
          style={{
            background: "gray",
            gridArea: "og",
            display: "grid",
            gridTemplateAreas: `"orders orders orders graph"`,
          }}
        >
          {/* preformance */}
          <div style={{ background: "#cb7272", gridArea: "orders" }}>
            <h2>order</h2>
          </div>
          {/*=== preformance === */}
          {/* graph */}
          <div style={{ background: "#b472cb", gridArea: "graph" }}>
            <h2>graph</h2>
          </div>
          {/*=== graph === */}
        </div>
        {/*=== order proformance & graph === */}
        {/* last orders and actions */}
        <div
          style={{
            gridArea: "loa",
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
