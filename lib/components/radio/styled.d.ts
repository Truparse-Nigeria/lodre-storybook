import { PaletteType } from "../../tokens/color";
interface StyledRadioProps {
    fullWidth?: boolean;
    forColor?: boolean;
    hexColor?: string;
    dismissable?: boolean;
}
interface StyledDismissableProps {
    background?: PaletteType;
    foreground?: PaletteType;
}
export declare const StyledRadioContainer: import("styled-components").StyledComponent<"label", any, StyledRadioProps, never>;
export declare const StyledRadioText: import("styled-components").StyledComponent<"div", any, StyledRadioProps, never>;
export declare const StyledColorRadio: import("styled-components").StyledComponent<"div", any, StyledRadioProps, never>;
export declare const StyledSubLabel: import("styled-components").StyledComponent<"small", any, {}, never>;
export declare const StyledRadio: import("styled-components").StyledComponent<"input", any, StyledRadioProps, never>;
export declare const StyledDismissable: import("styled-components").StyledComponent<"button", any, StyledDismissableProps, never>;
export default StyledRadio;
//# sourceMappingURL=styled.d.ts.map