import { FC, ReactChild } from "react";
export interface DropdownProps {
    buttonChildren: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
    children: ReactChild | ReactChild[] | JSX.Element | JSX.Element[];
    border?: boolean;
    width?: number;
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map