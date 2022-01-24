import { FC, ReactChild, ReactChildren } from "react";
export interface INavbar {
    nav?: JSX.Element | JSX.Element[];
    logo?: JSX.Element;
    sideNavSize?: number;
    children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
    navChildren?: ReactChild | ReactChildren | JSX.Element | JSX.Element[];
}
declare const MerchantNavbar: FC<INavbar>;
export default MerchantNavbar;
//# sourceMappingURL=index.d.ts.map