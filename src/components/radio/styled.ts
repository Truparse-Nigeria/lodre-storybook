import styled from "styled-components";
import { PALETTE } from "../../tokens/color";

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const StyledRadioLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
export const StyledRadioButton = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${StyledRadioLabel} {
    background: ${PALETTE.ash};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: ${PALETTE.grey};
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${StyledRadioLabel} {
      background: ${PALETTE.primary};
      border: 1px solid ${PALETTE.primary};

      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: ${PALETTE.dark};
      }
    }
  `}
`;

export default StyledRadioButton;
