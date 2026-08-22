import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  return (
    <div
      style={{
        background: "white",
        height: "99%",
        borderBottom: "1px white solid",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
      }}
    >
      {/* loc and search */}
      <div>
        <span style={{ margin: "10px" }}>لوحة التحكم</span>
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
          sx={{
            m: 1,
            width: 225,
            height: "40px",
            transition: "width 0.25s",
            borderRadius: "30px",

            "&.Mui-focused": {
              width: 325,
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bdbdbd",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#a50909",
              borderWidth: 2,
            },

            "& .MuiInputAdornment-root": {
              position: "absolute",
              insetInlineEnd: 12,
              margin: 0,
            },

            "& .MuiOutlinedInput-input": {
              paddingInlineEnd: "36px",
              transition: "0.5s",
            },

            "&.Mui-focused .MuiOutlinedInput-input": {
              color: "#1976d2",
            },
          }}
        />
      </div>
      {/* loc and search */}
      {/* buttons and role */}
      <div
        style={{
          display: "flex",
        }}
      >
        {/* buttons */}
        <div>
          <button className="header-button">
            <NotificationsIcon />
          </button>
          <button className="header-button">
            <MessageIcon />
          </button>
        </div>
        {/* buttons */}

        <hr style={{ height: "40px" }} />
        {/* Profile */}
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `
          "avater name"
          "avater role"
        `,
            margin: " 10px",
            height: "40px",
            width: "200px",
          }}
        >
          <h6
            style={{
              background: "orange",
              width: "40px",
              height: "40px",
              margin: "0",
              border: "none",
              borderRadius: "50%",
              alignContent: "center",
              color: "white",
              gridArea: "avater",
            }}
          >
            M
          </h6>
          <h4
            style={{
              gridArea: "name",
              margin: "0 5px",
              textAlign: "right",
            }}
          >
            Mohamed Ramadan
          </h4>
          <h6 style={{ gridArea: "role", margin: "0 5px", textAlign: "right" }}>
            Admin
          </h6>
        </div>
        {/* Profile */}
      </div>
      {/* buttons and role */}
    </div>
  );
}
