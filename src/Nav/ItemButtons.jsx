import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
//icons
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

export default function ItemButtons() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const sx = {
    "&.Mui-selected": {
      backgroundColor: "#4b2e23",
      color: "white",
      border: "1px solid #a1340d",
      borderRadius: "10px",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#4b2e23",
    },
  };
  const iconStyle = {
    color: "white",
  };
  return (
    <Box
      sx={{
        width: "97%",
        height: "67%",
        color: "white",
        marginTop: "10px",
        padding: "10px",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h5" style={{ textAlign: "right" }}>
        الرئيسية
      </Typography>
      <List component="nav" aria-label="main">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          sx={sx}
        >
          <ListItemIcon>
            <TimelineIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="لوحة التحكم"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <Typography variant="h5" style={{ textAlign: "right" }}>
        إدارة الطلبات
      </Typography>
      <List>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={sx}
        >
          <ListItemIcon>
            <InventoryIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="الطلبات"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <Typography variant="h5" style={{ textAlign: "right" }}>
        إدارة المستخدمين
      </Typography>
      <List>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          sx={sx}
        >
          <ListItemIcon>
            <GroupsIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="الموظفين"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          sx={sx}
        >
          <ListItemIcon>
            <StoreIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="التجار"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          sx={sx}
        >
          <ListItemIcon>
            <DeliveryDiningIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="المندوبين"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <Typography variant="h5" style={{ textAlign: "right" }}>
        النظام
      </Typography>
      <List>
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
          sx={sx}
        >
          <ListItemIcon>
            <ApartmentIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="المدن"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
          sx={sx}
        >
          <ListItemIcon>
            <MapIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="المناطق والأسعار"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
          sx={sx}
        >
          <ListItemIcon>
            <StoreIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="واجهة التاجر"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
          sx={sx}
        >
          <ListItemIcon>
            <SettingsIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="الإعدادات"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}
          sx={sx}
        >
          <ListItemIcon>
            <SecurityIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="الصلاحيات"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
      </List>
      <Divider />
      <Typography variant="h5" style={{ textAlign: "right" }}>
        المالية
      </Typography>
      <List>
        <ListItemButton
          selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 10)}
          sx={sx}
        >
          <ListItemIcon>
            <EqualizerIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="التقارير المالية"
            sx={{
              textAlign: "right",
              "& .MuiListItemText-primary": {
                lineHeight: 1.2,
              },
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
