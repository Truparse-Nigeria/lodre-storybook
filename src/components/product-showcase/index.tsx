import React, { FC, useState } from "react";

import {
  StyledImageSelectFlex,
  StyledSelectedImage,
  StyledSmallImages,
} from "./styled";

export interface ProductShowcaseProps {
  pictures: string[];
}

const ProductShowcase: FC<ProductShowcaseProps> = ({ pictures }) => {
  const [selected, setSelected] = useState<string>(pictures[0]);

  return (
    <div>
      <StyledSelectedImage src={selected} alt="product display" />
      <StyledImageSelectFlex className="mt-10">
        {pictures.map((item: string, index: number) => (
          <StyledSmallImages
            selected={selected === item}
            src={item}
            key={index}
            alt="product showcase"
            onClick={() => setSelected(item)}
          />
        ))}
      </StyledImageSelectFlex>
    </div>
  );
};

export default ProductShowcase;
