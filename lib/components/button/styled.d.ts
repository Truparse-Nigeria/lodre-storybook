import { ButtonVariant } from ".";
import { PaletteType } from "../../tokens/color";
import { ComponentSize } from "../../tokens/sizes";
interface StyledButtonProps {
    size: ComponentSize;
    variant: ButtonVariant;
    usage: PaletteType;
    fluid?: boolean;
    iconOnly?: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export declare const StyledLoading: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=styled.d.ts.map