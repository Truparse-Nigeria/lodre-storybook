import { FC } from 'react';
export interface IGrid {
    children: JSX.Element | JSX.Element[];
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xs?: string;
    gap?: number;
}
declare const Grid: FC<IGrid>;
export default Grid;
//# sourceMappingURL=grid.d.ts.map