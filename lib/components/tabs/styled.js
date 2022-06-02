var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { FONT_WEIGHT } from "../../tokens/font";
import { SIDE_PADDINGS } from "../../tokens/sizes";
export var StyledTabTitle = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 20px;\n  padding: 15px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  ", "\n  color: ", ";\n"], ["\n  font-size: 20px;\n  padding: 15px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  ", "\n  color: ", ";\n"])), function (props) {
    return props.active &&
        "\n    border-bottom: 3px solid ".concat(PALETTE.primary, ";\n    & p {\n      font-weight: ").concat(FONT_WEIGHT.w700, " !important;\n    }\n  ");
}, function (props) {
    return props.foreground ? PALETTE[props.foreground] : PALETTE.dark;
});
export var TabGroup = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(\n    ", ",\n    1fr\n  );\n  justify-content: ", ";\n  background: ", ";\n  border-radius: ", ";\n  overflow-x: auto;\n  margin-bottom: ", "px;\n"], ["\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(\n    ", ",\n    1fr\n  );\n  justify-content: ", ";\n  background: ", ";\n  border-radius: ", ";\n  overflow-x: auto;\n  margin-bottom: ", "px;\n"])), function (props) { return (props.number ? props.number : "1"); }, function (props) { return (props.centered ? "center" : "flex-start"); }, function (props) {
    return props.background ? PALETTE[props.background] : "transparent";
}, function (props) { return props.radius && "4px"; }, SIDE_PADDINGS.default);
export var TabContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  background: \"transparent\";\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: ", ";\n  background: \"transparent\";\n"])), function (props) { return props.centered && "center"; });
export var StyledFullWidthContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map