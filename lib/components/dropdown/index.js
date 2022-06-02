import React, { useState } from "react";
import { Button, Card, CardBody } from "..";
import { ArrowDown } from "../../icons";
import { StyledDropdown, StyledDropdownContainer } from "./styled";
var Dropdown = function (_a) {
    var border = _a.border, width = _a.width, buttonChildren = _a.buttonChildren, children = _a.children;
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    return (React.createElement(StyledDropdownContainer, null,
        React.createElement(StyledDropdown, { width: width, border: border, focused: focus, id: "dropdown-component" },
            React.createElement(Button, { usage: "border", className: "button", onClick: function () { return setFocus(!focus); }, variant: "outline", type: "button" },
                React.createElement(React.Fragment, null, buttonChildren),
                React.createElement(ArrowDown, { className: "icon", width: 18, height: 18 })),
            React.createElement(Card, { border: true, id: "dropdown", className: "dropdown mt-10", onMouseLeave: function () { return setFocus(false); } },
                React.createElement(CardBody, null,
                    React.createElement(React.Fragment, null, children))))));
};
export default Dropdown;
//# sourceMappingURL=index.js.map