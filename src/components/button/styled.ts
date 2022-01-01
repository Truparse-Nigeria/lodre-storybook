import styled from 'styled-components';
import { ButtonVariant } from '.';
import { PALETTE, PaletteType } from '../../tokens/color';
import { FONT_SIZE, FONT_WEIGHT, TYPOGRAPHY } from '../../tokens/font';
import { ComponentSize, HEIGHTS, RADIUS, SIDE_PADDINGS } from '../../tokens/sizes';

interface StyledButtonProps {
  size: ComponentSize;
  variant: ButtonVariant;
  usage: PaletteType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${RADIUS.small}px;
  border: ${(props) =>
    props.variant === 'block'
      ? `1px solid ${PALETTE[props.usage]}`
      : `1px solid ${PALETTE.dark}`};
  cursor: pointer;
  padding: 0 ${(props) => SIDE_PADDINGS[props.size]}px;
  font-size: ${FONT_SIZE.pSmall}px;
  font-weight: ${FONT_WEIGHT.w700};
  height: ${(props) => HEIGHTS.buttons[props.size] || 0}px;
  color: ${PALETTE.dark};
  background-color: ${(props) =>
    props.variant === 'block' ? PALETTE[props.usage] : 'transparent'};
  min-width: 200px;

  &:hover {
    opacity: 0.8;
  }
`;