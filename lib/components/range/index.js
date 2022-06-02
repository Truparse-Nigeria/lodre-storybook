var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Container } from "..";
import StyledRange, { StyledRangeContainer } from "./styled";
var Range = function (_a) {
    var minValue = _a.minValue, maxValue = _a.maxValue, min = _a.min, max = _a.max;
    return (React.createElement(Container, { fluid: true },
        React.createElement(StyledRangeContainer, null,
            React.createElement(StyledRange, __assign({ min: minValue, max: maxValue }, min)),
            React.createElement(StyledRange, __assign({ min: minValue, max: maxValue }, max)))));
};
export default Range;
//# sourceMappingURL=index.js.map