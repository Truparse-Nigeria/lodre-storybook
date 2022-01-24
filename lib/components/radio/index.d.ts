import { FC, InputHTMLAttributes } from "react";
export interface RadioControlProps {
    label?: string;
    subLabel?: string;
    fullWidth?: boolean;
    forColor?: boolean;
    hexColor?: string;
}
declare const Radio: FC<RadioControlProps & InputHTMLAttributes<HTMLInputElement & InputEvent>>;
export default Radio;
//# sourceMappingURL=index.d.ts.map