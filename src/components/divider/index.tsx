import React from "react";
import { PALETTE, PaletteType } from "../../tokens/color";
import { StyledHr } from "./styled";

export interface DividerProps {
  colorValue: PaletteType;
}

const Divider = ({ colorValue }: DividerProps) => {
  return (
    <>
      <StyledHr colorValue={PALETTE[colorValue]} />
    </>
  );
};

export default Divider;
