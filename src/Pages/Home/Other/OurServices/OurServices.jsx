import React from "react";
import Img from "../../../../assets/service.png";

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      title: "Fast Delivery",
      description:
        "Get your groceries delivered to your doorstep in under 60 minutes with our express service.",
    },
    {
      id: 2,
      title: "Fresh & Quality Products",
      description:
        "Handpicked fresh fruits, vegetables, and premium products from trusted local stores.",
    },
    {
      id: 3,
      title: "Wide Range of Stores",
      description:
        "Shop from your favorite supermarkets, pharmacies, and local shops – all in one app.",
    },
    {
      id: 4,
      title: "Easy Payment Options",
      description:
        "Pay securely with UPI, cards, wallets, or choose cash on delivery.",
    },
    {
      id: 5,
      title: "Real-Time Tracking",
      description:
        "Track your delivery partner live on the map from pickup to your doorstep.",
    },
    {
      id: 6,
      title: "24/7 Customer Support",
      description:
        "Our support team is here to help you anytime, day or night.",
    },
  ];

  return (
    <div className="py-16 px-4 bg-secondary max-w-[1340px] mx-auto rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
          Our Services
        </h2>
        <p className="text-center  mb-12 text-white max-w-2xl mx-auto">
          We make grocery shopping fast, easy, and reliable – just for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:bg-primary"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <img
                    src={Img}
                    alt={service.title}
                    className="w-12 h-12 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
