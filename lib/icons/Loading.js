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
import * as React from "react";
var SvgLoading = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", stroke: "#000" }, props),
    React.createElement("g", { transform: "translate(1 1)", strokeWidth: 2, fill: "none", fillRule: "evenodd" },
        React.createElement("circle", { strokeOpacity: 0.5, cx: 18, cy: 18, r: 18 }),
        React.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" },
            React.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }))))); };
export default SvgLoading;
//# sourceMappingURL=Loading.js.map