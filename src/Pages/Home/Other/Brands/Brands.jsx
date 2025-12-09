import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../../assets/brands/amazon.png";
import amazon_vector from "../../../../assets/brands/amazon_vector.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import rand from "../../../../assets/brands/randstad.png";
import star from "../../../../assets/brands/star.png";
import star_people from "../../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="my-24">
      <h1 className="font-bold text-3xl text-center mb-12">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={amazon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amazon_vector} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rand} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star_people} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
