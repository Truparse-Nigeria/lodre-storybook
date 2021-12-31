import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';
declare type CardType = {
    bgColor: PaletteType;
};
declare type CardBodyType = {
    padding: ComponentSize;
};
declare type ImageType = {
    height?: number;
};
export declare const StyledCard: import("styled-components").StyledComponent<"div", any, CardType, never>;
export declare const StyledCardBody: import("styled-components").StyledComponent<"div", any, CardBodyType, never>;
export declare const StyledImage: import("styled-components").StyledComponent<"img", any, ImageType, never>;
export declare const StyledImageRounded: import("styled-components").StyledComponent<"img", any, ImageType, never>;
export {};
//# sourceMappingURL=styled.d.ts.map