import Typography from "@mui/material/Typography";
import "./Settings.css";
export default function Settings() {
  return (
    // content container
    <div className="container">
      {/* Header */}
      <div className="page-header">
        {/* name & date */}
        <div className="TD">
          <Typography variant="p">Settings</Typography>
          <Typography variant="p" className="page-date">
            friday 21 aug 2026
          </Typography>
        </div>
        {/* === name & date === */}
      </div>
      {/* === Header === */}
      {/* settings cards */}
      <div className="settingsPanal">
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
        <SettingsCard
          title={"shipping type"}
          description={"Manage shipping types"}
        />
      </div>
      {/* === settings cards === */}
    </div>
    // === content container ===
  );
}
function SettingsCard({ title, description }) {
  return (
    <div className="settingCard">
      <Typography variant="h4">{title}</Typography>
      <Typography variant="p">{description} </Typography>
    </div>
  );
}
