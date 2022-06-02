var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";
export var StyledCounterValue = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid\n    ", ";\n  border-radius: 10px;\n  text-align: center !important;\n  outline: none;\n  font-weight: ", ";\n  width: auto;\n  height: 50px;\n  margin: 0 10px;\n\n  ::-webkit-inner-spin-button {\n    cursor: pointer;\n    visibility: hidden !important;\n  }\n"], ["\n  border: 1px solid\n    ", ";\n  border-radius: 10px;\n  text-align: center !important;\n  outline: none;\n  font-weight: ", ";\n  width: auto;\n  height: 50px;\n  margin: 0 10px;\n\n  ::-webkit-inner-spin-button {\n    cursor: pointer;\n    visibility: hidden !important;\n  }\n"])), function (props) {
    return props.overTheLimit || props.underTheLimit ? "red" : "transparent";
}, FONT_WEIGHT.w600);
export var StyledCounterButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 15px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: none;\n  cursor: pointer;\n"], ["\n  padding: 15px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: none;\n  cursor: pointer;\n"])), PALETTE.grey);
export var StyledCounterContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  .danger {\n    color: red;\n  }\n"], ["\n  .danger {\n    color: red;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map