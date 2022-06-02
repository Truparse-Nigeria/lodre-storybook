import { FC, InputHTMLAttributes } from "react";
import { PaletteType } from "../../tokens/color";
export interface RadioControlProps {
    label?: string;
    subLabel?: string;
    fullWidth?: boolean;
    forColor?: boolean;
    hexColor?: string;
    dismissable?: boolean;
    dismissableStyle?: {
        background: PaletteType;
        foreground: PaletteType;
    };
    callback?: Function;
}
declare const Radio: FC<RadioControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>>;
export default Radio;
//# sourceMappingURL=index.d.ts.map