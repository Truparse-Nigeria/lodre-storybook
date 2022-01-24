var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledCheckboxContainer = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var StyledCheckbox = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: ", ";\n  margin: 0 5px;\n  font: inherit;\n  color: ", ";\n  width: 1.15em;\n  height: 1.15em;\n  border: 2px solid ", ";\n  border-radius: 0.2em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n\n  ::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em ", ";\n    border-radius: 0.1rem;\n  }\n\n  &:checked::before {\n    transform: scale(1);\n  }\n"], ["\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: ", ";\n  margin: 0 5px;\n  font: inherit;\n  color: ", ";\n  width: 1.15em;\n  height: 1.15em;\n  border: 2px solid ", ";\n  border-radius: 0.2em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n\n  ::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em ", ";\n    border-radius: 0.1rem;\n  }\n\n  &:checked::before {\n    transform: scale(1);\n  }\n"])), PALETTE.light, PALETTE.dark, PALETTE.dark, PALETTE.primary);
export default StyledCheckbox;
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map