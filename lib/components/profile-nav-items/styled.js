var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledNavItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  background-color: ", ";\n  color: ", ";\n  border-right: ", ";\n\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n"], ["\n  margin: 0;\n  background-color: ", ";\n  color: ", ";\n  border-right: ", ";\n\n  svg {\n    path {\n      fill: ", ";\n    }\n  }\n"])), function (props) {
    return props.active ? PALETTE.primary_light : "none";
}, PALETTE.dark, function (props) {
    return props.active ? "4px solid ".concat(PALETTE.primary) : "none";
}, function (props) { return (props.active ? PALETTE.primary : PALETTE.dark); });
export var StyledNavItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 25px 20px;\n  margin: 0;\n  height: 40px;\n  text-decoration: none;\n  list-style-type: none;\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 25px 20px;\n  margin: 0;\n  height: 40px;\n  text-decoration: none;\n  list-style-type: none;\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), PALETTE.dark);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map