import React, { InputHTMLAttributes } from "react";
import { SmallText } from "..";
import StyledCheckbox, { StyledCheckboxContainer } from "./styled";

export interface CheckboxControlProps extends InputHTMLAttributes<InputEvent> {
  label: string;
}

const Checkbox = ({ label, ...props }: any & CheckboxControlProps) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox {...props} />
      {"  "}
      <SmallText>{label}</SmallText>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
