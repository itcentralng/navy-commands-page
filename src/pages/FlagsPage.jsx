import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import nigNavy from "../assets/nignavy.svg";
import { Link, useParams } from "react-router-dom";
import { centralData } from "../../data";

const FlagsPage = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.flagsPage.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    // Handle the case where the item is not found
    return <div>Item not found</div>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          <DetailsHeader>
            <Box sx={{ width: "80%", marginLeft: "4.5em" }}>
              <Box
                sx={{
                  width: "70vw",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF80",
                    height: "20em",
                    width: "25em",
                    borderRadius: "20px",
                  }}
                >
                  <Link
                    to={`/past-commanding/${selectedItem.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <img src={selectedItem.image1} alt="" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          textTransform: "uppercase",
                          width: "74%",
                          marginTop: "2em",
                        }}
                      >
                        Current Commanding Officer
                      </Typography>
                    </Box>
                  </Link>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF80",
                    height: "20em",
                    width: "25em",
                    borderRadius: "20px",
                  }}
                >
                  <Link
                    to={`${location.pathname}/past-commanding`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <img src={selectedItem.image2} alt="" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          textTransform: "uppercase",
                          width: "74%",
                          marginTop: "2em",
                        }}
                      >
                        Realm of Excellence of Officers
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </DetailsHeader>
        </SideBar>
      </Box>
    </Box>
  );
};

export default Transition(FlagsPage);
