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
import React from "react";
import { Flex } from "..";
import SvgSearch from "../../icons/Search";
import { StyledInputContainer, StyledInput, StyledInputFlex, StyledInputSuffix, StyledInputPrefix, StyledSearchButton, StyledSearchInput, } from "./styled";
var Input = function (_a) {
    var subText = _a.subText, trailing = _a.trailing, leading = _a.leading, type = _a.type, placeholder = _a.placeholder, _b = _a.margin, margin = _b === void 0 ? true : _b, _c = _a.width, width = _c === void 0 ? "100%" : _c, rest = __rest(_a, ["subText", "trailing", "leading", "type", "placeholder", "margin", "width"]);
    return (React.createElement(StyledInputContainer, { margin: margin },
        React.createElement(StyledInputFlex, { leading: leading, trailing: trailing },
            leading && React.createElement(StyledInputPrefix, null, leading),
            React.createElement(StyledInput, __assign({ type: type, width: width, placeholder: placeholder }, rest)),
            trailing && React.createElement(StyledInputSuffix, null, trailing)),
        subText && React.createElement("small", null, subText)));
};
export var SearchInput = function (_a) {
    var type = _a.type, placeholder = _a.placeholder, onSubmit = _a.onSubmit, rest = __rest(_a, ["type", "placeholder", "onSubmit"]);
    return (React.createElement("form", { onSubmit: onSubmit },
        React.createElement(Flex, { gap: 0 },
            React.createElement(StyledSearchInput, __assign({ type: type, placeholder: placeholder }, rest)),
            React.createElement(StyledSearchButton, null,
                React.createElement(SvgSearch, { width: "20", height: "20" })))));
};
export default Input;
//# sourceMappingURL=input.js.map