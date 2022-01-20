import React, { FC } from "react";
import { ProductShowcase } from "..";

export interface LodreCarouselProps {
  pictures: string[];
}

const LodreCarousel: FC<LodreCarouselProps> = ({ pictures, ...props }) => {
  return (
    <>
      <ProductShowcase pictures={pictures} {...props} />
    </>
  );
};

export default LodreCarousel;
