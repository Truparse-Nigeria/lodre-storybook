import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

interface CounterProps {
  overTheLimit: boolean;
}

export const StyledCounterValue = styled.input`
  border: none;
  text-align: center;
  outline: none;
  font-weight: ${FONT_WEIGHT.w600};
  width: auto;
  height: 50px;
  padding: 25px;
  position: relative;
`;

export const StyledCounterContainer = styled.div<CounterProps>`
  border: ${(props) => (props.overTheLimit ? `1px solid red` : `none`)};
  padding: 5px;
`;
