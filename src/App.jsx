import HeroPage from "./pages/HeroPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundImage from "./assets/BackgroundImg.svg";
import AboutPage from "./pages/AboutPage";
import Objectives from "./pages/Objectives";
import Gallery from "./pages/Gallery";
import { AnimatePresence } from "framer-motion";
import FlagsPage from "./pages/FlagsPage";
import PastCommanding from "./pages/PastCommanding";
import Structures from "./pages/Structures";
import Department from "./pages/Department";

const App = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "2em",
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="/departments/:id" element={<Department />} />
          <Route path="/objectives/:id" element={<Objectives />} />
          <Route path="/structures/:id" element={<Structures />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/flag/:id" element={<FlagsPage />} />
          <Route path={`/past-commanding/:id`} element={<PastCommanding />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default App;
