import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import "./Navbar.css";

const icons = [
  {
    icon: <HomeOutlinedIcon />,
    label: "Intro",
    id: "intro-section",
    path: "/#intro-section",
  },
  {
    icon: <InfoOutlinedIcon />,
    label: "About",
    id: "about-section",
    path: "/#about-section",
  },
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
  const navigate = useNavigate();

  const handleIconClick = (item: any) => {
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      navigate(item.path);
    }
  };

  // Function to determine if the icon should be marked as selected
  const isSelected = (itemPath: any) => {
    const [path, hash] = itemPath.split("#");
    return (
      location.pathname === path && (!hash || location.hash === `#${hash}`)
    );
  };

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
          component="div"
          onClick={() => handleIconClick(item)}
          className={`nav-item ${
            isSelected(item.path) ? "nav-item-selected" : ""
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
