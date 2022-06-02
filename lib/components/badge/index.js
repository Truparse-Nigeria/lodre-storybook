import React from "react";
import { StyledBadge } from "./styled";
var Badge = function (_a) {
    var _b = _a.borderColor, borderColor = _b === void 0 ? "primary" : _b, _c = _a.fillColor, fillColor = _c === void 0 ? "primary" : _c, _d = _a.color, color = _d === void 0 ? "dark" : _d, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledBadge, { borderColor: borderColor, fillColor: fillColor, color: color }, children)));
};
export default Badge;
//# sourceMappingURL=index.js.map