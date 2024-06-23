import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const drawerWidth = 180; // Ensure this matches the width of your drawer

export default function GridPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
      <Typography variant="h4" gutterBottom>
        Image Grid
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="https://via.placeholder.com/200"
            alt="Placeholder 1"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="https://via.placeholder.com/200"
            alt="Placeholder 2"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
