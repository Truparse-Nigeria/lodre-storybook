import React from "react";
import { PALETTE } from "../../tokens/color";
import { StyledHr } from "./styled";
var Divider = function (_a) {
    var _b = _a.colorValue, colorValue = _b === void 0 ? 'border' : _b, className = _a.className;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledHr, { colorValue: PALETTE[colorValue], className: className })));
};
export default Divider;
//# sourceMappingURL=index.js.map