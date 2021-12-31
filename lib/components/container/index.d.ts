import { FC, ReactNode } from 'react';
import { PaletteType } from '../../tokens/color';
export interface IContainer {
    children: ReactNode | JSX.Element | JSX.Element[];
    fluid?: boolean;
    bgColor?: PaletteType;
}
declare const Container: FC<IContainer>;
export default Container;
//# sourceMappingURL=index.d.ts.map