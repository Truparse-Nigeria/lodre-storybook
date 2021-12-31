import { ElementType, FC } from 'react';
export interface IInput {
    subText?: string;
    trailing?: ElementType | string;
    leading?: ElementType | string;
    type: string;
    placeholder: string;
    width?: string;
}
declare const Input: FC<IInput & Record<string, any>>;
export default Input;
//# sourceMappingURL=input.d.ts.map