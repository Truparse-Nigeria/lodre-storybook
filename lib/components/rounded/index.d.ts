import { HTMLAttributes, FC, ReactChild, ReactChildren } from 'react';
import { ComponentSize } from '../../tokens/sizes';
import { PaletteType } from '../../tokens/color';
export interface IRounded {
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
    borderRadius?: ComponentSize;
    borderColor?: PaletteType;
}
declare const Rounded: FC<IRounded & HTMLAttributes<HTMLDivElement>>;
export default Rounded;
//# sourceMappingURL=index.d.ts.map