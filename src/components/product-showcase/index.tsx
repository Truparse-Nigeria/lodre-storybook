import React, { FC, useCallback, useEffect, useState } from "react";
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
  showThumbs?: boolean;
  showButtons?: boolean;
  showIndicators?: boolean;
}

const ProductShowcase: FC<ProductShowcaseProps> = ({
  pictures,
  height,
  timeout = 3000,
  showButtons = true,
  showThumbs = true,
  showIndicators = true,
}) => {
  const [key, setKey] = useState<number>(0);
  const [selected, setSelected] = useState<string>(pictures[key]);

  const goForward = useCallback(() => {
    if (key === pictures.length - 1) {
      setKey(0);
    } else {
      setKey(key + 1);
    }
  }, [key, pictures.length]);

  const goBack = useCallback(() => {
    if (key === 0) {
      setKey(pictures.length - 1);
    } else {
      setKey(key - 1);
    }
  }, [key, pictures.length]);

  useEffect(() => {
    setSelected(pictures[key]);
  }, [key, pictures]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goForward();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [goForward, timeout]);

  return (
    <>
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
              .fill("indicator")
              .map((item: any, index: number) => (
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
              onClick={() => setKey(index)}
            />
          ))}
        </StyledImageSelectFlex>
      )}
    </>
  );
};

export default ProductShowcase;
