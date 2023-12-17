import { Box, Typography } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";

const Objectives = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <Box>
          <SideBar />
        </Box>
        <Box sx={{ width: "75%" }}>
          <Typography
            variant="h2"
            sx={{ color: "#fff", fontSize: "3rem", marginBottom: "1em" }}
          >
            BENEFITS OF THE NIGERIAN NAVY CENTRAL COMMAND
          </Typography>
          {objectivesList.map((item) => (
            <Typography
              key={item.id}
              variant="body2"
              sx={{
                color: "#fff",
                fontSize: "1.2rem",
                marginBottom: "1.2em",
              }}
            >
              {item.listItem}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const objectivesList = [
  {
    id: 1,
    listItem: `1 - Enhancement of more robust employment and deployment of vessels, personnel and 
    material to effectively police and protect the numerous rigs, platforms, oil installations, creeks
     and adjoining rivers in the AOR of CNC.`,
  },
  {
    id: 2,
    listItem: `2 - Facilitation of the integration and employment of land, maritime, air and special operations 
    forces to gain and maintain control of the creeks, inland water ways, coastal and the high seas in the AOR of CNC..`,
  },
  {
    id: 3,
    listItem: `3 - Enhancement of NN capability at detecting, intercepting and interdicting of hostile actions or acts that
     tends to undermine security and legitimate economic activities in the AOR of CNC.`,
  },
  {
    id: 4,
    listItem: `4 - Increment in aid to civil authority through IS operations, humanitarian relief, Search and Rescue (SAR) 
    amongst others in the AOR of CNC.`,
  },
  {
    id: 5,
    listItem: `5 - Enhancement of confidence among citizens of the area in government’s efforts at creating a secured 
    environment in the AOR of CNC.`,
  },
  {
    id: 6,
    listItem: `6 - Enhancement of the efforts at elimination of militancy, illegal bunkering, attacks on oil facilities 
    and other illegal activities in the AOR of CNC.`,
  },
];

export default Transition(Objectives);
