var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { FONT_SIZE } from '../../tokens/font';
import { HEIGHTS } from '../../tokens/sizes';
export var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 4px;\n  border: 1px solid ", ";\n  height: ", "px;\n  padding: 0 20px;\n  width: ", ";\n\n  &:focus {\n    outline: 2px solid ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  border-radius: 4px;\n  border: 1px solid ", ";\n  height: ", "px;\n  padding: 0 20px;\n  width: ", ";\n\n  &:focus {\n    outline: 2px solid ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), PALETTE.ash, HEIGHTS.inputs.default, function (props) { return props.width; }, PALETTE.primary, PALETTE.ash, FONT_SIZE.pSmall);
export var StyledInputFlex = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n"])), function (props) {
    return props.trailing != null
        ? "& > input {\n    padding-right: 40px !important;\n  } "
        : "";
}, function (props) {
    return props.leading != null
        ? "& > input {\n    padding-left: 40px !important;\n  }"
        : "";
});
export var StyledInputPrefix = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  left: 30px;\n  position: absolute;\n"], ["\n  left: 30px;\n  position: absolute;\n"])));
export var StyledInputSuffix = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 30px;\n  position: absolute;\n  right: 30px;\n"], ["\n  margin-left: 30px;\n  position: absolute;\n  right: 30px;\n"])));
export var StyledInputContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: 20px;\n"], ["\n  margin-bottom: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map