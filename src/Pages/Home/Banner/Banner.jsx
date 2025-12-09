import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      className="max-w-7xl mx-auto "
    >
      <div className="relative">
        <img src={bannerImg1} />
        <div className=" z-10 absolute bottom-20 left-10 flex items-center gap-6">
          <span className="flex items-center">
            {" "}
            <p className="bg-primary px-3 py-3 rounded-3xl font-semibold">
              Track Your Parcel
            </p>
            <ArrowUpRight className="bg-[#1F1F1F] text-secondary font-bold rounded-full" />
          </span>
          <button className="btn font-semibold">Be A Rider</button>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
        <div className=" z-10 absolute bottom-20 left-10 flex items-center gap-6">
          <span className="flex items-center">
            {" "}
            <p className="bg-primary px-3 py-3 rounded-3xl font-semibold">
              Track Your Parcel
            </p>
            <ArrowUpRight className="bg-[#1F1F1F] text-secondary font-bold rounded-full" />
          </span>
          <button className="btn font-semibold">Be A Rider</button>
        </div>
      </div>
      <div>
        <img src={bannerImg3} />
        <div className=" z-10 absolute bottom-20 left-10 flex items-center gap-6">
          <span className="flex items-center">
            {" "}
            <p className="bg-primary px-3 py-3 rounded-3xl font-semibold">
              Track Your Parcel
            </p>
            <ArrowUpRight className="bg-[#1F1F1F] text-secondary font-bold rounded-full" />
          </span>
          <button className="btn font-semibold">Be A Rider</button>
        </div>{" "}
      </div>
    </Carousel>
  );
};

export default Banner;
