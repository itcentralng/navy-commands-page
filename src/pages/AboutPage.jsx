import { Box, Typography } from "@mui/material";
import React from "react";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";

const AboutPage = () => {
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
            sx={{ color: "#fff", fontSize: "3rem", width: "65%" }}
          >
            THE NIGERIAN NAVY CENTRAL COMMAND
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              marginTop: "2.5em",
              fontSize: "1.2rem",
            }}
          >
            The Central Naval Command (CNC) was established February 2012 with
            its headquarters at Brass, Bayelsa State. Being a new command
            without any offices or structures on ground in Brass, a command’s
            temporary headquarters commenced operations as a HQ (Annex) CNC at
            Yenagoa in March 2012 with the first wave of officers and ratings.
            The Command’s Area of Responsibility (AOR) extends from the area
            before River Benin entrance at Longitude 005 00′ E to River Santa
            Barbara entrance at Longitude 006 30′ E covering a coastal distance
            of about 156nm. The coastal states covered by the Command are
            Bayelsa and Delta states, while the inland states in the AOR include
            Edo, Kogi and Anambra States. Based on the CNC established AOR, all
            the existing naval bases and establishments located in the states
            within the AOR became part of the CNC. These bases and
            establishments are NNS DELTA, NNS LUGARD, FOB ESCRAVOS, NNH WARRI,
            Naval Flying Unit and Naval Outpost Onitsha. Others are the Nigerian
            Navy Research Institute in Amassoma and FOB FORMOSO in FORMOSO.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Transition(AboutPage);
