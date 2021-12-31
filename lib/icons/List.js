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
var SvgList = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 17 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("mask", { id: "List_svg__a", fill: "#fff" },
        React.createElement("rect", { width: 8, height: 8, rx: 1 })),
    React.createElement("rect", { width: 8, height: 8, rx: 1, fill: "#fff", stroke: "#191919", strokeWidth: 3, mask: "url(#List_svg__a)" }),
    React.createElement("mask", { id: "List_svg__b", fill: "#fff" },
        React.createElement("rect", { y: 10, width: 8, height: 8, rx: 1 })),
    React.createElement("rect", { y: 10, width: 8, height: 8, rx: 1, fill: "#fff", stroke: "#191919", strokeWidth: 3, mask: "url(#List_svg__b)" }),
    React.createElement("path", { stroke: "#191919", strokeWidth: 1.5, d: "M10 2.25h7M10 12.25h7M10 5.25h7M10 15.25h7" }))); };
export default SvgList;
//# sourceMappingURL=List.js.map