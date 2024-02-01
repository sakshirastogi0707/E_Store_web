import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Rating.css";

const Rating = ({ rate, count }) => {
  const maxStars = 5;

  const getStarIcon = (position) => {
    if (rate >= position) {
      return <AiFillStar fontSize={20} key={position} style={{ color: "gold" }} />;
    } else if (rate + 0.5 >= position) {
      return (
        <AiFillStar
          key={position}
          fontSize={20}
          style={{ color: `rgb(${255 * (rate % 1)}, ${215 * (rate % 1)}, 0)` }}
        />
      );
    } else {
      return <AiOutlineStar key={position} fontSize={20} style={{ color: "lightgray" }} />;
    }
  };

  return (
    <div className="rating-container">
      <div className="rating-icons d-flex align-items-center gap-1">
        <span className="rate">{rate.toFixed(1)}</span>
        {Array.from({ length: maxStars }, (_, index) => getStarIcon(index + 1))}
      </div>

      <div className="rating-text mt-1">
        <span className="count">{count} reviews</span>
      </div>
    </div>
  );
};

export default Rating;
