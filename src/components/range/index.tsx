import React, { FC, InputHTMLAttributes } from "react";
import { Container } from "..";
import StyledRange, { StyledRangeContainer } from "./styled";

export interface RangeControlProps {
  minValue: string;
  maxValue: string;
}

const Range: FC<
  (RangeControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>) | any
> = ({ minValue, maxValue, min, max }) => {
  return (
    <Container fluid>
      <StyledRangeContainer>
        <StyledRange min={minValue} max={maxValue} {...min} />
        <StyledRange min={minValue} max={maxValue} {...max} />
      </StyledRangeContainer>
    </Container>
  );
};

export default Range;
