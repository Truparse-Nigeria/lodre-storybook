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
import React, { useEffect, useState } from "react";
import { Paragraph } from "..";
import { Minus, Plus } from "../../icons";
import { StyledCounterButton, StyledCounterContainer, StyledCounterValue, } from "./styled";
var Counter = function (_a) {
    var initialValue = _a.initialValue, maxValue = _a.maxValue, handleChange = _a.handleChange, props = __rest(_a, ["initialValue", "maxValue", "handleChange"]);
    var _b = useState(1), count = _b[0], setCount = _b[1];
    useEffect(function () {
        if (initialValue)
            setCount(initialValue);
    }, [initialValue]);
    return (React.createElement(StyledCounterContainer, { overTheLimit: count > maxValue, underTheLimit: count === 0 },
        React.createElement(StyledCounterButton, { onClick: function () {
                setCount(count - 1);
                handleChange(count - 1);
            }, disabled: count === 1 },
            React.createElement(Minus, { width: 18, height: 18 })),
        React.createElement(StyledCounterValue, __assign({ overTheLimit: count > maxValue, underTheLimit: count === 0, type: "number", value: count, min: 1, max: maxValue, onChange: function (e) {
                setCount(parseInt(e.target.value));
                handleChange(parseInt(e.target.value));
            }, defaultValue: count }, props)),
        React.createElement(StyledCounterButton, { onClick: function () {
                setCount(count + 1);
                handleChange(count + 1);
            }, disabled: count === maxValue },
            React.createElement(Plus, { width: 18, height: 18 })),
        count > maxValue && (React.createElement(Paragraph, { size: "small", className: "py-10 danger" }, "You above the stocked number")),
        count === 0 && (React.createElement(Paragraph, { size: "small", className: "py-10 danger" }, "Minimun number of items can only be 1"))));
};
export default Counter;
//# sourceMappingURL=index.js.map