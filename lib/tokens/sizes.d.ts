export declare type ComponentSize = 'default' | 'large' | 'small';
declare type ComponentType = 'inputs' | 'buttons';
declare type Elements = {
    [key in ComponentSize]: number;
};
export declare type ViewportType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export declare const VIEWPORT: {
    [key in ViewportType]?: number;
};
export declare const SIDE_PADDINGS: {
    [key in ComponentSize]: number;
};
export declare const RADIUS: {
    [key in ComponentSize]: number;
};
export declare const HEIGHTS: {
    [key in ComponentType]: Elements;
};
export declare const CONTAINER = 1140;
export declare const mediaQueries: (key: keyof typeof VIEWPORT) => (style: TemplateStringsArray | String) => string;
export {};
//# sourceMappingURL=sizes.d.ts.map