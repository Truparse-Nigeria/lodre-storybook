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
var SvgStarCircle = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("circle", { cx: 8, cy: 8, r: 8, fill: "#FFC20E" }),
    React.createElement("path", { d: "m8 10.5-2.939 1.795.799-3.35-2.615-2.24 3.433-.275L8 3.25l1.322 3.18 3.434.275-2.616 2.24.799 3.35L8 10.5Z", fill: "#fff" }))); };
export default SvgStarCircle;
//# sourceMappingURL=StarCircle.js.map