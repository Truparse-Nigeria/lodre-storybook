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
import React from 'react';
import { StyledCol, StyledFlex } from './styled';
export var Flex = function (_a) {
    var children = _a.children, _b = _a.gap, gap = _b === void 0 ? 1 : _b, _c = _a.justifyContent, justifyContent = _c === void 0 ? 'start' : _c, _d = _a.alignItems, alignItems = _d === void 0 ? 'start' : _d, rest = __rest(_a, ["children", "gap", "justifyContent", "alignItems"]);
    return (React.createElement(StyledFlex, __assign({ justifyContent: justifyContent, alignItems: alignItems, gap: gap }, rest), children));
};
export var Col = function (_a) {
    var children = _a.children, size = _a.size, align = _a.align;
    return React.createElement(StyledCol, { align: align, size: size }, children);
};
//# sourceMappingURL=index.js.map