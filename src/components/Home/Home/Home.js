import React from "react";
import Navbar from "../../Shared/Navbar";
import Destination from "../Destination/Destination";
import Intro from "../Intro/Intro";
import TopNotch from "../TopNotch/TopNotch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopNotch />
      <Destination />
      <Intro />
    </div>
  );
};

export default Home;
