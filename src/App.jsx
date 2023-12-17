import React from "react";
import HeroPage from "./pages/HeroPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import backgroundImage from "./assets/BackgroundImg.svg";
import SideBar from "./components/SideBar";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        paddingTop: "2em",
      }}
    >
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Box>
  );
};

export default App;
