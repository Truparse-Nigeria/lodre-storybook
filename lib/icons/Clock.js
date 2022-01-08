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
var SvgClock = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm.75-6h3v1.5h-4.5V4.25h1.5V8Z", fill: "#8C8C8C" }))); };
export default SvgClock;
//# sourceMappingURL=Clock.js.map