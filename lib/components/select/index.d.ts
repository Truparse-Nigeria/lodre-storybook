import { FC } from "react";
import { PaletteType } from "../../tokens/color";
declare type Options = {
    value: string;
    text: string;
};
interface SelectFieldProps {
    options: Options[];
    placeholder?: string;
    borderRadius?: string;
    handleChange: Function;
    background?: PaletteType;
    defaultValue?: string;
    height?: number;
}
declare const SelectField: FC<SelectFieldProps>;
export default SelectField;
//# sourceMappingURL=index.d.ts.map