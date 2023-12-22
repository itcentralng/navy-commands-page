import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { centralData } from "../../data";

const PastCommanding = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.pastCommanding.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    // Handle the case where the item is not found
    return (
      <Box sx={{ marginLeft: "4em" }}>
        <DetailsHeader>
          <SideBar />
        </DetailsHeader>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          <DetailsHeader>
            <Box sx={{ width: "80%", marginLeft: "4.5em" }}>
              <Box
                sx={{
                  width: "70vw",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={selectedItem.image1}
                    alt=""
                    style={{ width: "26%" }}
                  />
                  <img
                    src={selectedItem.image2}
                    alt=""
                    style={{ width: "23%" }}
                  />
                  <img
                    src={selectedItem.image3}
                    alt=""
                    style={{ width: "18%" }}
                  />
                  <img
                    src={selectedItem.image4}
                    alt=""
                    style={{ width: "15%" }}
                  />
                  <img
                    src={selectedItem.image5}
                    alt=""
                    style={{ width: "13%" }}
                  />
                </Box>
              </Box>
            </Box>
          </DetailsHeader>
        </SideBar>
      </Box>
    </Box>
  );
};

export default Transition(PastCommanding);
