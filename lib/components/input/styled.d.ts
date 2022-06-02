import { ElementType } from "react";
declare type InputType = {
    width: string;
};
declare type InputFlexType = {
    trailing?: JSX.Element | ElementType | String;
    leading?: JSX.Element | ElementType | String;
};
declare type InputContainerType = {
    margin: boolean;
};
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, InputType, never>;
export declare const StyledInputFlex: import("styled-components").StyledComponent<"div", any, InputFlexType, never>;
export declare const StyledInputPrefix: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledInputSuffix: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledInputContainer: import("styled-components").StyledComponent<"div", any, InputContainerType, never>;
export declare const StyledSearchInput: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const StyledSearchButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};
//# sourceMappingURL=styled.d.ts.map