import React, { FC, useEffect, useState } from "react";
import { Button } from "..";
import { CaretLeft, CaretRight } from "../../icons";

import {
  StyledImageSelectFlex,
  StyledIndicators,
  StyledIndicatorsContainer,
  StyledSelectedImage,
  StyledSelectedImageContainer,
  StyledSmallImages,
} from "./styled";

export interface ProductShowcaseProps {
  pictures: string[];
  height?: string;
  timeout?: number;
  autoplay?: boolean;
  showThumbs?: boolean;
  showButtons?: boolean;
  showIndicators?: boolean;
}

const ProductShowcase: FC<ProductShowcaseProps> = ({
  pictures,
  height,
  timeout = 5000,
  autoplay = false,
  showButtons = true,
  showThumbs = true,
  showIndicators = true,
}) => {
  const [key, setKey] = useState<number>(0);
  const [selected, setSelected] = useState<string>(pictures[key]);

  const goForward = () => {
    if (key === pictures.length - 1) {
      setKey(0);
    } else {
      setKey(key + 1);
    }
  };

  const goBack = () => {
    if (key === 0) {
      setKey(pictures.length - 1);
    } else {
      setKey(key - 1);
    }
  };

  if (typeof window !== "undefined" && autoplay) {
    setTimeout(() => {
      goForward();
    }, timeout);
  }

  useEffect(() => {
    setSelected(pictures[key]);
  }, [key, pictures]);

  return (
    <div>
      <StyledSelectedImageContainer>
        <StyledSelectedImage
          height={height}
          src={selected}
          alt="product display"
        />
        {showButtons && (
          <>
            <Button onClick={() => goBack()} className="left">
              <CaretLeft />
            </Button>
            <Button onClick={() => goForward()} className="right">
              <CaretRight />
            </Button>
          </>
        )}
        {showIndicators && (
          <StyledIndicatorsContainer>
            {Array(pictures.length)
              .fill("")
              .map((item, index: number) => (
                <StyledIndicators
                  onClick={() => setKey(index)}
                  key={index}
                  selected={key === index}
                />
              ))}
          </StyledIndicatorsContainer>
        )}
      </StyledSelectedImageContainer>

      {showThumbs && (
        <StyledImageSelectFlex className="mt-10">
          {pictures.map((item: string, index: number) => (
            <StyledSmallImages
              selected={selected === item}
              src={item}
              key={index}
              alt="product showcase thumbnail"
              onClick={() => setSelected(item)}
            />
          ))}
        </StyledImageSelectFlex>
      )}
    </div>
  );
};

export default ProductShowcase;
