import React from "react";

export const StarReviews = () => {
  return (
    <div className="rating rating-xs">
      <div className="mask mask-star bg-black" aria-label="1 star"></div>
      <div className="mask mask-star bg-black" aria-label="2 star"></div>
      <div className="mask mask-star bg-black" aria-label="3 star"></div>
      <div
        className="mask mask-star bg-black"
        aria-label="4 star"
        aria-current="true"
      ></div>
      <div className="mask mask-star bg-black" aria-label="5 star"></div>
    </div>
  );
};
