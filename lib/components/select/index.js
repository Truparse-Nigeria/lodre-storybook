import React, { useState } from "react";
import { Button, Paragraph } from "..";
import { ArrowDown } from "../../icons";
import { StyledOptions, StyledOptionsContainer, StyledSelectField, } from "./styled";
var SelectField = function (_a) {
    var _b;
    var options = _a.options, _c = _a.borderRadius, borderRadius = _c === void 0 ? "10px" : _c, _d = _a.placeholder, placeholder = _d === void 0 ? "Select option" : _d, _e = _a.background, background = _e === void 0 ? "grey" : _e, handleChange = _a.handleChange, _f = _a.defaultValue, defaultValue = _f === void 0 ? "" : _f, height = _a.height;
    var _g = useState(false), focused = _g[0], setFocused = _g[1];
    var _h = useState(defaultValue !== "" ? defaultValue : placeholder), value = _h[0], setValue = _h[1];
    var _j = useState(false), atEnd = _j[0], setAtEnd = _j[1];
    // useEffect(() => {
    //   if (typeof window !== "undefined") {
    //     window.addEventListener("scroll", () => {
    //       const body = window.innerHeight;
    //       const dropdown = (document.getElementById("dropdown") as HTMLElement)
    //         .scrollHeight;
    //       if (body - dropdown === 0) {
    //         setAtEnd(true);
    //       } else {
    //         setAtEnd(false);
    //       }
    //     });
    //   }
    //   return window.removeEventListener("scroll", () => {});
    // }, []);
    return (React.createElement(StyledSelectField, { background: background, borderRadius: borderRadius, focused: focused },
        React.createElement(Button, { className: "button", type: "button", onClick: function () { return setFocused(!focused); } },
            ((_b = options.filter(function (e) { return value === e.value; })[0]) === null || _b === void 0 ? void 0 : _b.text) || placeholder,
            React.createElement(ArrowDown, { className: "icon" })),
        React.createElement(StyledOptionsContainer, { height: height, background: "light", focused: focused }, options.map(function (options, index) { return (React.createElement(StyledOptions, { selected: value === options.value, onClick: function () {
                setValue(options.value);
                handleChange(options.value);
                setFocused(!focused);
            }, key: index },
            React.createElement(Paragraph, { size: "pSmall", weight: "w500" }, options.text))); }))));
};
export default SelectField;
//# sourceMappingURL=index.js.map