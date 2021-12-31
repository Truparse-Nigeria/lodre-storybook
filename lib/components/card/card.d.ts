import { FC, ReactChild, ReactChildren } from 'react';
import { PaletteType } from '../../tokens/color';
import { ComponentSize } from '../../tokens/sizes';
export interface ICard {
    bgColor?: PaletteType;
    padding?: ComponentSize;
    children: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
export interface IProductCard extends ICard {
    src: string;
    height?: number;
}
export interface ISideProductCard extends IProductCard {
    imgSize: 'small' | 'default';
}
declare const Card: FC<ICard>;
export declare const ProductCard: FC<IProductCard>;
export declare const SideProductCard: FC<ISideProductCard>;
export default Card;
//# sourceMappingURL=card.d.ts.map