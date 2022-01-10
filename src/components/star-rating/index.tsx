import React from "react";
import ReactStars from "react-stars";
import { PALETTE } from "../../tokens/color";

const StarRating = ({ ...props }) => {
  return (
    <>
      <ReactStars color1={PALETTE.ash} color2={PALETTE.primary} {...props} />
    </>
  );
};

export default StarRating;
