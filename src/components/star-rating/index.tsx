import React from "react";
import ReactStars from "react-stars";

const StarRating = ({ ...props }) => {
  return (
    <>
      <ReactStars {...props} />
    </>
  );
};

export default StarRating;
