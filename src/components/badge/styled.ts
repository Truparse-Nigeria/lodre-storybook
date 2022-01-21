import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";

export interface StyledBadgeProps {
  borderColor?: PaletteType;
  fillColor?: PaletteType;
  color?: PaletteType;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  padding: 10px;
  border-radius: 10px;
  outline: 1px solid
    ${(props) =>
      props.borderColor ? PALETTE[props.borderColor] : PALETTE.primary};
  background: ${(props) =>
    props.fillColor ? PALETTE[props.fillColor] : PALETTE.light};
  color: ${(props) => (props.color ? PALETTE[props.color] : PALETTE.dark)};
`;
