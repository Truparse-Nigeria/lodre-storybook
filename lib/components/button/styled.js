var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { FONT_SIZE, FONT_WEIGHT } from '../../tokens/font';
import { HEIGHTS, RADIUS, SIDE_PADDINGS } from '../../tokens/sizes';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ", "px;\n  border: ", ";\n  cursor: pointer;\n  padding: 0 ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  height: ", "px;\n  color: ", ";\n  background-color: ", ";\n  min-width: ", "px;\n  ", "\n\n  &:hover {\n    opacity: 0.8;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ", "px;\n  border: ", ";\n  cursor: pointer;\n  padding: 0 ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  height: ", "px;\n  color: ", ";\n  background-color: ", ";\n  min-width: ", "px;\n  ", "\n\n  &:hover {\n    opacity: 0.8;\n  }\n"])), RADIUS.small, function (props) {
    return props.variant === 'block'
        ? "1px solid ".concat(PALETTE[props.usage])
        : "1px solid ".concat(PALETTE.dark);
}, function (props) { return SIDE_PADDINGS[props.size]; }, FONT_SIZE.pSmall, FONT_WEIGHT.w700, function (props) { return HEIGHTS.buttons[props.size] || 0; }, PALETTE.dark, function (props) {
    return props.variant === 'block' ? PALETTE[props.usage] : 'transparent';
}, function (props) { return props.iconOnly ? 0 : 140; }, function (props) { return props.fluid && "\n      width: 100%;\n    "; });
var templateObject_1;
//# sourceMappingURL=styled.js.map