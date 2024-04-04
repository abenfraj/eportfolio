import React from "react";

class Home extends React.Component {
  render() {
    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    };

    return (
      <div style={containerStyle}>
        <h1>Ayoub Ben Fraj</h1>
      </div>
    );
  }
}

export default Home;
