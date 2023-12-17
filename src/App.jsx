import React, { useState } from "react";
import HeroPage from "./pages/HeroPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";
import backgroundImage from "./assets/BackgroundImg.svg";
import AboutPage from "./pages/AboutPage";
import Objectives from "./pages/Objectives";
import Gallery from "./pages/Gallery";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [inView, setInView] = useState(true);

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

const routeLinks = [
  {
    id: 1,
    routeLink: "/",
    routeElement: <HeroPage />,
  },
  {
    id: 2,
    routeLink: "/about",
    routeElement: <AboutPage />,
  },
  {
    id: 3,
    routeLink: "/objectives",
    routeElement: <Objectives />,
  },
  {
    id: 4,
    routeLink: "/gallery",
    routeElement: <Gallery />,
  },
];

export default App;
