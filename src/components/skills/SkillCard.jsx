import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skillName }) => {
  return (
    // <Button
    //   sx={{
    //     color: "#fff",
    //     minWidth: "100px",
    //     transition: "all 0.4s",
    //     backgroundColor: "rgba(255, 255, 255, 0.1)",
    //     backdropFilter: "blur(10px)", // Adjust the blur radius
    //     padding: "10px",
    //     "&:hover": {
    //       border: "0.4px solid green", // Adjust border color and alpha value on hover
    //     },
    //   }}
    // >
    //   {skillName}
    // </Button>
    <motion.div
      whileHover={{ scale: 1.1 }} // Scale up on hover
      whileTap={{ scale: 0.9 }} // Scale down on tap
    >
      <Button
        sx={{
          color: "#fff",
          minWidth: "100px",
          transition: "all 0.4s",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)", // Adjust the blur radius
          padding: "10px",
          "&:hover": {
            border: "0.4px solid orange", // Adjust border color and alpha value on hover
          },
        }}
      >
        {skillName}
      </Button>
    </motion.div>
  );
};

export default SkillCard;
