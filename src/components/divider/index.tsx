import React from "react";
import { StyledHr } from "./styled";

export interface DividerProps {
  hexValue?: string;
}

const Divider = ({ hexValue }: DividerProps) => {
  return (
    <>
      <StyledHr hexValue={hexValue} />
    </>
  );
};

export default Divider;
