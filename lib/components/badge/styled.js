var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledBadge = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  border-radius: 10px;\n  outline: 1px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n"], ["\n  padding: 10px;\n  border-radius: 10px;\n  outline: 1px solid\n    ", ";\n  background: ", ";\n  color: ", ";\n"])), function (props) {
    return props.borderColor ? PALETTE[props.borderColor] : PALETTE.primary;
}, function (props) {
    return props.fillColor ? PALETTE[props.fillColor] : PALETTE.light;
}, function (props) { return (props.color ? PALETTE[props.color] : PALETTE.dark); });
var templateObject_1;
//# sourceMappingURL=styled.js.map