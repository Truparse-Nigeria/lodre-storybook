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
import { Flex } from "..";
import { StyledCounterValue } from "./styled";
var Counter = function (_a) {
    var maxValue = _a.maxValue, props = __rest(_a, ["maxValue"]);
    var _b = useState(0), count = _b[0], setCount = _b[1];
    return (React.createElement(Flex, { gap: 0.4, alignItems: "center" },
        React.createElement(StyledCounterValue, __assign({ type: "number", min: 1, max: maxValue, defaultValue: count }, props))));
};
export default Counter;
//# sourceMappingURL=index.js.map