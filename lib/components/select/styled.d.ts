import { PaletteType } from "../../tokens/color";
interface SideSelectFieldProps {
    focused: boolean;
    borderRadius?: string;
    background: PaletteType;
    height?: number;
}
interface Options {
    selected: boolean;
}
export declare const StyledSelectField: import("styled-components").StyledComponent<"div", any, SideSelectFieldProps, never>;
export declare const StyledOptionsContainer: import("styled-components").StyledComponent<"div", any, SideSelectFieldProps, never>;
export declare const StyledOptions: import("styled-components").StyledComponent<"div", any, Options, never>;
export {};
//# sourceMappingURL=styled.d.ts.map