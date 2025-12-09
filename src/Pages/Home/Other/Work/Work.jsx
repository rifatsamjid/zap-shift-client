import React from 'react';
import BookingIcon from "../../../../assets/bookingIcon.png"; 

const Work = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Place Your Order",
      description:
        "Choose your items from our app or website, add them to your cart, and confirm your delivery details in just a few clicks."
    },
    {
      id: 2,
      title: "We Pick & Pack",
      description:
        "Our delivery partner collects your order from the nearest store and carefully packs it to ensure quality and safety."
    },
    {
      id: 3,
      title: "Fast Doorstep Delivery",
      description:
        "Track your order in real time and receive it at your doorstep quickly and safely."
    },
    {
      id: 4,
      title: "Enjoy Your Items!",
      description:
        "Unbox your fresh items, rate your experience, and get ready for your next hassle-free order."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="font-extrabold text-4xl text-center mb-12 text-gray-800">
        How it Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {howItWorksData.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
              {step.id}
            </div>

            <div className="mb-6 mt-4">
              <img
                src={BookingIcon}
                alt={step.title}
                className="w-24 h-24 mx-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>

            {index < howItWorksData.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-orange-500 text-5xl font-bold">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;