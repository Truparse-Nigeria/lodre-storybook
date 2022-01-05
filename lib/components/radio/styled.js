var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledRadioContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 48px;\n  position: relative;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 48px;\n  position: relative;\n"])));
export var StyledRadioLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 25%;\n  left: 4px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #bebebe;\n"], ["\n  position: absolute;\n  top: 25%;\n  left: 4px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: white;\n  border: 1px solid #bebebe;\n"])));
export var StyledRadioButton = styled.input.attrs({ type: "checkbox" })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n  &:hover ~ ", " {\n    background: ", ";\n    &::after {\n      content: \"\";\n      display: block;\n      border-radius: 50%;\n      width: 12px;\n      height: 12px;\n      margin: 5px;\n      background: ", ";\n    }\n  }\n  ", "\n"], ["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n  &:hover ~ ", " {\n    background: ", ";\n    &::after {\n      content: \"\";\n      display: block;\n      border-radius: 50%;\n      width: 12px;\n      height: 12px;\n      margin: 5px;\n      background: ", ";\n    }\n  }\n  ", "\n"])), StyledRadioLabel, PALETTE.ash, PALETTE.grey, function (props) {
    return props.checked &&
        " \n    &:checked + ".concat(StyledRadioLabel, " {\n      background: ").concat(PALETTE.primary, ";\n      border: 1px solid ").concat(PALETTE.primary, ";\n\n      &::after {\n        content: \"\";\n        display: block;\n        border-radius: 50%;\n        width: 12px;\n        height: 12px;\n        margin: 5px;\n        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);\n        background: ").concat(PALETTE.dark, ";\n      }\n    }\n  ");
});
export default StyledRadioButton;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map