import React, { InputHTMLAttributes, useState } from "react";
import { Col, Container, Flex, Input } from "..";
import { Minus } from "../../icons";
import StyledRange, {
  StyledRangeContainer,
  StyledRangeDisplay,
} from "./styled";

export interface RangeControlProps extends InputHTMLAttributes<InputEvent> {
  initialMinValue: string;
  initialMaxValue: string;
  minProps: InputHTMLAttributes<InputEvent>;
  maxProps: InputHTMLAttributes<InputEvent>;
}

const Range = ({
  minValue,
  maxValue,
  minProps,
  maxProps,
  ...props
}: any & RangeControlProps) => {
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
          <StyledRangeDisplay
            type="text"
            value={min}
            readOnly={false}
            {...minProps}
          />
        </Col>
        <Col>
          <Minus />
        </Col>
        <Col>
          <StyledRangeDisplay
            type="text"
            value={max}
            readOnly={false}
            {...maxProps}
          />
        </Col>
      </Flex>
    </Container>
  );
};

export default Range;
