import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { centralData } from "../../data";
import React from "react";

const Objectives = () => {
  const { id } = useParams();
  console.log("Current id:", id); // Add this line

  const selectedItem = centralData[0]?.objective.find(
    (item) => item.id === Number(id)
  );
  console.log("Selected Item:", selectedItem); // Add this line

  if (!selectedItem) {
    return <div>Item not found</div>;
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
                  fontSize: "3rem",
                  marginBottom: "1em",
                }}
              >
                {selectedItem.header}
              </Typography>
              <Typography
                key={selectedItem.id}
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: "1.2em",
                  width: "100%",
                }}
              >
                {selectedItem.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          </DetailsHeader>
        </SideBar>
      </Box>
    </Box>
  );
};

export default Transition(Objectives);
