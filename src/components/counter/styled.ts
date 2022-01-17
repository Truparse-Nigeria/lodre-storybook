import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

export const StyledCounterValue = styled.input`
  text-align: center;
  border: none;
  outline: none;
  font-weight: ${FONT_WEIGHT.w600};
  width: auto;
  height: 50px;
  padding: 25px;
  position: relative;

  ::-webkit-inner-spin-button {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    padding: 10px;
    border-radius: 50px;
  }
`;

export const StyledCounterButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${PALETTE.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;
