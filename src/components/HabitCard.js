import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

const HabitCard = ({ habit }) => {
  const progress = (habit.streak / habit.goal) * 100;

  return (
    <Card sx={{ margin: "1rem" }}>
      <CardContent>
        <Typography variant="h5">{habit.name}</Typography>
        <Typography variant="body1">Streak: {habit.streak} / {habit.goal}</Typography>
        <LinearProgress variant="determinate" value={progress} />
      </CardContent>
    </Card>
  );
};

export default HabitCard;
