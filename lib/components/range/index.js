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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import { StyledInput } from "../input/styled";
import StyledRange, { StyledRangeContainer } from "./styled";
var Range = function (_a) {
    var initialMinValue = _a.initialMinValue, initialMaxValue = _a.initialMaxValue, props = __rest(_a, ["initialMinValue", "initialMaxValue"]);
    var _b = useState(initialMinValue), min = _b[0], setMin = _b[1];
    var _c = useState(initialMaxValue), max = _c[0], setMax = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledRangeContainer, null,
            React.createElement("small", null,
                "\u20A6 ",
                new Intl.NumberFormat().format(Number(min))),
            React.createElement(StyledRange, __assign({ min: min, max: max }, props)),
            React.createElement("small", null,
                "\u20A6 ",
                new Intl.NumberFormat().format(Number(max)))),
        React.createElement("div", null,
            React.createElement(StyledInput, { width: "10%", defaultValue: min, onChange: function (e) { return setMin(e.target.value); }, placeholder: "Min" }),
            " - ",
            React.createElement(StyledInput, { width: "10%", defaultValue: max, onChange: function (e) { return setMax(e.target.value); }, placeholder: "Max" }))));
};
export default Range;
//# sourceMappingURL=index.js.map