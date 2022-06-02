import { ElementType, FC, InputHTMLAttributes } from "react";
export interface IInput {
    subText?: string;
    trailing?: JSX.Element | ElementType | string;
    leading?: JSX.Element | ElementType | string;
    type: string;
    placeholder: string;
    width?: string;
    margin?: boolean;
    onSubmit?: () => void;
}
declare const Input: FC<IInput & InputHTMLAttributes<HTMLInputElement>>;
export declare const SearchInput: FC<IInput & InputHTMLAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=input.d.ts.map