import { FC, ReactChild, ReactChildren } from 'react';
export interface INavbar {
    search?: JSX.Element;
    nav?: JSX.Element[];
    logo?: JSX.Element;
    bottomNav?: JSX.Element[];
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
declare const Navbar: FC<INavbar>;
export default Navbar;
//# sourceMappingURL=index.d.ts.map