import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Other/Work/Work";
import OurServices from "../Other/OurServices/OurServices";
import Brands from "../Other/Brands/Brands";
import Review from "../Other/Review/Review";
import ChooseUs from "../Other/ChooseUs/ChooseUs";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <Work />
      <OurServices />
      <Brands />
      <ChooseUs />
      <Review reviewPromise={reviewPromise} />
    </div>
  );
};

export default Home;
