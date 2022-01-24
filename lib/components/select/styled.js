var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledSelectField = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  .button {\n    justify-content: space-between;\n    padding: 30px 20px;\n    text-align: left !important;\n    width: 100%;\n    border: 1.5px solid ", " !important;\n\n    .icon {\n      justify-self: flex-end;\n      margin-left: 25px;\n      transform: ", ";\n      transition: all ease-in-out 0.2s;\n    }\n  }\n\n  .dropdown {\n    position: absolute;\n    top: 60px;\n    left: 0px;\n    visibility: ", ";\n    pointer-events: ", ";\n  }\n"], ["\n  position: relative;\n\n  .button {\n    justify-content: space-between;\n    padding: 30px 20px;\n    text-align: left !important;\n    width: 100%;\n    border: 1.5px solid ", " !important;\n\n    .icon {\n      justify-self: flex-end;\n      margin-left: 25px;\n      transform: ", ";\n      transition: all ease-in-out 0.2s;\n    }\n  }\n\n  .dropdown {\n    position: absolute;\n    top: 60px;\n    left: 0px;\n    visibility: ", ";\n    pointer-events: ", ";\n  }\n"])), PALETTE.border, function (props) {
    return props.focused ? "rotateZ(180deg)" : "rotateZ(0deg)";
}, function (props) { return (props.focused ? "visible" : "hidden"); }, function (props) { return (props.focused ? "auto" : "none"); });
var templateObject_1;
//# sourceMappingURL=styled.js.map