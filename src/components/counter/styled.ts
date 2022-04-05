import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

interface CounterProps {
  overTheLimit: boolean;
  underTheLimit: boolean;
}

export const StyledCounterValue = styled.input<CounterProps>`
  border: 1px solid
    ${(props) =>
      props.overTheLimit || props.underTheLimit ? "red" : "transparent"};
  border-radius: 10px;
  text-align: center;
  outline: none;
  font-weight: ${FONT_WEIGHT.w600};
  width: auto;
  height: 50px;
  padding: 25px;
  position: relative;

  ::-webkit-inner-spin-button {
    cursor: pointer;
    visibility: visible !important;
  }
`;

export const StyledCounterButton = styled.button`
  padding: 15px;
  border-radius: 50%;
  background-color: ${PALETTE.grey};
  border: none;
`;

export const StyledCounterContainer = styled.div<CounterProps>`
  .danger {
    color: red;
  }
`;
