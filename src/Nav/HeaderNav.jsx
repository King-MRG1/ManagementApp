import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
export default function HeaderNav() {
  return (
    <>
      <div
        style={{
          display: "grid",
          color: "white",
          gridTemplateColumns: "auto 1fr auto",
          gridTemplateRows: "auto auto",
          gridTemplateAreas: `
          "right top left"
          "right bottom left"
        `,
          gap: "10px",
          alignItems: "stretch",
          paddingBottom: "10px",
          borderBottom: "1px solid white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            gridArea: "right",
            background: "red",
            height: "50px",
            width: "50px",
            borderRadius: "20px",
            alignContent: "center",
            fontWeight: "700",
          }}
        >
          AR
        </Typography>

        <Typography
          variant="h5"
          style={{ textAlign: "right", fontWeight: "800" }}
        >
          AL-ARABI
        </Typography>

        <button className="menu button">
          <MenuIcon />
        </button>

        <Typography variant="h6" style={{ textAlign: "right" }}>
          نظام الشحنات
        </Typography>
      </div>
    </>
  );
}
