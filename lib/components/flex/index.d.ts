import { FC, ReactNode } from 'react';
export interface IFlex {
    children: JSX.Element | JSX.Element[];
    gap?: number;
    justifyContent?: 'start' | 'center' | 'space-evenly' | 'space-between' | 'end';
    alignItems?: 'start' | 'center' | 'space-evenly' | 'space-between' | 'flex-end';
}
export interface ICol {
    children: ReactNode | JSX.Element | JSX.Element[];
    size?: number;
}
export declare const Flex: FC<IFlex>;
export declare const Col: FC<ICol>;
//# sourceMappingURL=index.d.ts.map