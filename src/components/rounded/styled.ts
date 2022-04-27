import styled from 'styled-components';
import { PALETTE, PaletteType } from '../../tokens/color';
import { ComponentSize, RADIUS } from '../../tokens/sizes';

interface StyledRoundedProps {
  borderRadius: ComponentSize;
  borderColor?: PaletteType;
}

export const StyledRounded = styled.div<StyledRoundedProps>`
  border-radius: ${(props) => RADIUS[props.borderRadius]}px;
  ${(props) =>
    props.borderColor &&
    `
  border: 2px solid ${PALETTE[props.borderColor]};
  `}
  overflow: hidden;
`;
