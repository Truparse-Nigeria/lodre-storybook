import { FC, HTMLAttributes } from 'react';
import { flexAlignmentType } from '../flex/styled';
export interface IGrid {
    children: JSX.Element | JSX.Element[];
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xs?: string;
    gap?: number;
    justifyContent?: flexAlignmentType;
    alignItems?: flexAlignmentType;
}
declare const Grid: FC<IGrid & HTMLAttributes<HTMLDivElement>>;
export default Grid;
//# sourceMappingURL=grid.d.ts.map