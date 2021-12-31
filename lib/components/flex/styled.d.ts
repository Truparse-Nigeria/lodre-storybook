declare type colType = {
    size?: number;
};
declare type flexType = {
    gap: number;
    justifyContent: 'start' | 'center' | 'space-evenly' | 'space-between' | 'end';
    alignItems: 'start' | 'center' | 'space-evenly' | 'space-between' | 'flex-end';
};
export declare const StyledFlex: import("styled-components").StyledComponent<"div", any, flexType, never>;
export declare const StyledCol: import("styled-components").StyledComponent<"div", any, colType, never>;
export {};
//# sourceMappingURL=styled.d.ts.map