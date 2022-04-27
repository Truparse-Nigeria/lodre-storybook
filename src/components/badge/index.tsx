import React, { FC, ReactChild, ReactChildren } from "react";
import { PaletteType } from "../../tokens/color";
import { StyledBadge } from "./styled";

export interface BadgeProps {
  borderColor: PaletteType;
  fillColor: PaletteType;
  color: PaletteType;
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const Badge: FC<BadgeProps> = ({
  borderColor = "primary",
  fillColor = "primary",
  color = "dark",
  children,
}) => {
  return (
    <>
      <StyledBadge
        borderColor={borderColor}
        fillColor={fillColor}
        color={color}
      >
        {children}
      </StyledBadge>
    </>
  );
};

export default Badge;
