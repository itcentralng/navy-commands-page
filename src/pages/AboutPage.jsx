import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Transition from "../components/transition";
import central from "../assets/central.svg";

const AboutPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          {itemData.map((item) => (
            <Box
              sx={{ width: "78%", marginLeft: "4.5em", marginTop: "5em" }}
              key={item.id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontSize: "3rem",
                    width: "57%",
                  }}
                >
                  {item.header}
                </Typography>
                <img src={central} alt="" style={{ width: "4em" }} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  marginTop: "2.5em",
                  fontSize: "1.2rem",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </SideBar>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    id: 1,
    header: "The Nigerian Navy Central Command",
    text: `Since inception in 1956, the statutory roles of the NN have expanded to cover the
    full   spectrum   of   military,   policing   and   diplomatic   functions.   So   also,   were   the
    imperatives   of   operational   capacity   that   demand   effective   presence   and   domain
    awareness within the internal waters, territorial seas and the Exclusive Economic Zone
    (EEZ). As part of the structural response to these challenges, the NN had over the past
    decades operated a two-command structure for the coordination of its operational level
    activities, namely; Western Naval Command (WNC) and Eastern Naval Command
    (ENC). while noting that both operational commands have equitably discharged their
    responsibilities, recent events and indeed the trend of threats within the nation's marital
    domain have justified the necessity for. review of the current structure. Specifically, the
    emergence of various forms of illegal trafficking, militancy, sabotage. piracy and attacks
    on shipping have placed considerable demand on NN policing capacity, particularly in
    the Niger Delta. Inevitably, apart from improved coastal presence with ships and bases,
    there are emergent requirements for more robust capability on riverine and special
    operations, including the protection of Key Points and Valuable Points.
    
    In consonance with the foregoing realities, the NN besides previous arguments for,
    and under its ongoing transformation process identified the need for the creation of a
    third operational command. Therefore, following the recent approval by the Navy Board,
    this Nigerian Navy Order hereby promulgates the establishment of the Third Operational
    Command to be known as the Central Naval Command (CNC).`,
  },
  // {
  //   id: 2,
  //   header: "The Naval Training Command",
  //   text: `The   Naval   Training   Command   (NAVTRAC)   is   hereby
  //   established for the centralized control, execution and superintendence
  //   of Local Training in the in  the Nigerian Navy, and for the purpose of
  //   coordinating and harmonizing the training doctrine, concepts and
  //   standards o local Training in Nigeria, including Basic Sea Training
  //   for ratings, cadets, officers, the commander will also be responsible
  //   for the basic Operational Sea Training (BOST), safety Operational
  //   Sea Training (SOST) and Consolidation Operational Sea Training
  //   (COST) of the Fleet.`,
  // },
];

export default Transition(AboutPage);
