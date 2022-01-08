import { InputHTMLAttributes } from "react";
export interface RadioControlProps extends InputHTMLAttributes<InputEvent> {
    label: string;
    subLabel?: string;
    fullWidth?: boolean;
    forColor?: boolean;
}
declare const Radio: ({ label, subLabel, fullWidth, forColor, hexColor, ...props }: any & RadioControlProps) => JSX.Element;
export default Radio;
//# sourceMappingURL=index.d.ts.map