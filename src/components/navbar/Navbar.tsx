import React from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import "./Navbar.css"; // Import the CSS file here

const icons = [
  { icon: <HomeOutlinedIcon />, label: "Home", id: "home", path: "/" },
  { icon: <InfoOutlinedIcon />, label: "About", id: "info", path: "/info" },
  {
    icon: <DescriptionOutlinedIcon />,
    label: "Resume",
    id: "resume",
    path: "/resume",
  },
  {
    icon: <MenuBookOutlinedIcon />,
    label: "Portfolio",
    id: "portfolio",
    path: "/portfolio",
  },
  {
    icon: <DnsOutlinedIcon />,
    label: "Services",
    id: "services",
    path: "/services",
  },
  {
    icon: <EmailOutlinedIcon />,
    label: "Contact",
    id: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "10px",
        gap: "10px",
        zIndex: 1000,
      }}
    >
      {icons.map((item) => (
        <Box
          key={item.id}
          component={Link}
          to={item.path}
          className={`nav-item ${
            location.pathname === item.path ? "nav-item-selected" : ""
          }`}
        >
          <IconButton
            aria-label={item.label}
            disableRipple
            className="nav-icon"
          >
            {item.icon}
          </IconButton>
          <Typography className="nav-text">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
