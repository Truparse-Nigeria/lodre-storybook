import React, { FC, InputHTMLAttributes } from "react";
import { SmallText } from "..";
import StyledCheckbox, { StyledCheckboxContainer } from "./styled";

export interface CheckboxControlProps {
  label?: string;
}

const Checkbox: FC<
  CheckboxControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>
> = ({ label, ...props }) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckbox type="checkbox" {...props} />
      {"  "}
      <SmallText>{label}</SmallText>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
