import { ElementType, FC, HTMLAttributes } from "react";
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
declare const Input: FC<IInput & HTMLAttributes<HTMLInputElement>>;
export declare const SearchInput: FC<IInput & HTMLAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=input.d.ts.map