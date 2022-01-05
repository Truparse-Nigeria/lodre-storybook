import React, { useState } from "react";
import StyledCheckbox, { StyledCheckboxContainer, StyledCheckIcon, StyledHiddenCheckbox, StyledLabel, } from "./styled";
var Checkbox = function (_a) {
    var label = _a.label;
    var _b = useState(false), checked = _b[0], setChecked = _b[1];
    return (React.createElement("label", null,
        React.createElement(StyledCheckboxContainer, null,
            React.createElement(StyledHiddenCheckbox, { onChange: function () { return setChecked(!checked); }, checked: checked }),
            React.createElement(StyledCheckbox, { checked: checked },
                React.createElement(StyledCheckIcon, { viewBox: "0 0 24 24" },
                    React.createElement("polyline", { points: "20 6 9 17 4 12" }))),
            React.createElement(StyledLabel, null, label))));
};
export default Checkbox;
//# sourceMappingURL=index.js.map