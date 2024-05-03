import React, { useState } from "react";
import { Grid, Icon, Snackbar } from "@mui/material";
import TextAnimator from "../../components/text-animator-props/TextAnimator";
import MuiAlert from '@mui/material/Alert';
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("ayoub.benfraj013@gmail.com");
    setOpen(true);
  };

  const texts = ["WEB3 Developer", "Crypto Investor", "Software Engineer"];

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  };

  const gridStyle = {
    position: "relative",
    height: "100vh",
    paddingLeft: "10%",
    paddingRight: "10%",
    zIndex: 1,
  };

  return (
    <>
      <div style={backgroundStyle as React.CSSProperties}></div>
      <Grid container spacing={2} sx={gridStyle}>
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={4}
          sx={{
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <span className="name-text">Ayoub Ben Fraj</span>
          <TextAnimator texts={texts} />
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "15rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon className="social-icon" sx={{ fontSize: 40 }}>
              <a
                href="https://www.linkedin.com/in/abenfraj/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/linkedin.png`}
                  alt="linkedin"
                  style={{ width: "100%" }}
                />
              </a>
            </Icon>
            <Icon className="social-icon" sx={{ fontSize: 40 }}>
              <a
                href="https://www.github.com/abenfraj"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/github.png`}
                  alt="github"
                  style={{ width: "100%" }}
                />
              </a>
            </Icon>
            <Icon
              className="social-icon"
              sx={{ fontSize: 40, cursor: 'pointer' }}
              onClick={handleEmailCopy}
            >
              <img
                src={`${process.env.PUBLIC_URL}/gmail.png`}
                alt="email"
                style={{ width: "100%" }}
              />
            </Icon>
          </Grid>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/portrait.png`}
            alt="placeholder"
            style={{
              borderRadius: "50%",
              width: "70%",
            }}
          />
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Email copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default Home;
