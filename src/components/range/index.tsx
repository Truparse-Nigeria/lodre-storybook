import React, { FC, InputHTMLAttributes, useState } from "react";
import { Button, Col, Container, Flex, Input, Paragraph } from "..";
import { Minus } from "../../icons";
import StyledRange, {
  StyledRangeContainer,
  StyledRangeDisplay,
} from "./styled";

export interface RangeControlProps {
  minValue: string;
  maxValue: string;
}

const Range: FC<
  (RangeControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>) | any
> = ({ minValue, maxValue, ...props }) => {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  return (
    <Container fluid>
      <StyledRangeContainer>
        <StyledRange
          min={minValue}
          max={maxValue}
          onChange={(e) => setMin(e.target.value)}
          {...props}
        />
        <StyledRange
          min={minValue}
          max={maxValue}
          onChange={(e) => setMax(e.target.value)}
          {...props}
        />
      </StyledRangeContainer>

      <Flex alignItems="center" className="mt-40">
        <Col>
          <StyledRangeDisplay type="text" value={min} readOnly={false} />
        </Col>
        <Col>
          <Minus />
        </Col>
        <Col>
          <StyledRangeDisplay type="text" value={max} readOnly={false} />
        </Col>
      </Flex>
    </Container>
  );
};

export default Range;
