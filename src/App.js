import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeToggle = (isDarkMode) => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <DarkModeToggle onToggle={handleThemeToggle} />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
