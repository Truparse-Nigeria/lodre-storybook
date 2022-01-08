import React, { InputHTMLAttributes, useState } from "react";
import { StyledInput } from "../input/styled";
import StyledRange, { StyledRangeContainer } from "./styled";

export interface RangeControlProps extends InputHTMLAttributes<InputEvent> {
  initialMinValue: string;
  initialMaxValue: string;
}

const Range = ({
  initialMinValue,
  initialMaxValue,
  ...props
}: any & RangeControlProps) => {
  const [min, setMin] = useState<string>(initialMinValue);
  const [max, setMax] = useState<string>(initialMaxValue);

  return (
    <>
      <StyledRangeContainer>
        <small>₦ {new Intl.NumberFormat().format(Number(min))}</small>
        <StyledRange min={min} max={max} {...props} />
        <small>₦ {new Intl.NumberFormat().format(Number(max))}</small>
      </StyledRangeContainer>

      <div>
        <StyledInput
          width="10%"
          defaultValue={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Min"
        />
        {" - "}
        <StyledInput
          width="10%"
          defaultValue={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Max"
        />
      </div>
    </>
  );
};

export default Range;
