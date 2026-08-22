import { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
export default function FooterNav() {
  const [role, setRole] = useState(1);

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <div
        style={{
          borderTop: "1px white solid",
          height: "100%",
          marginTop: "10px",
          paddingRight: "10px",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" style={{ textAlign: "right" }}>
          نوع الحساب
        </Typography>
        <Select
          aria-describedby={`0-helper-text`}
          value={role}
          onChange={handleChange}
          style={{
            fontSize: "20px",
            textAlign: "right",
            background: "#434141",
            width: "95%",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
          IconComponent={() => null}
        >
          <MenuItem value={1}>مدير النظام</MenuItem>
          <MenuItem value={2}>التاجر</MenuItem>
          <MenuItem value={3}>المندوب</MenuItem>
        </Select>
        <button className="logout button">تسجيل خروج</button>
      </div>
    </>
  );
}
