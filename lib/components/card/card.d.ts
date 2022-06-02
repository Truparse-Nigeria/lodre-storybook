import { FC, HTMLAttributes, ReactChild, ReactChildren } from "react";
import { PaletteType } from "../../tokens/color";
import { ComponentSize } from "../../tokens/sizes";
export interface ICard {
    bgColor?: PaletteType;
    border?: boolean;
    padding?: ComponentSize;
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
export interface IProductCard extends ICard {
    src: string;
    height?: number;
}
export interface ISideProductCard extends IProductCard {
    imgSize: "small" | "default";
}
export declare const CardHeader: FC<ICard & HTMLAttributes<HTMLDivElement>>;
export declare const CardBody: FC<ICard & HTMLAttributes<HTMLDivElement>>;
declare const Card: FC<ICard & HTMLAttributes<HTMLDivElement>>;
export declare const ProductCard: FC<IProductCard & HTMLAttributes<HTMLDivElement>>;
export declare const SideProductCard: FC<ISideProductCard & HTMLAttributes<HTMLDivElement>>;
export declare const RoundedImg: FC<IProductCard & HTMLAttributes<HTMLImageElement>>;
export declare const Img: FC<IProductCard & HTMLAttributes<HTMLImageElement>>;
export default Card;
//# sourceMappingURL=card.d.ts.map