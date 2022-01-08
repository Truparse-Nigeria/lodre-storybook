import React, { InputHTMLAttributes } from "react";
import StyledRadio, {
  StyledColorRadio,
  StyledRadioContainer,
  StyledRadioText,
  StyledSubLabel,
} from "./styled";

export interface RadioControlProps extends InputHTMLAttributes<InputEvent> {
  label: string;
  subLabel?: string;
  fullWidth?: boolean;
  forColor?: boolean;
}

const Radio = ({
  label,
  subLabel,
  fullWidth,
  forColor,
  hexColor,
  ...props
}: any & RadioControlProps) => {
  return (
    <StyledRadioContainer fullWidth={fullWidth}>
      <StyledRadio forColor={forColor} {...props} />
      {forColor && <StyledColorRadio hexColor={hexColor} />}
      <StyledRadioText fullWidth={fullWidth} forColor={forColor}>
        <small>{label}</small>
        <StyledSubLabel>{subLabel}</StyledSubLabel>
      </StyledRadioText>
    </StyledRadioContainer>
  );
};

export default Radio;
