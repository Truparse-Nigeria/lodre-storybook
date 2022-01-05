import React, { useState } from "react";
import StyledRadioButton, { StyledRadioContainer, StyledRadioLabel, } from "./styled";
var Radio = function (_a) {
    var label = _a.label;
    var _b = useState(false), checked = _b[0], setChecked = _b[1];
    return (React.createElement(StyledRadioContainer, null,
        React.createElement(StyledRadioButton, { checked: checked, onChange: function () { return setChecked(!checked); } }),
        React.createElement(StyledRadioLabel, null),
        React.createElement("small", null, label)));
};
export default Radio;
//# sourceMappingURL=index.js.map