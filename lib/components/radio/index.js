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
import { Paragraph, SmallText } from "..";
import StyledRadio, { StyledColorRadio, StyledRadioContainer, StyledRadioText, } from "./styled";
var Radio = function (_a) {
    var label = _a.label, subLabel = _a.subLabel, fullWidth = _a.fullWidth, forColor = _a.forColor, hexColor = _a.hexColor, props = __rest(_a, ["label", "subLabel", "fullWidth", "forColor", "hexColor"]);
    return (React.createElement(StyledRadioContainer, { fullWidth: fullWidth },
        React.createElement(StyledRadio, __assign({ type: "radio", forColor: forColor }, props)),
        forColor && React.createElement(StyledColorRadio, { hexColor: hexColor }),
        React.createElement(StyledRadioText, { fullWidth: fullWidth, forColor: forColor },
            React.createElement(Paragraph, null, label),
            React.createElement(SmallText, { className: "text-ash" }, subLabel))));
};
export default Radio;
//# sourceMappingURL=index.js.map