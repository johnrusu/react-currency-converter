import React from "react";
import { NavLink } from "react-router-dom";

// mui
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  Button,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

// routes
import { ROUTER_PATHS, APP } from "@/constants";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const showIcon = (iconName: string) => {
    switch (iconName) {
      case "HomeIcon":
        return <HomeIcon />;
      case "InfoIcon":
        return <InfoIcon />;
      default:
        return null;
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2, height: 20 }}>
          <img
            src="/react-currency-converter/favicons/apple-icon-57x57.png"
            alt={APP.TITLE}
          />
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {APP.TITLE}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {ROUTER_PATHS.map((route, routeIndex) => (
              <MenuItem
                key={`menuitem-${route}-${routeIndex}`}
                component={NavLink}
                to={route.path}
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&.active": {
                    backgroundColor: "action.selected",
                  },
                }}
              >
                {showIcon(route.icon)}
                <span>{route.name}</span>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {APP.TITLE}
        </Typography>
        <Box sx={{ flexGrow: 1, gap: 2, display: { xs: "none", md: "flex" } }}>
          {ROUTER_PATHS.map((route, routeIndex) => (
            <Button
              onClick={handleCloseNavMenu}
              component={NavLink}
              to={route.path}
              sx={{
                color: "inherit",
                "&.active": {
                  backgroundColor: "action.selected",
                },
              }}
              startIcon={showIcon(route.icon)}
              key={`button-${route}-${routeIndex}`}
            >
              <span>{route.name}</span>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
