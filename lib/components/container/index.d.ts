import { FC, ReactNode } from 'react';
export interface IContainer {
    children: ReactNode | JSX.Element | JSX.Element[];
    fluid?: boolean;
}
declare const Container: FC<IContainer>;
export default Container;
//# sourceMappingURL=index.d.ts.map