export declare type flexAlignmentType = 'start' | 'center' | 'space-evenly' | 'space-between' | 'end';
export declare type textAlignmentType = 'left' | 'right' | 'center';
declare type colType = {
    size?: number;
    align?: textAlignmentType;
};
declare type flexType = {
    gap: number;
    justifyContent: flexAlignmentType;
    alignItems: flexAlignmentType;
};
export declare const StyledFlex: import("styled-components").StyledComponent<"div", any, flexType, never>;
export declare const StyledCol: import("styled-components").StyledComponent<"div", any, colType, never>;
export {};
//# sourceMappingURL=styled.d.ts.map