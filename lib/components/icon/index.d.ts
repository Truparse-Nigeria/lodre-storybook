import { FC, ReactChild, ReactChildren } from 'react';
import { PaletteType } from '../../tokens/color';
export interface IIcon {
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
    bgColor?: PaletteType;
    height?: number;
    width?: number;
}
export declare const Icon: FC<IIcon>;
//# sourceMappingURL=index.d.ts.map