import React from "react";
import { Grid } from "@mui/material";
import HabitCard from "./HabitCard.js";
import { habitData } from "../utils/habitData";

const Dashboard = () => (
  <Grid container spacing={2} sx={{ padding: "1rem" }}>
    {habitData.map((habit) => (
      <Grid item xs={12} sm={6} md={4} key={habit.id}>
        <HabitCard habit={habit} />
      </Grid>
    ))}
  </Grid>
);

export default Dashboard;
