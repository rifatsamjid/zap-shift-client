import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import customer from "../../../../assets/customer-top.png";

const Review = ({ reviewPromise }) => {
  const data = use(reviewPromise);
  console.log(data);
  return (
    <div>
      <div className="text-center mt-24">
        <div className="flex justify-center">
          <img src={customer} alt="" />
        </div>
        <h1 className="font-bold text-2xl">What our customers are sayings</h1>
        <p className="font-semibold my-4">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div>
        <>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <div>
              {data.map((review) => (
                <SwiperSlide>
                  <ReviewsCard key={review.id} review={review} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Review;
