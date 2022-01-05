import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

interface StyledCheckboxProps {
  checked: boolean;
}

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckIcon = styled.svg`
  fill: none;
  stroke: ${PALETTE.dark};
  stroke-width: 3px;
  vertical-align: top;
`;

export const StyledHiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.checked ? PALETTE.primary : PALETTE.light)};
  border: 1.5px solid
    ${(props) => (props.checked ? PALETTE.light : PALETTE.dark)};
  border-radius: 3px;
  transition: all 150ms;

  ${StyledHiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${PALETTE.primary};
  }

  ${StyledCheckIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const StyledLabel = styled.small`
  margin: 0 5px;
`;

export default StyledCheckbox;
