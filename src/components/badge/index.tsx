import React, { FC, ReactChild, ReactChildren } from "react";
import { PALETTE } from "../../tokens/color";
import { StyledBadge } from "./styled";

export interface BadgeProps {
  borderColor?: string;
  fillColor?: string;
  color?: string;
  children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}

const Badge: FC<BadgeProps> = ({
  borderColor = PALETTE.primary,
  fillColor = PALETTE.primary,
  color = PALETTE.dark,
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
