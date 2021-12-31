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
import { StyledButton } from './styled';
var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'block' : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c, _d = _a.usage, usage = _d === void 0 ? 'primary' : _d, rest = __rest(_a, ["children", "variant", "size", "usage"]);
    return (React.createElement(StyledButton, __assign({ size: size, variant: variant, usage: usage }, rest), children));
};
export default Button;
//# sourceMappingURL=button.js.map