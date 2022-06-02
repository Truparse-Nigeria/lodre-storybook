var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledBadge = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px 10px;\n  border-radius: 10px;\n  outline: 2px solid ", ";\n  outline-offset: 0px;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"], ["\n  padding: 5px 10px;\n  border-radius: 10px;\n  outline: 2px solid ", ";\n  outline-offset: 0px;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"])), function (props) { return PALETTE[props.borderColor]; }, function (props) { return PALETTE[props.fillColor]; }, function (props) { return PALETTE[props.color]; });
var templateObject_1;
//# sourceMappingURL=styled.js.map