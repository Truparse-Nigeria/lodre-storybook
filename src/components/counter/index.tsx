import React, { useState } from "react";
import { Paragraph } from "..";
import { Minus, Plus } from "../../icons";
import {
  StyledCounterButton,
  StyledCounterContainer,
  StyledCounterValue,
} from "./styled";

export interface CounterControlProps {
  maxValue: number;
  handleChange: (count: number) => void;
}

const Counter = ({ maxValue, handleChange, ...props }: CounterControlProps) => {
  const [count, setCount] = useState(1);

  return (
    <StyledCounterContainer
      overTheLimit={count > maxValue}
      underTheLimit={count === 0}
    >
      <StyledCounterButton
        onClick={() => {
          setCount(count - 1);
          handleChange(count - 1);
        }}
        disabled={count === 1}
      >
        <Minus width={18} height={18} />
      </StyledCounterButton>
      <StyledCounterValue
        overTheLimit={count > maxValue}
        underTheLimit={count === 0}
        type="number"
        value={count}
        min={1}
        max={maxValue}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
          handleChange(parseInt(e.target.value));
        }}
        defaultValue={count}
        {...props}
      />
      <StyledCounterButton
        onClick={() => {
          setCount(count + 1);
          handleChange(count + 1);
        }}
        disabled={count === maxValue}
      >
        <Plus width={18} height={18} />
      </StyledCounterButton>
      {count > maxValue && (
        <Paragraph size="small" className="py-10 danger">
          You above the stocked number
        </Paragraph>
      )}
      {count === 0 && (
        <Paragraph size="small" className="py-10 danger">
          Minimun number of items can only be 1
        </Paragraph>
      )}
    </StyledCounterContainer>
  );
};

export default Counter;
