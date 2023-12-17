import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import gallery1 from "../assets/gallery1.svg";
import gallery2 from "../assets/gallery2.svg";
import gallery3 from "../assets/gallery3.svg";
import gallery4 from "../assets/gallery4.svg";
import gallery5 from "../assets/gallery5.svg";
import "@splidejs/react-splide/css";

const Gallery = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Box>
          <SideBar />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {splideImageList.map((item) => (
              <SplideSlide
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={item.imageItem} alt="" style={{ width: "50%" }} />
              </SplideSlide>
            ))}
          </Splide>
          <Box
            sx={{ display: "flex", marginTop: "2em", justifyContent: "center" }}
          >
            {imageList.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt=""
                style={{ width: "5.5em" }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const splideImageList = [
  { id: 1, imageItem: gallery1 },
  { id: 1, imageItem: gallery2 },
  { id: 1, imageItem: gallery3 },
];

const imageList = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery1 },
  { id: 7, image: gallery2 },
  { id: 8, image: gallery3 },
  { id: 9, image: gallery4 },
  { id: 10, image: gallery5 },
];

export default Transition(Gallery);
