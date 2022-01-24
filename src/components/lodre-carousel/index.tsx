import React, { FC } from "react";
import { ProductShowcase } from "..";

export interface LodreCarouselProps {
  pictures: string[];
  height?: string;
  timeout?: number;
  showThumbs?: boolean;
  showButtons?: boolean;
  showIndicators?: boolean;
}

const LodreCarousel: FC<LodreCarouselProps> = ({
  pictures,
  height,
  timeout,
  showThumbs,
  showButtons,
  showIndicators,
  ...props
}) => {
  return (
    <>
      <ProductShowcase
        pictures={pictures}
        height={height}
        showIndicators={showIndicators}
        showButtons={showButtons}
        timeout={timeout}
        showThumbs={showThumbs}
        {...props}
      />
    </>
  );
};

export default LodreCarousel;
