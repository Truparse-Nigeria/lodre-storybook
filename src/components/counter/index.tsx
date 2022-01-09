import React, { useState } from "react";
import { Minus, Plus } from "../../icons";
import {
  StyledCounterButton,
  StyledCounterContainer,
  StyledCounterValue,
} from "./styled";

export interface CounterControlProps {
  maxValue: number;
}

const Counter = ({ maxValue, ...props }: CounterControlProps) => {
  const [count, setCount] = useState(0);

  return (
    <StyledCounterContainer>
      <StyledCounterButton
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
      >
        <Minus />
      </StyledCounterButton>
      <StyledCounterValue value={count} {...props} />
      <StyledCounterButton
        disabled={count === maxValue}
        onClick={() => setCount(count + 1)}
      >
        <Plus />
      </StyledCounterButton>
    </StyledCounterContainer>
  );
};

export default Counter;
