import React, { useState } from "react";
import { StyledCheckboxLabel, StyledCheckboxText, StyledHiddenCheckbox, } from "./styled";
var Checkbox = function (_a) {
    var label = _a.label;
    var _b = useState(false), checked = _b[0], setChecked = _b[1];
    return (React.createElement(StyledCheckboxLabel, null,
        React.createElement(StyledHiddenCheckbox, { onChange: function () { return setChecked(!checked); }, checked: checked }),
        React.createElement(StyledCheckboxText, null, label)));
};
export default Checkbox;
//# sourceMappingURL=index.js.map