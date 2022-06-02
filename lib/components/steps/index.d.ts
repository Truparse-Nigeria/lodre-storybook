import { FC } from "react";
export interface Step {
    step: string;
    done: boolean;
}
export interface StepsProps {
    steps: Array<Step>;
    showLine: boolean;
}
declare const Steps: FC<StepsProps>;
export default Steps;
//# sourceMappingURL=index.d.ts.map