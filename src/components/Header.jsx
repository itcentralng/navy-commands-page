import { Box, Typography } from "@mui/material";
import navylogo from "../assets/navylogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "1rem",
            color: "#fff",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            NAVY COMMANDS
          </Link>
        </Typography>
        <img src={navylogo} alt="" style={{ width: "3.5rem" }} />
      </Box>
    </Box>
  );
};

export default Header;
