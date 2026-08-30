import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapIcon from "@mui/icons-material/Map";
import SecurityIcon from "@mui/icons-material/Security";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <HeaderNav />
      <ItemButtons />
      <FooterNav />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="nav-header">
      <Typography variant="h6" className="nav-logo">
        AR
      </Typography>
      <Typography variant="h5" className="nav-brand">
        AL-ARABI
      </Typography>
      <button className="menu button">
        <MenuIcon />
      </button>
      <Typography variant="h6" className="nav-subtitle">
        نظام الشحنات
      </Typography>
    </div>
  );
}

function ItemButtons() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const item = (index, label, Icon) => (
    <ListItemButton
      key={index}
      className="nav-item"
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
    >
      <ListItemIcon>
        <Icon className="nav-icon" />
      </ListItemIcon>
      <ListItemText primary={label} className="nav-item-text" />
    </ListItemButton>
  );

  return (
    <Box className="nav-menu-box">
      <Typography variant="h5" className="nav-section-title">
        الرئيسية
      </Typography>
      <List component="nav" aria-label="main">
        {item(0, "لوحة التحكم", TimelineIcon)}
      </List>
      <Divider />
      <Typography variant="h5" className="nav-section-title">
        إدارة الطلبات
      </Typography>
      <List>{item(1, "الطلبات", InventoryIcon)}</List>
      <Divider />
      <Typography variant="h5" className="nav-section-title">
        إدارة المستخدمين
      </Typography>
      <List>
        {item(2, "الموظفين", GroupsIcon)}
        {item(3, "التجار", StoreIcon)}
        {item(4, "المندوبين", DeliveryDiningIcon)}
      </List>
      <Divider />
      <Typography variant="h5" className="nav-section-title">
        النظام
      </Typography>
      <List>
        {item(5, "المدن", ApartmentIcon)}
        {item(6, "المناطق والأسعار", MapIcon)}
        {item(7, "واجهة التاجر", StoreIcon)}
        {item(8, "الإعدادات", SettingsIcon)}
        {item(9, "الصلاحيات", SecurityIcon)}
      </List>
      <Divider />
      <Typography variant="h5" className="nav-section-title">
        المالية
      </Typography>
      <List>{item(10, "التقارير المالية", EqualizerIcon)}</List>
    </Box>
  );
}

function FooterNav() {
  const [role, setRole] = useState(1);
  return (
    <div className="nav-footer">
      <Typography variant="h6" className="nav-section-title">
        نوع الحساب
      </Typography>
      <Select
        aria-describedby="0-helper-text"
        value={role}
        onChange={(event) => setRole(event.target.value)}
        className="nav-select"
        IconComponent={() => null}
      >
        <MenuItem value={1}>مدير النظام</MenuItem>
        <MenuItem value={2}>التاجر</MenuItem>
        <MenuItem value={3}>المندوب</MenuItem>
      </Select>
      <button className="logout button">تسجيل خروج</button>
    </div>
  );
}
