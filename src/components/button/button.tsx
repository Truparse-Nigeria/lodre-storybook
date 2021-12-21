import React, { FC, ReactNode } from 'react';
import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';
import { StyledButton } from './styled';

export type ButtonVariant = 'block' | 'outline';

export interface IButton {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ComponentSize;
  usage?: PaletteType;
  onClick?: () => void;
}

const Button: FC<IButton & Record<string, any>> = ({
  children,
  variant = 'block',
  size = 'default',
  usage = 'primary',
  ...rest
}) => {
  return (
    <StyledButton size={size} variant={variant} usage={usage} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
