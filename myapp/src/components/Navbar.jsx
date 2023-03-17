import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "./logo.png";
import "./nav.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Login", path: "/login" },
    { text: "Register", path: "/register" },
    { text: "Models", path: "/models" },
    { text: "Form", path: "/form" },
  ];

  return (
    <AppBar position="static" color="inherit" sx={{ padding: 2 }}>
      <Toolbar>
        <img src={Logo} alt="website logo" style={{ height: "70px" }} />

        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Global Care
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon style={{ fontSize: "3rem" }} />
            </IconButton>
          </>
        ) : (
          menuItems.map((item) => (
            <Button
              key={item.text}
              className="nav-link"
              color="inherit"
              component={Link}
              to={item.path}
            >
              {item.text}
            </Button>
          ))
        )}
      </Toolbar>
      {isMobile && (
        <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={toggleMenu}
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <ListItemText
                  primary={item.text}
                  style={{ fontSize: "3rem" }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </AppBar>
  );
}

export default Navbar;
