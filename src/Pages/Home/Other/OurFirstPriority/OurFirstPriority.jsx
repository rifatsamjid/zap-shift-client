import React from "react";
import merchant from "../../../../assets/be-a-merchant-bg.png";
import bg from "../../../../assets/location-merchant.png";

const OurFirstPriority = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${merchant})`,
      }}
      className="bg-cover
        bg-center
        bg-no-repeat max-w-7xl mx-auto "
    >
      <div className=" flex items-center  bg-secondary p-10 rounded-3xl justify-around">
        <div>
          <h1 className="font-bold text-3xl my-4 text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-gray-400">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="btn rounded-3xl bg-primary border-0">
              Become a Merchant
            </button>
            <button className=" px-3 py-1.5 rounded-3xl text-primary border-2 border-primary">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurFirstPriority;
