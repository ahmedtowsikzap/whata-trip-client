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
        transition={{ delay: 1.1, duration: 1.2 }}
      >
        <video src={vid} autoPlay loop muted></video>
        <div className="text">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            initial={{ x: "100vw" }}
            animate={{ x: 2 }}
            transition={{ type: "spring", stiffness: 50, delay: 3 }}
          >
            So, Next Stories?
          </motion.h2>
        </div>
      </motion.div>
    </>
  );
};

export default TopNotch;
