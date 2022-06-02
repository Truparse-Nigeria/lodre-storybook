var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_SIZE } from "../../tokens/font";
import { HEIGHTS, RADIUS } from "../../tokens/sizes";
export var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  height: ", "px;\n  padding: 0 20px;\n  width: ", ";\n\n  &:focus {\n    outline: 2px solid ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  border-radius: ", "px;\n  border: 1px solid ", ";\n  height: ", "px;\n  padding: 0 20px;\n  width: ", ";\n\n  &:focus {\n    outline: 2px solid ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), RADIUS.small, PALETTE.ash, HEIGHTS.inputs.default, function (props) { return props.width; }, PALETTE.primary, PALETTE.ash, FONT_SIZE.pSmall);
export var StyledInputFlex = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"])), function (props) {
    return props.trailing != null
        ? "& > input {\n    padding-right: 55px !important;\n  } "
        : "";
}, function (props) {
    return props.leading != null
        ? "& > input {\n    padding-left: 40px !important;\n  }"
        : "";
});
export var StyledInputPrefix = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  left: 30px;\n  position: absolute;\n"], ["\n  left: 30px;\n  position: absolute;\n"])));
export var StyledInputSuffix = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: 20px;\n"], ["\n  position: absolute;\n  right: 20px;\n"])));
export var StyledInputContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), function (props) { return (props.margin ? "20px" : "0px"); });
export var StyledSearchInput = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-radius: ", "px 0 0 ", "px;\n  height: ", "px;\n  padding: 0 20px;\n  width: 100%;\n  border: 2px solid ", ";\n  &:focus {\n    outline: 0;\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  border-radius: ", "px 0 0 ", "px;\n  height: ", "px;\n  padding: 0 20px;\n  width: 100%;\n  border: 2px solid ", ";\n  &:focus {\n    outline: 0;\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), RADIUS.small, RADIUS.small, HEIGHTS.inputs.default, PALETTE.primary, PALETTE.ash, FONT_SIZE.pSmall);
export var StyledSearchButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-radius: 0 ", "px ", "px 0;\n  height: ", "px;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid ", ";\n  background: ", ";\n  pointer: cursor;\n"], ["\n  border-radius: 0 ", "px ", "px 0;\n  height: ", "px;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid ", ";\n  background: ", ";\n  pointer: cursor;\n"])), RADIUS.small, RADIUS.small, HEIGHTS.inputs.default, PALETTE.primary, PALETTE.primary);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map