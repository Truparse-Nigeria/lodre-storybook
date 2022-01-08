import { InputHTMLAttributes } from "react";
export interface RangeControlProps extends InputHTMLAttributes<InputEvent> {
    initialMinValue: string;
    initialMaxValue: string;
}
declare const Range: ({ initialMinValue, initialMaxValue, ...props }: any & RangeControlProps) => JSX.Element;
export default Range;
//# sourceMappingURL=index.d.ts.map