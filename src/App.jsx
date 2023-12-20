import HeroPage from "./pages/HeroPage";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundImage from "./assets/BackgroundImg.svg";
import AboutPage from "./pages/AboutPage";
import Objectives from "./pages/Objectives";
import Gallery from "./pages/Gallery";
import { AnimatePresence } from "framer-motion";
import FlagsPage from "./pages/FlagsPage";
import PastCommanding from "./pages/PastCommanding";

const App = () => {
  const location = useLocation();
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="/objectives/:id" element={<Objectives />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/flag" element={<FlagsPage />} />
          <Route path="/flag/past-commanding" element={<PastCommanding />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default App;
