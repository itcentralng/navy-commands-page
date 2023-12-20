/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import navylogo from "../assets/navylogo.svg";

const DetailsHeader = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <img
          src={navylogo}
          alt=""
          style={{ width: "3.5rem", justifySelf: "end" }}
        />
      </Box>
      {children}
    </Box>
  );
};

export default DetailsHeader;
