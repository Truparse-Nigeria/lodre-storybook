import React, { FC, HTMLAttributes, ReactNode } from "react";
import { PaletteType } from "../../tokens/color";
import { ComponentSize } from "../../tokens/sizes";
import { StyledButton } from "./styled";

export type ButtonVariant = "block" | "outline" | "stripped";

export interface IButton {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ComponentSize;
  usage?: PaletteType;
  fluid?: boolean;
  iconOnly?: boolean;
}

const Button: FC<IButton & HTMLAttributes<HTMLButtonElement>> = ({
  children,
  variant = "block",
  size = "default",
  usage = "primary",
  fluid = false,
  iconOnly = false,
  ...rest
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      usage={usage}
      fluid={fluid}
      iconOnly={iconOnly}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
