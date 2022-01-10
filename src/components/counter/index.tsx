import React, { useState } from "react";
import { Flex } from "..";
import { Minus, Plus } from "../../icons";
import { StyledCounterButton, StyledCounterValue } from "./styled";

export interface CounterControlProps {
  maxValue: number;
}

const Counter = ({ maxValue, ...props }: CounterControlProps) => {
  const [count, setCount] = useState(99999);

  return (
    <Flex gap={0.4} alignItems="center">
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
    </Flex>
  );
};

export default Counter;
