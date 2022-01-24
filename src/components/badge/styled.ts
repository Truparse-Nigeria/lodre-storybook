import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";

export interface StyledBadgeProps {
  borderColor?: PaletteType;
  fillColor?: PaletteType;
  color?: PaletteType;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  padding: 5px 10px;
  border-radius: 10px;
  outline: 2px solid
    ${(props) => props.borderColor && PALETTE[props.borderColor]};
  outline-offset: 0px;
  background: ${(props) => props.fillColor && PALETTE[props.fillColor]};
  color: ${(props) => props.color && PALETTE[props.color]};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
