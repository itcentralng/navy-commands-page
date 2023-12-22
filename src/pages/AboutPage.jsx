import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import { centralData } from "../../data";
import { Link, useParams } from "react-router-dom";
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
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <SideBar>
          <Box
            sx={{
              width: "78%",
              marginLeft: "4.5em",
              marginTop: "5em",
              position: "relative",
            }}
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
                  width: "58%",
                  textTransform: "uppercase",
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
                marginTop: "1em",
                fontSize: "1.2rem",
                width: "95%",
                marginBottom: "18em",
              }}
            >
              {selectedItem.text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <p style={{ display: "block", padding: ".2em 0" }}></p>
                </React.Fragment>
              ))}
            </Typography>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid #fff",
                position: "absolute",
                top: "80%",
                left: "75%",
                width: "15%",
                padding: "1.2em 2.5em",
                borderRadius: "25px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>BACK TO HOME</Box>
            </Link>
          </Box>
        </SideBar>
      </Box>
    </Box>
  );
};

export default Transition(AboutPage);
