import React, { useState } from "react";
import { Switch, Typography } from "@mui/material";

const DarkModeToggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
      <Typography>Dark Mode</Typography>
      <Switch checked={isDarkMode} onChange={handleToggle} />
    </div>
  );
};

export default DarkModeToggle;
