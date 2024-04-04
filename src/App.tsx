import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

const AboutPage = () => <Button variant="contained">À propos</Button>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
