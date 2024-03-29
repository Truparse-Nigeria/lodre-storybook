import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";

interface StyledRadioProps {
  fullWidth?: boolean;
  forColor?: boolean;
  hexColor?: string;
  dismissable?: boolean;
}

interface StyledDismissableProps {
  background?: PaletteType;
  foreground?: PaletteType;
}

export const StyledRadioContainer = styled.label<StyledRadioProps>`
  display: flex;
  align-items: ${(props) => (props.fullWidth ? "flex-start" : "center")};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  border: ${(props) =>
    props.fullWidth ? `1.5px solid ${PALETTE.border}` : `none`};
  padding: ${(props) => (props.fullWidth ? "20px" : "0px")};
  border-radius: ${(props) => props.fullWidth && "5px"};
  cursor: pointer;
  position: relative;
`;

export const StyledRadioText = styled.div<StyledRadioProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  font-weight: ${(props) =>
    props.fullWidth ? FONT_WEIGHT.w500 : FONT_WEIGHT.w400};
`;

export const StyledColorRadio = styled.div<StyledRadioProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.hexColor};
  border-radius: 50%;
`;

export const StyledSubLabel = styled.small`
  color: ${PALETTE.ash};
  margin-top: 5px;
`;

export const StyledRadio = styled.input<StyledRadioProps>`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${PALETTE.light};
  margin: 0 5px;
  font: inherit;
  color: ${PALETTE.dark};
  width: 1.15em;
  height: 1.15em;
  border: 2px solid ${PALETTE.dark};
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &:checked {
    border: 2px solid ${PALETTE.primary};
    background-color: ${PALETTE.primary};
  }

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${PALETTE.primary};
    border-radius: 50%;
  }

  &:checked::before {
    transform: scale(1);
  }

  margin: 0 5px;
  display: ${(props) => (props.forColor ? "none" : "block")};

  &:checked + ${StyledColorRadio} {
    outline: 3px solid ${PALETTE.primary};
    outline-offset: 3px;
  }
`;

export const StyledDismissable = styled.button<StyledDismissableProps>`
  position: absolute;
  top: -5px;
  right: 5px;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    props.background ? PALETTE[props.background] : PALETTE["dark"]};

  svg {
    path {
      fill: ${(props) =>
        props.background ? PALETTE[props.background] : PALETTE["light"]};
    }
  }
`;

export default StyledRadio;
