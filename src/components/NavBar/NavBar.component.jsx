import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AppBar } from "./NavBar.style";
import { colorUsage } from "../../stylesheet";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, pointerEvents: "none", userSelect: "none" }}
        >
          Code Busters
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            flexGrow: 0.1,
            fontWeight: currentPage === ROUTES.HEROES ? "bold" : "normal",
            color:
              currentPage === ROUTES.HEROES
                ? colorUsage.active
                : colorUsage.inactive,
          }}
          onClick={() => navigate(ROUTES.HEROES)}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            flexGrow: 0.1,
            fontWeight: currentPage === ROUTES.FAVOURITES ? "bold" : "normal",
            color:
              currentPage === ROUTES.FAVOURITES
                ? colorUsage.active
                : colorUsage.inactive,
          }}
          onClick={() => navigate(ROUTES.FAVOURITES)}
        >
          Favourites
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
