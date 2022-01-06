import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledCheckboxProps {
  checked: boolean;
}

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

export const StyledCheckboxLabel = styled.label`
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
    border-radius: 5px;
  }

  ::after {
    cursor: pointer;
    position: absolute;
    left: 2px;
    content: "✓";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 2.5px;
    background-color: ${PALETTE.primary};
  }
`;

export const StyledCheckboxText = styled.small`
  margin: 0 30px;
`;

export default StyledHiddenCheckbox;
