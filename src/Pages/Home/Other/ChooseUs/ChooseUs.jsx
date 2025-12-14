import React from "react";
import live from "../../../../assets/live-tracking.png";
import safe from "../../../../assets/safe-delivery.png";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      image: live,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safe,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: safe,
    },
  ];
  return (
    <div className="py-16 px-4 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col bg-white rounded-2xl shadow-lg md:flex-row items-center gap-8 md:gap-12 
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-80">
                <div className=" rounded-3xl p-10">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
              <div className="hidden md:block transform -translate-x-1/2 border-l-2 border-dashed border-pink-200 h-40 "></div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
