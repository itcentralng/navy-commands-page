import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
// import Transition from "../components/transition";
import "@splidejs/react-splide/css";
import DetailsHeader from "../components/DetailsHeader";
// import blankRectangle from "../assets/blank-rectangle.svg";
import { ThumbnailsExample } from "../components/Carousel.tsx";
import BackButton from "../components/BackButton.jsx";
import { centralData } from "../../data.js";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.gallery.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    // Handle the case where the item is not found
    return (
      <Box
        sx={{
          marginLeft: "6em",
          display: "flex",
          position: "relative",
        }}
      >
        <SideBar></SideBar>
        <DetailsHeader></DetailsHeader>
        <Box>
          <BackButton />
        </Box>
      </Box>
    );
  }

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
        <SideBar>
          <DetailsHeader>
            <Box
              sx={{
                width: "77vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Splide
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
                {imageList.map((item) => (
                  <SplideSlide
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.image} alt="" style={{ width: "50%" }} />
                  </SplideSlide>
                ))}
              </Splide> */}
              {/* <Box
                sx={{
                  display: "flex",
                  marginTop: "2em",
                  justifyContent: "center",
                }}
              >
                {imageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt=""
                    style={{ width: "5.5em" }}
                  />
                ))}
              </Box> */}
              <Box sx={{}}>
                <ThumbnailsExample />
              </Box>
            </Box>
          </DetailsHeader>
        </SideBar>
      </Box>
    </Box>
  );
};

export default Gallery;
