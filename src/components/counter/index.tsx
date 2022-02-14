import React, { useState } from "react";
import { Paragraph } from "..";
import { StyledCounterContainer, StyledCounterValue } from "./styled";

export interface CounterControlProps {
  maxValue: number;
  handleChange: Function;
}

const Counter = ({ maxValue, handleChange, ...props }: CounterControlProps) => {
  const [count, setCount] = useState(0);

  return (
    <StyledCounterContainer overTheLimit={count > maxValue}>
      <StyledCounterValue
        type={"number"}
        min={1}
        max={maxValue}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
          handleChange(count);
        }}
        defaultValue={count}
        {...props}
      />
      {count > maxValue && <Paragraph>You above the stocked number</Paragraph>}
    </StyledCounterContainer>
  );
};

export default Counter;
