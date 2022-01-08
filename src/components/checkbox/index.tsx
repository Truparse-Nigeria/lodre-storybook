import React, { InputHTMLAttributes } from "react";
import StyledCheckbox from "./styled";

export interface CheckboxControlProps extends InputHTMLAttributes<InputEvent> {
  label: string;
}

const Checkbox = ({ label, ...props }: any & CheckboxControlProps) => {
  return (
    <>
      <StyledCheckbox {...props} />
      <small>{label}</small>
    </>
  );
};

export default Checkbox;
