import React from "react";
import { Grid, Typography } from "@mui/material";
import TextAnimator from "../../components/text-animator-props/TextAnimator";
import "./Home.css";

class Home extends React.Component {
  render() {
    const texts = ["WEB3 Developer", "Crypto Investor", "Software Engineer"];

    const backgroundStyle: React.CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('" + process.env.PUBLIC_URL + "/banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
    };

    const gridStyle: React.CSSProperties = {
      position: "relative",
      height: "100vh",
      paddingLeft: "10%",
      paddingRight: "10%",
      zIndex: 1,
    };

    return (
      <>
        <div style={backgroundStyle} /> {/* Background image div */}
        <Grid container spacing={2} style={gridStyle}>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="name-text">Ayoub BEN FRAJ</span>
            <TextAnimator texts={texts} />
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
              src="https://via.placeholder.com/150"
              alt="placeholder"
              style={{
                borderRadius: "50%",
                width: "80%",
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;
