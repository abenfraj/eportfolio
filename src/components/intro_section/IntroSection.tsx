import React, { useState, useEffect } from "react";
import { Grid, Icon, Snackbar } from "@mui/material";
import TextAnimator from "../../components/text-animator-props/TextAnimator";
import MuiAlert from "@mui/material/Alert";
import "./IntroSection.css";

const IntroSection = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("");
  const temperatureApiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const timeData = Date.now();
      const options = {
        timeZone: "Europe/Paris",
        hour: "numeric" as const,
        minute: "numeric" as const,
        second: "numeric" as const,
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(
        timeData
      );
      setTime(timeString);

      const temperatureResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=48.866667&lon=2.333333&appid=" +
          temperatureApiKey +
          "&units=metric"
      );
      const temperatureData = await temperatureResponse.json();
      setTemperature(temperatureData.main?.temp);
    };

    fetchData();

    const timeInterval = setInterval(() => {
      fetchData();
    }, 1000);

    const temperatureInterval = setInterval(() => {
      fetchData();
    }, 600000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(temperatureInterval);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("ayoub.benfraj013@gmail.com");
    setOpen(true);
  };

  const texts = [
    "WEB3 Developer",
    "Software Engineer",
    "Project Contributor",
    "Node Runner",
    "Crypto Investor",
  ];

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)), url(${process.env.PUBLIC_URL}/banner.jpg)`,
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
    <div id="intro-section">
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
                  src={`${process.env.PUBLIC_URL}/social-icons/linkedin.png`}
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
                  src={`${process.env.PUBLIC_URL}/social-icons/github.png`}
                  alt="github"
                  style={{ width: "100%" }}
                />
              </a>
            </Icon>
            <Icon
              className="social-icon"
              sx={{ fontSize: 40, cursor: "pointer" }}
              onClick={handleEmailCopy}
            >
              <img
                src={`${process.env.PUBLIC_URL}/social-icons/gmail.png`}
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
        <Grid
          item
          xs={4}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 30,
            padding: "10px",
            color: "black",
            zIndex: 9999,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            textAlign: "right",
            width: "18%",
          }}
        >
          <span
            className="coordinates-text"
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
              fontWeight: 800,
            }}
          >
            Based in Paris, France
          </span>
          <span className="coordinates-text" style={{ fontSize: "0.9rem" }}>
            {time} UTC+2, &nbsp;&nbsp;{temperature} °C
          </span>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          Email copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default IntroSection;
