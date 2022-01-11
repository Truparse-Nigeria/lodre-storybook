import React, { FC } from "react";
import { PALETTE, PaletteType } from "../../tokens/color";
import { StyledHr } from "./styled";

export interface DividerProps {
  colorValue: PaletteType;
}

const Divider: FC<DividerProps> = ({ colorValue }) => {
  return (
    <>
      <StyledHr colorValue={PALETTE[colorValue]} />
    </>
  );
};

export default Divider;
