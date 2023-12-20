/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import DisplayCard from "../components/DisplayCard";
import Header from "../components/Header";
import Transition from "../components/transition";

const HeroPage = () => {
  return (
    <Header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "90%",
          }}
        >
          <Box mt={4}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "3rem",
                color: "#D1C62A",
                textAlign: "center",
                fontWeight: 300,
              }}
            >
              THE NIGERIAN NAVY COMMANDS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontSize: "1.4rem",
                textAlign: "center",
                textTransform: "capitalize",
                marginTop: "1.2em",
              }}
            >
              “From successful maritime operations to humanitarian missions, our
              naval forces continue to uphold the highest standards of
              professionalism and excellence."
            </Typography>
            <Box
              sx={{
                marginTop: "6em",
                height: "100%",
                paddingBottom: "10em",
                width: "100%",
              }}
            >
              <DisplayCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Header>
  );
};

export default Transition(HeroPage);
