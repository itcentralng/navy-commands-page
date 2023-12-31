/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import about from "../assets/about.svg";
import objectives from "../assets/objectives.svg";
import departments from "../assets/departments.svg";
import structures from "../assets/structures.svg";
import gallery from "../assets/gallery.svg";
import flag from "../assets/flag.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import { sidebarLinks } from "../../data";
const SideBar = ({ children }) => {
  const location = useLocation();
  const { id } = useParams();

  const selectedItem = sidebarLinks[0]?.linkId.find((item) => item.id === Number(id));

  if (!selectedItem) {
    return (
      <Box>
        {/* <DetailsHeader>
          <SideBar />
        </DetailsHeader> */}
        <h1>No details found</h1>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        marginLeft: "1em",
        position: "relative",
        zIndex: 2,
        paddingTop: "2em",
      }}
    >
      <Box sx={{ width: "15%" }}>
        {buttonItem.map((item) => (
          <Link
            to={`/${item.pageLink}/${selectedItem.id}`}
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
            }}
            key={item.id}
          >
            <Button
              disableRipple
              variant="outlined"
              sx={{
                borderColor: "#fff",
                display: "flex",
                flexDirection: "column",
                width: "12.8125rem",
                height: "9.2125rem",
                padding: "2em 0",
                borderRadius: "20px",
                marginBottom: "2em",
                backgroundColor: location.pathname === `/${item.pageLink}/${selectedItem.id}` ? "#D1C62A" : "transparent",
                "&:hover": {
                  borderColor: "#D1C62A",
                  backgroundColor: "#D1C62A",
                },
              }}
            >
              <img src={item.image} alt="" style={{ width: "3.2rem" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "1.25rem",
                }}
              >
                {item.text}
              </Typography>
            </Button>
          </Link>
        ))}
      </Box>

      {children}
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
    image: flag,
    text: "Flag Officer",
    pageLink: "flag",
  },
  {
    id: 6,
    image: gallery,
    text: "Gallery",
    pageLink: "gallery",
  },
];

export default SideBar;
