import React, { InputHTMLAttributes } from "react";
import StyledCheckbox, { StyledCheckboxContainer } from "./styled";

export interface CheckboxControlProps extends InputHTMLAttributes<InputEvent> {
  label: string;
}

const Checkbox = ({ label, ...props }: any & CheckboxControlProps) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox {...props} />
      <small>{label}</small>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
