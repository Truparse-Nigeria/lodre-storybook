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
import { Grid, Rounded } from "..";
import { StyledCard, StyledCardBody, StyledCardHeader, StyledImage, StyledImageRounded, } from "./styled";
export var CardHeader = function (_a) {
    var children = _a.children, _b = _a.bgColor, bgColor = _b === void 0 ? "cream" : _b, _c = _a.padding, padding = _c === void 0 ? "small" : _c, rest = __rest(_a, ["children", "bgColor", "padding"]);
    return (React.createElement(StyledCardHeader, __assign({ bgColor: bgColor, padding: padding }, rest), children));
};
export var CardBody = function (_a) {
    var children = _a.children, _b = _a.padding, padding = _b === void 0 ? "small" : _b, rest = __rest(_a, ["children", "padding"]);
    return (React.createElement(StyledCardBody, __assign({ padding: padding }, rest), children));
};
var Card = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? "light" : _b, _c = _a.border, border = _c === void 0 ? false : _c, children = _a.children, rest = __rest(_a, ["bgColor", "border", "children"]);
    return (React.createElement(StyledCard, __assign({ bgColor: bgColor, border: border }, rest), children));
};
export var ProductCard = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? "light" : _b, children = _a.children, _c = _a.padding, padding = _c === void 0 ? "small" : _c, src = _a.src, _d = _a.height, height = _d === void 0 ? 215 : _d;
    return (React.createElement(Rounded, { borderColor: bgColor },
        React.createElement(StyledCard, { bgColor: bgColor },
            React.createElement(StyledImage, { height: height, src: src }),
            React.createElement(StyledCardBody, { padding: padding }, children))));
};
export var SideProductCard = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? "light" : _b, children = _a.children, _c = _a.padding, padding = _c === void 0 ? "small" : _c, src = _a.src, height = _a.height, _d = _a.imgSize, imgSize = _d === void 0 ? "default" : _d;
    return (React.createElement(StyledCard, { bgColor: bgColor },
        React.createElement(StyledCardBody, { padding: padding },
            React.createElement(Grid, { md: imgSize === "default" ? "100px 1fr" : "80px 1fr" },
                React.createElement(StyledImageRounded, { height: height, src: src }),
                React.createElement("div", null, children)))));
};
export var RoundedImg = function (_a) {
    var height = _a.height, src = _a.src, rest = __rest(_a, ["height", "src"]);
    return (React.createElement(StyledImageRounded, __assign({ height: height, src: src }, rest)));
};
export var Img = function (_a) {
    var height = _a.height, src = _a.src, rest = __rest(_a, ["height", "src"]);
    return React.createElement(StyledImage, __assign({ height: height, src: src }, rest));
};
export default Card;
//# sourceMappingURL=card.js.map