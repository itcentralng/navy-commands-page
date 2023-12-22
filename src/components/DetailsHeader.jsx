/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import central from "../assets/central.svg";

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
          width: "95%",
        }}
      >
        <img
          src={central}
          alt=""
          style={{ width: "6.25rem", justifySelf: "end" }}
        />
      </Box>
      {children}
    </Box>
  );
};

export default DetailsHeader;
