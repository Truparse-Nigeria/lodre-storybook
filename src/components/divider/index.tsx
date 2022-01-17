import React, { FC } from "react";
import { PALETTE, PaletteType } from "../../tokens/color";
import { StyledHr } from "./styled";

export interface DividerProps {
  colorValue?: PaletteType;
  className?: string;
}

const Divider: FC<DividerProps> = ({ colorValue = 'border', className }) => {
  return (
    <>
      <StyledHr colorValue={PALETTE[colorValue]} className={className} />
    </>
  );
};

export default Divider;
