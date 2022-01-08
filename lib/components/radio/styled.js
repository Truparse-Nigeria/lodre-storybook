var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";
export var StyledRadioContainer = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: ", "\n  width: ", ";\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: ", "\n  width: ", ";\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n"])), function (props) { return (props.fullWidth ? "flex-start" : "center"); }, function (props) { return (props.fullWidth ? "100%" : "auto"); }, function (props) { return (props.fullWidth ? "1.5px solid #C4C4C4" : "none"); }, function (props) { return (props.fullWidth ? "20px" : "0px"); }, function (props) { return props.fullWidth && "5px"; });
export var StyledRadioText = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 5px;\n  font-weight: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: 0 5px;\n  font-weight: ", ";\n"])), function (props) { return (props.fullWidth ? FONT_WEIGHT.w500 : "normal"); });
export var StyledColorRadio = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  background-color: ", ";\n  border-radius: 50%;\n"], ["\n  width: 50px;\n  height: 50px;\n  background-color: ", ";\n  border-radius: 50%;\n"])), function (props) { return props.hexColor; });
export var StyledSubLabel = styled.small(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  margin-top: 5px;\n"], ["\n  color: ", ";\n  margin-top: 5px;\n"])), PALETTE.ash);
export var StyledRadio = styled.input.attrs({
    type: "radio",
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0 5px;\n  visibility: ", ";\n\n  &:checked + ", " {\n    border: 3px solid ", ";\n  }\n"], ["\n  margin: 0 5px;\n  visibility: ", ";\n\n  &:checked + ", " {\n    border: 3px solid ", ";\n  }\n"])), function (props) { return (props.forColor ? "hidden" : "visible"); }, StyledColorRadio, PALETTE.primary);
export default StyledRadio;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map