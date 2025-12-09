import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const {userName,review:reviews,user_photoURL} = review;
  return (
    <div className="max-w-md rounded-2xl bg-pink-100 p-6 shadow-sm">
      <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />

      
      <p className="text-gray-600 leading-relaxed mb-6">
        A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.
      </p>

      <div className="border-t border-dashed border-gray-400 mb-6"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 ">
            <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="font-bold text-gray-900">{userName}</h4>
          <p className="text-sm text-gray-500">{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
