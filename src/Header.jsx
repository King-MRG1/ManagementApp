import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      {/* loc and search */}
      <div className="header-search-area">
        <span>لوحة التحكم</span>
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
          className="search-input header-search-input"
        />
      </div>
      {/* loc and search */}
      {/* buttons and role */}
      <div className="header-actions">
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

        <hr className="header-divider" />
        {/* Profile */}
        <div className="header-profile">
          <h6 className="header-avatar">M</h6>
          <h4 className="header-profile-name">Mohamed Ramadan</h4>
          <h6 className="header-profile-role">Admin</h6>
        </div>
        {/* Profile */}
      </div>
      {/* buttons and role */}
    </div>
  );
}
