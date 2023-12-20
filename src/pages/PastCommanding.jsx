import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import blackRectangle from "../assets/blank-rectangle.svg";

const PastCommanding = () => {
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
                  <img src={blackRectangle} alt="" style={{ width: "26%" }} />
                  <img src={blackRectangle} alt="" style={{ width: "23%" }} />
                  <img src={blackRectangle} alt="" style={{ width: "18%" }} />
                  <img src={blackRectangle} alt="" style={{ width: "15%" }} />
                  <img src={blackRectangle} alt="" style={{ width: "13%" }} />
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
