import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import about from "../assets/about.svg";
import objectives from "../assets/objectives.svg";
import departments from "../assets/departments.svg";
import structures from "../assets/structures.svg";
import gallery from "../assets/gallery.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "90%" }}>
        {buttonItem.map((item) => (
          <Button
            disableRipple
            key={item.id}
            variant="outlined"
            sx={{
              borderColor: "#fff",
              display: "flex",
              flexDirection: "column",
              width: "12em",
              padding: "1.5em 0",
              borderRadius: "10px",
              marginBottom: "2em",
              "&:hover": {
                borderColor: "#D1C62A",
                backgroundColor: "#D1C62A",
              },
              "&:active": {
                borderColor: isActive ? "#D1C62A" : "transparent",
                backgroundColor: isActive ? "#D1C62A" : "transparent",
              },
            }}
            onClick={() => {
              setIsActive(true);
              console.log(item.id);
            }}
          >
            <Link
              to={`/${item.pageLink}`}
              style={{ textDecoration: "none", width: "100%", height: "100%" }}
            >
              <img src={item.image} alt="" style={{ width: "2.5rem" }} />
              <Typography
                variant="body2"
                sx={{ color: "#fff", textTransform: "uppercase" }}
              >
                {item.text}
              </Typography>
            </Link>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

const buttonItem = [
  {
    id: 1,
    image: about,
    text: "About",
    pageLink: "about",
  },
  {
    id: 2,
    image: objectives,
    text: "Objectives",
    pageLink: "objectives",
  },
  {
    id: 3,
    image: departments,
    text: "Departments",
    pageLink: "departments",
  },
  {
    id: 4,
    image: structures,
    text: "Structures",
    pageLink: "structures",
  },
  {
    id: 5,
    image: gallery,
    text: "Gallery",
    pageLink: "gallery",
  },
];

export default SideBar;
