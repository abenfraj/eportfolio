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
      }}
    >
      {icons.map((item) => (
        <Box
          key={item.id}
          component={Link}
          to={item.path}
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor:
              location.pathname === item.path ? "primary.main" : "#f0f0f0",
            borderRadius: "30px",
            height: "60px",
            minWidth: "60px",
            paddingRight: "0",
            overflow: "hidden",
            transition: "all .3s ease",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "#fff",
              paddingRight: "24px",
              "& .MuiIconButton-root": {
                color: "#fff",
              },
              // This applies to all buttons, but for the selected one, it's overridden below
              "& .MuiTypography-root": {
                display: "block",
              },
            },
            color: location.pathname === item.path ? "#fff" : "#666",
          }}
        >
          <IconButton
            aria-label={item.label}
            disableRipple
            sx={{
              marginLeft: "10px",
              color: "inherit",
              "& .MuiSvgIcon-root": {
                fontSize: "1.5rem",
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {item.icon}
          </IconButton>
          <Typography
            sx={{
              display: "none", // Default to not displaying text for all buttons
              flexGrow: 1,
              ...(location.pathname === item.path &&
                {
                  // Conditionally applying styles for the selected button
                  // This overrides the hover behavior, but since display is "none" by default,
                  // it remains hidden unless hovered because of the &:hover rule above
                }),
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
