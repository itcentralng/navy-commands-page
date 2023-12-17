import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import logistics from "../assets/logistics.svg";
import central from "../assets/central.svg";
import doctrine from "../assets/doctrine.svg";
import nhs from "../assets/nhs.svg";
import training from "../assets/training.svg";
import { Link } from "react-router-dom";

const DisplayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipAnimating, setIsFlipAnimating] = useState(false);

  const handleImageFlip = () => {
    if (!isFlipAnimating) {
      setIsFlipped(!isFlipped);
      setIsFlipAnimating(true);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          perspective: "1000px",
        }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            style={{
              transition: "transform 0.4s",
              transformStyle: "preserve-3d",
              width: "18%",
              cursor: "pointer",
              height: "15em",
            }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotateY: isFlipped ? 360 : 180 }}
            onAnimationComplete={() => setIsFlipAnimating(false)}
          >
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                border: "none",
              }}
            >
              <img src={item.front} alt="" style={{ width: "100%" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              >
                {item.lowerText}
              </Typography>
            </div>
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                border: "none",
                transform: "rotateY(180deg)",
              }}
            >
              <img src={item.back} alt="" style={{ width: "100%" }} />
              <Link
                to={`/about`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  position: "relative",
                  bottom: 50,
                  left: 110,
                  fontSize: "1.2em",
                  borderBottom: "3px solid #80808080",
                }}
              >
                {item.cmdPageLink}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    front: logistics,
    back: logistics,
    lowerText: "The Nigerian Navy Logistics Command",
    cmdPageLink: "Read more",
  },
  {
    id: 2,
    front: central,
    back: central,
    lowerText: "The Nigerian Navy Logistics Command",
    cmdPageLink: "Read more",
  },
  {
    id: 3,
    front: training,
    back: training,
    lowerText: "The Nigerian Navy Logistics Command",
    cmdPageLink: "Read more",
  },
  {
    id: 4,
    front: doctrine,
    back: doctrine,
    lowerText: "The Nigerian Navy Logistics Command",
    cmdPageLink: "Read more",
  },
  {
    id: 5,
    front: nhs,
    back: nhs,
    lowerText: "The Nigerian Navy Logistics Command",
    cmdPageLink: "Read more",
  },
];

export default DisplayCard;
