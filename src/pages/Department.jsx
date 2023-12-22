import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import DetailsHeader from "../components/DetailsHeader";
import BackButton from "../components/BackButton";

const Department = () => {
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
};

export default Department;
