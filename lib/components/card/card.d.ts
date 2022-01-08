import { FC, HTMLAttributes, ReactChild, ReactChildren } from 'react';
import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';
export interface ICard {
    bgColor?: PaletteType;
    padding?: ComponentSize;
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
export interface IProductCard extends ICard {
    src: string;
    height?: number;
}
export interface ISideProductCard extends IProductCard {
    imgSize: 'small' | 'default';
}
declare const Card: FC<ICard & HTMLAttributes<HTMLDivElement>>;
export declare const ProductCard: FC<IProductCard & HTMLAttributes<HTMLDivElement>>;
export declare const SideProductCard: FC<ISideProductCard & HTMLAttributes<HTMLDivElement>>;
export declare const RoundedImg: FC<IProductCard>;
export declare const Img: FC<IProductCard>;
export default Card;
//# sourceMappingURL=card.d.ts.map