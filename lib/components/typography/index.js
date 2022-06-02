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
import { StyledHeading3, StyledHeading4, StyledParagraph, StyledSmall, } from './styled';
export var SmallText = function (_a) {
    var children = _a.children, ellipsis = _a.ellipsis, _b = _a.size, size = _b === void 0 ? 'small' : _b, _c = _a.weight, weight = _c === void 0 ? 'w400' : _c, rest = __rest(_a, ["children", "ellipsis", "size", "weight"]);
    return (React.createElement(StyledSmall, __assign({ ellipsis: ellipsis, size: size, weight: weight }, rest), children));
};
export var Paragraph = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'pSmall' : _b, ellipsis = _a.ellipsis, _c = _a.weight, weight = _c === void 0 ? 'w400' : _c, rest = __rest(_a, ["children", "size", "ellipsis", "weight"]);
    return (React.createElement(StyledParagraph, __assign({ ellipsis: ellipsis, size: size, weight: weight }, rest), children));
};
export var Heading = function (_a) {
    var children = _a.children, ellipsis = _a.ellipsis, _b = _a.size, size = _b === void 0 ? 'pSmall' : _b, _c = _a.weight, weight = _c === void 0 ? 'w400' : _c, rest = __rest(_a, ["children", "ellipsis", "size", "weight"]);
    switch (size) {
        case 'hLarge':
            return (React.createElement(StyledHeading3, __assign({ ellipsis: ellipsis, size: size, weight: weight }, rest), children));
        case 'hSmall':
            return (React.createElement(StyledHeading4, __assign({ ellipsis: ellipsis, size: size, weight: weight }, rest), children));
        default:
            return (React.createElement(StyledHeading3, __assign({ size: size, weight: weight }, rest), children));
    }
};
//# sourceMappingURL=index.js.map