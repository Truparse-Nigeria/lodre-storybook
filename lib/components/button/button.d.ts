import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { PaletteType } from "../../tokens/color";
import { ComponentSize } from "../../tokens/sizes";
export declare type ButtonVariant = "block" | "outline";
export interface IButton {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ComponentSize;
    usage?: PaletteType;
    fluid?: boolean;
    iconOnly?: boolean;
    loading?: boolean;
}
declare const Button: FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=button.d.ts.map