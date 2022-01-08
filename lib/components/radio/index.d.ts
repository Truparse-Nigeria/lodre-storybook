import { InputHTMLAttributes } from "react";
export interface RadioControlProps extends InputHTMLAttributes<InputEvent> {
    label: string;
}
declare const Radio: ({ label, ...props }: any & RadioControlProps) => JSX.Element;
export default Radio;
//# sourceMappingURL=index.d.ts.map