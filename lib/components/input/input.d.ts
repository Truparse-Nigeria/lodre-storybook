import { ElementType, FC, HTMLAttributes } from 'react';
export interface IInput {
    subText?: string;
    trailing?: ElementType | string;
    leading?: ElementType | string;
    type: string;
    placeholder: string;
    width?: string;
    onSubmit?: () => void;
}
declare const Input: FC<IInput & HTMLAttributes<HTMLInputElement>>;
export declare const SearchInput: FC<IInput & HTMLAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=input.d.ts.map