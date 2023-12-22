import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
// import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { centralData } from "../../data";
import React from "react";
import BackButton from "../components/BackButton";

const Objectives = () => {
  const { id } = useParams();
  console.log("Current id:", id); // Add this line

  const selectedItem = centralData[0]?.objective.find(
    (item) => item.id === Number(id)
  );
  console.log("Selected Item:", selectedItem); // Add this line

  if (!selectedItem) {
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
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          <DetailsHeader>
            <Box
              sx={{
                width: "80%",
                marginLeft: "4.5em",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "4.375rem",
                  marginBottom: ".2em",
                  fontFamily: "Perpetua Light",
                }}
              >
                {selectedItem.header}
              </Typography>
              <Box
                sx={{
                  width: "97%",
                  height: "50vh",
                  overflow: "auto",
                  scrollbarWidth: "thin", // For Firefox
                  scrollbarColor: "transparent transparent", // For Firefox
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <style>
                  {`
                    /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
                    ::-webkit-scrollbar {
                      width: 0.2em;
                    }

                    ::-webkit-scrollbar-thumb {
                      background-color: transparent;
                    }

                    /* Optional: Add some styles for the scrollbar track */
                    ::-webkit-scrollbar-track {
                      // background-color: #f1f1f1;
                    }
                `}
                </style>
                <Typography
                  key={selectedItem.id}
                  variant="body2"
                  sx={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    marginBottom: "1.2em",
                    width: "100%",
                    fontFamily: "Manrope",
                    lineHeight: "1.8",
                  }}
                >
                  {selectedItem.text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <p style={{ display: "block", padding: ".2em 0" }}></p>
                    </React.Fragment>
                  ))}
                </Typography>
              </Box>
            </Box>
          </DetailsHeader>
        </SideBar>
      </Box>
      <Box>
        <BackButton />
      </Box>
    </Box>
  );
};

export default Objectives;
