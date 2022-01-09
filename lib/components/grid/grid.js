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
import { StyledGrid } from './styled';
var Grid = function (_a) {
    var children = _a.children, _b = _a.gap, gap = _b === void 0 ? 1 : _b, md = _a.md, lg = _a.lg, xl = _a.xl, _c = _a.xs, xs = _c === void 0 ? '1fr' : _c, _d = _a.sm, sm = _d === void 0 ? 'repeat(2, 1fr)' : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'start' : _e, _f = _a.alignItems, alignItems = _f === void 0 ? 'start' : _f, rest = __rest(_a, ["children", "gap", "md", "lg", "xl", "xs", "sm", "justifyContent", "alignItems"]);
    return (React.createElement(StyledGrid, __assign({ gap: gap, sm: sm, md: md, lg: lg, xl: xl, xs: xs, justifyContent: justifyContent, alignItems: alignItems }, rest), children));
};
export default Grid;
//# sourceMappingURL=grid.js.map