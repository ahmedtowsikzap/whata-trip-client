import React from "react";
import "./TopNotch.css";
import { motion } from "framer-motion";
import vid from "../../../Assets/video/smooth.mp4";

const TopNotch = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <video src={vid} autoPlay loop muted></video>
        <div className="text">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.3 }}
          >
            Destination Awaits!
          </motion.h2>
        </div>
      </motion.div>
    </>
  );
};

export default TopNotch;
