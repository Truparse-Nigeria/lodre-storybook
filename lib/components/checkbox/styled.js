var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledCheckboxContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var StyledCheckIcon = styled.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 3px;\n  vertical-align: top;\n"], ["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 3px;\n  vertical-align: top;\n"])), PALETTE.dark);
export var StyledHiddenCheckbox = styled.input.attrs({ type: "checkbox" })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
var StyledCheckbox = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background: ", ";\n  border: 1.5px solid\n    ", ";\n  border-radius: 3px;\n  transition: all 150ms;\n\n  ", ":focus + & {\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background: ", ";\n  border: 1.5px solid\n    ", ";\n  border-radius: 3px;\n  transition: all 150ms;\n\n  ", ":focus + & {\n    box-shadow: 0 0 0 1px ", ";\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n"])), function (props) { return (props.checked ? PALETTE.primary : PALETTE.light); }, function (props) { return (props.checked ? PALETTE.light : PALETTE.dark); }, StyledHiddenCheckbox, PALETTE.primary, StyledCheckIcon, function (props) { return (props.checked ? "visible" : "hidden"); });
export var StyledLabel = styled.small(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0 5px;\n"], ["\n  margin: 0 5px;\n"])));
export default StyledCheckbox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map