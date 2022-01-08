import { InputHTMLAttributes } from "react";
export interface CheckboxControlProps extends InputHTMLAttributes<InputEvent> {
    label: string;
}
declare const Checkbox: ({ label, ...props }: any & CheckboxControlProps) => JSX.Element;
export default Checkbox;
//# sourceMappingURL=index.d.ts.map