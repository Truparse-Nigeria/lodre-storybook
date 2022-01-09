import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

export const StyledCounterContainer = styled.div`
  display: flex;
  align-item: center;
  margin: 5px auto;
`;

export const StyledCounterValue = styled.input`
  text-align: center;
  border: none;
  outline: none;
  font-weight: ${FONT_WEIGHT.w600};
  width: 100px;
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
