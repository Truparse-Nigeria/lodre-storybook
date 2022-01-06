import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledRadioProps {
  checked: boolean;
}

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHiddenRadio = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 0px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: relative;
  white-space: nowrap;
  width: 0px;
`;

export const StyledRadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  ::before {
    cursor: pointer;
    position: absolute;
    left: 0px;
    content: " ";
    width: 16px;
    height: 16px;
    border: 2px solid ${PALETTE.dark};
    border-radius: 15px;
  }

  ::after {
    cursor: pointer;
    position: absolute;
    left: 5px;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 15px;
    background-color: ${PALETTE.primary};
  }
`;

export const StyledRadioText = styled.small`
  margin: 0 30px;
`;

export default StyledHiddenRadio;
