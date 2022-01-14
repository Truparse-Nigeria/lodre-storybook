import styled from "styled-components";
import { PALETTE, PaletteType } from "../../tokens/color";

export interface StyledProfilePictureProps {
  size: number;
  state: PaletteType;
}

export const StyledProfilePicture = styled.div<StyledProfilePictureProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  outline: 2px solid
    ${(props) => (props.state ? PALETTE[props.state] : PALETTE["primary"])};
  outline-offset: 1.5px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    object-fit: cover;
  }
`;
