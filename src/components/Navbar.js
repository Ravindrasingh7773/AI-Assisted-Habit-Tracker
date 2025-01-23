import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">AI Habit Tracker</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
