import React, { useState } from "react";
import { Flex } from "..";
import { Minus, Plus } from "../../icons";
import { StyledCounterButton, StyledCounterValue } from "./styled";

export interface CounterControlProps {
  maxValue: number;
}

const Counter = ({ maxValue, ...props }: CounterControlProps) => {
  const [count, setCount] = useState(0);

  return (
    <Flex gap={0.4} alignItems="center">
      <StyledCounterValue
        type={"number"}
        min={1}
        max={maxValue}
        defaultValue={count}
        {...props}
      />
    </Flex>
  );
};

export default Counter;
