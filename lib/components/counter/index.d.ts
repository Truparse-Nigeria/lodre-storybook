/// <reference types="react" />
export interface CounterControlProps {
    initialValue?: number;
    maxValue: number;
    handleChange: (count: number) => void;
}
declare const Counter: ({ initialValue, maxValue, handleChange, ...props }: CounterControlProps) => JSX.Element;
export default Counter;
//# sourceMappingURL=index.d.ts.map