import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <AcUnitIcon sx={{ mr: 2 }} /> {/* Add the icon here */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Optionally keep this or remove it if you only want the icon */}
          </Typography>
          <Button color="inherit" sx={{ zIndex: 1400 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
