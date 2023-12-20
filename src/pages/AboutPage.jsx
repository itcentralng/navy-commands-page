import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import { centralData } from "../../data";
import { useParams } from "react-router-dom";
import React from "react";

const AboutPage = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.about.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    // Handle the case where the item is not found
    return <div>Item not found</div>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          <Box
            sx={{ width: "78%", marginLeft: "4.5em", marginTop: "5em" }}
            key={selectedItem.id}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  width: "57%",
                }}
              >
                {selectedItem.header}
              </Typography>
              <img src={selectedItem.image} alt="" style={{ width: "4em" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                marginTop: "2.5em",
                fontSize: "1.2rem",
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
        </SideBar>
      </Box>
    </Box>
  );
};

export default Transition(AboutPage);
