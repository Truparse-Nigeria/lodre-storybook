import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";
import StyledCheckbox from "../checkbox/styled";

interface StyledRadioProps {
  fullWidth?: boolean;
  forColor?: boolean;
  hexColor?: string;
}

export const StyledRadioContainer = styled.label<StyledRadioProps>`
  display: flex;
  align-items: ${(props) => (props.fullWidth ? "flex-start" : "center")}
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border: ${(props) =>
    props.fullWidth ? `1.5px solid ${PALETTE.grey}` : `none`};
  padding: ${(props) => (props.fullWidth ? "20px" : "0px")};
  border-radius: ${(props) => props.fullWidth && "5px"};
  cursor: pointer;
`;

export const StyledRadioText = styled.div<StyledRadioProps>`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  font-weight: ${(props) => (props.fullWidth ? FONT_WEIGHT.w500 : "normal")};
`;

export const StyledColorRadio = styled.div<StyledRadioProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.hexColor};
  border-radius: 50%;
`;

export const StyledSubLabel = styled.small`
  color: ${PALETTE.ash};
  margin-top: 5px;
`;

export const StyledRadio = styled.input.attrs({
  type: "radio",
})<StyledRadioProps>`
  margin: 0 5px;
  visibility: ${(props) => (props.forColor ? "hidden" : "visible")};

  &:checked + ${StyledColorRadio} {
    border: 3px solid ${PALETTE.primary};
  }
`;

export default StyledRadio;
