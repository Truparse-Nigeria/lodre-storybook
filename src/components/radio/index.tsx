import React, { InputHTMLAttributes } from "react";
import StyledRadio from "./styled";

export interface RadioControlProps extends InputHTMLAttributes<InputEvent> {
  label: string;
}

const Radio = ({ label, ...props }: any & RadioControlProps) => {
  return (
    <>
      <StyledRadio {...props} />
      <small>{label}</small>
    </>
  );
};

export default Radio;
