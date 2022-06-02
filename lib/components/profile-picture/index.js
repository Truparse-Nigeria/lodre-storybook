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
import { StyledProfilePicture } from "./styled";
var ProfilePicture = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 70 : _b, _c = _a.state, state = _c === void 0 ? "primary" : _c, source = _a.source, altText = _a.altText, props = __rest(_a, ["size", "state", "source", "altText"]);
    return (React.createElement(StyledProfilePicture, __assign({ size: size, state: state }, props),
        React.createElement("img", { src: source, alt: altText })));
};
export default ProfilePicture;
//# sourceMappingURL=index.js.map