import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar";
import Destination from "../Destination/Destination";
import Intro from "../Intro/Intro";
import Place from "../Place/Place";
import Places from "../Places/Places";
import TopNotch from "../TopNotch/TopNotch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopNotch />
      <Destination />
      <Intro />
      <Places/>
    </div>
  );
};

export default Home;
