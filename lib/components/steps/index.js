import React from "react";
import { Grid, Paragraph } from "..";
import { CheckLine } from "../../icons";
import { StyledStep, StyledStepContainer, StyledStepLine } from "./styled";
var Steps = function (_a) {
    var _b = _a.steps, steps = _b === void 0 ? [] : _b, _c = _a.showLine, showLine = _c === void 0 ? true : _c;
    return (React.createElement(Grid, { xl: "repeat(".concat(steps.length, ", 1fr)"), lg: "repeat(".concat(steps.length, ", 1fr)"), md: "repeat(".concat(steps.length, ", 1fr)"), sm: "repeat(".concat(steps.length, ", 1fr)"), justifyContent: "space-between" }, steps.map(function (step, index) { return (React.createElement(StyledStepContainer, { isLast: index === steps.length - 1, key: index },
        React.createElement(Grid, { sm: "50px 1fr", xs: "50px 1fr", gap: 0.2, alignItems: "center" },
            React.createElement(StyledStep, { done: step.done }, step.done ? (React.createElement(CheckLine, { width: 16, height: 16 })) : (React.createElement(Paragraph, { className: "number", weight: "w500" }, index + 1))),
            React.createElement(Paragraph, { className: "text", weight: "w500" }, step.step)),
        showLine && React.createElement(StyledStepLine, { isLast: index === steps.length - 1 }))); })));
};
export default Steps;
//# sourceMappingURL=index.js.map