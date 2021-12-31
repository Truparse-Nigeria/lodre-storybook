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
import { StyledInputContainer, StyledInput, StyledInputFlex, StyledInputSuffix, StyledInputPrefix, } from './styled';
var Input = function (_a) {
    var subText = _a.subText, trailing = _a.trailing, leading = _a.leading, type = _a.type, placeholder = _a.placeholder, _b = _a.width, width = _b === void 0 ? '100%' : _b, rest = __rest(_a, ["subText", "trailing", "leading", "type", "placeholder", "width"]);
    return (React.createElement(StyledInputContainer, null,
        React.createElement(StyledInputFlex, { leading: leading, trailing: trailing },
            leading && React.createElement(StyledInputPrefix, null, leading),
            React.createElement(StyledInput, __assign({ type: type, width: width, placeholder: placeholder }, rest)),
            trailing && React.createElement(StyledInputSuffix, null, trailing)),
        subText && React.createElement("small", null, subText)));
};
export default Input;
//# sourceMappingURL=input.js.map