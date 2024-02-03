import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ResponsiveAppBar from "./navbar";
import VenueChoices from "./VenueChoices";
import SurveyComponent from "./MiscPref/SurveyComponent";

const VenueSelect = () => {
  console.log("venue select");
  return (
    <div>
      <ResponsiveAppBar />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: '"Segoe UI"',
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          mt: 2,
          mb: 2,
        }}
      >
        1. Food Selection
      </Typography>
      <VenueChoices />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: '"Segoe UI"',
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          mt: 6,
          mb: 2,
        }}
      >
        2. Miscellaneous Preferences
      </Typography>
      <SurveyComponent sx={{ marginLeft: 0 }} />
    </div>
  );
};

export default VenueSelect;
