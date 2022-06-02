var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledDropdownContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
export var StyledDropdown = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n\n  .button {\n    justify-content: space-between;\n    padding: 30px 20px;\n    text-align: left !important;\n    width: 100%;\n    border: ", " !important;\n\n    .icon {\n      justify-self: flex-end;\n      margin-left: 25px;\n      transform: ", ";\n      transition: all ease-in-out 0.2s;\n    }\n  }\n\n  .dropdown {\n    width: ", ";\n    padding: 5px;\n    position: absolute;\n    top: 60px;\n    ", ";\n    z-index: 99;\n    visibility: ", ";\n    pointer-events: ", ";\n\n    &.up {\n      top: -140px;\n    }\n\n    &.down {\n      top: 60px;\n    }\n  }\n"], ["\n  position: relative;\n\n  .button {\n    justify-content: space-between;\n    padding: 30px 20px;\n    text-align: left !important;\n    width: 100%;\n    border: ", " !important;\n\n    .icon {\n      justify-self: flex-end;\n      margin-left: 25px;\n      transform: ", ";\n      transition: all ease-in-out 0.2s;\n    }\n  }\n\n  .dropdown {\n    width: ", ";\n    padding: 5px;\n    position: absolute;\n    top: 60px;\n    ", ";\n    z-index: 99;\n    visibility: ", ";\n    pointer-events: ", ";\n\n    &.up {\n      top: -140px;\n    }\n\n    &.down {\n      top: 60px;\n    }\n  }\n"])), function (props) {
    return props.border ? "1.5px solid ".concat(PALETTE.border) : "none";
}, function (props) {
    return props.focused ? "rotateZ(180deg)" : "rotateZ(0deg)";
}, function (props) { return (props.width ? "".concat(props.width, "px") : "auto"); }, function (props) { return (props.width ? "right: 0px" : "left: 0px"); }, function (props) { return (props.focused ? "visible" : "hidden"); }, function (props) { return (props.focused ? "auto" : "none"); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map