import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SelectFilter from "./SelectFilter";

const Navbar: React.FC = () => {
  return (
    <AppBar position="absolute" color="default">
      <Toolbar>
        <Typography variant="h6">SWAPI</Typography>
        <SelectFilter />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
