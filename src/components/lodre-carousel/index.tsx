import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export type LodreCarouselPicture = {
  url: string;
  legend: string;
};

export interface LodreCarouselProps {
  pictures: LodreCarouselPicture[];
}

const LodreCarousel: FC<LodreCarouselProps> = ({ pictures, ...props }) => {
  return (
    <>
      <Carousel {...props}>
        {pictures.map((item: LodreCarouselPicture, index: number) => (
          <div>
            <img src={item.url} alt={item.legend} />
            <p className="legend">{item.legend}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default LodreCarousel;
