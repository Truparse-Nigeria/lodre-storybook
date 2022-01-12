import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

export const StyledRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;
  position: relative;
`;
const StyledRange = styled.input.attrs({ type: "range" })`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;

  ::-webkit-slider-runnable-track {
    background: ${PALETTE.primary};
    height: 0.25rem;
    border-radius: 5px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    background-color: ${PALETTE.primary};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    position: relative;
    z-index: 25;
  }

  :focus::-webkit-slider-thumb {
    border: 1px solid ${PALETTE.primary};
    outline: 1.5px solid ${PALETTE.ash};
    outline-offset: 0.125rem;
  }
`;

export const StyledRangeDisplay = styled.input`
  padding: 10px;
  width: 80px;
  text-align: center;
  font-weight: ${FONT_WEIGHT.w600};
`;

export default StyledRange;
