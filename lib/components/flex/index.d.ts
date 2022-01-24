import { FC, HTMLAttributes, ReactNode } from 'react';
import { flexAlignmentType, textAlignmentType } from './styled';
export interface IFlex {
    children: JSX.Element | JSX.Element[];
    gap?: number;
    justifyContent?: flexAlignmentType;
    alignItems?: flexAlignmentType;
}
export interface ICol {
    children: ReactNode | JSX.Element | JSX.Element[];
    size?: number;
    align?: textAlignmentType;
}
export declare const Flex: FC<IFlex & HTMLAttributes<HTMLDivElement>>;
export declare const Col: FC<ICol>;
//# sourceMappingURL=index.d.ts.map