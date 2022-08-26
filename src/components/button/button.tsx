import React, {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Loading } from "../../icons";
import { PaletteType } from "../../tokens/color";
import { ComponentSize } from "../../tokens/sizes";
import { Flex } from "../flex";
import { StyledButton, StyledLoading } from "./styled";

export type ButtonVariant = "block" | "outline";

export interface IButton {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ComponentSize;
  usage?: PaletteType;
  color?: PaletteType;
  fluid?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
}

const Button: FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  variant = "block",
  size = "default",
  usage = "primary",
  color = "dark",
  fluid = false,
  iconOnly = false,
  loading = false,
  ...rest
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      usage={usage}
      color={color}
      fluid={fluid}
      iconOnly={iconOnly}
      {...rest}
    >
      {children} {loading && <StyledLoading><Loading width={24} height={24} /></StyledLoading>}
    </StyledButton>
  );
};

export default Button;
