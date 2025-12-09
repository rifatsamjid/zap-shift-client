import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Other/Work/Work";
import OurServices from "../Other/OurServices/OurServices";
import Brands from "../Other/Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner />
      <Work/>
      <OurServices/>
      <Brands/>
    </div>
  );
};

export default Home;
