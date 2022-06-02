import { PaletteType } from "../../tokens/color";
interface TabProps {
    active: boolean;
    foreground?: PaletteType;
}
interface TabsProps {
    centered?: boolean;
    background?: PaletteType;
    foreground?: PaletteType;
    radius?: boolean;
    number?: number;
}
export declare const StyledTabTitle: import("styled-components").StyledComponent<"button", any, TabProps, never>;
export declare const TabGroup: import("styled-components").StyledComponent<"div", any, TabsProps, never>;
export declare const TabContainer: import("styled-components").StyledComponent<"div", any, TabsProps, never>;
export declare const StyledFullWidthContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=styled.d.ts.map