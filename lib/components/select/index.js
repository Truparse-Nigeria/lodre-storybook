import React, { useState } from "react";
import { Button, Card, CardBody } from "..";
import { ArrowDown } from "../../icons";
import { StyledSelectField } from "./styled";
var Select = function (_a) {
    var buttonChildren = _a.buttonChildren, children = _a.children;
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    return (React.createElement(StyledSelectField, { focused: focus },
        React.createElement(Button, { usage: "border", className: "button", onClick: function () { return setFocus(!focus); }, variant: "outline" },
            React.createElement(React.Fragment, null, buttonChildren),
            React.createElement(ArrowDown, { className: "icon", width: 18, height: 18 })),
        React.createElement(Card, { border: true, className: "dropdown mt-10" },
            React.createElement(CardBody, null,
                React.createElement(React.Fragment, null, children)))));
};
export default Select;
//# sourceMappingURL=index.js.map