var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledFlex = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex !important;\n  gap: ", "rem;\n  justify-content: ", ";\n  align-items: ", ";\n"], ["\n  display: flex !important;\n  gap: ", "rem;\n  justify-content: ", ";\n  align-items: ", ";\n"])), function (props) { return props.gap; }, function (props) { return props.justifyContent; }, function (props) { return props.alignItems; });
export var StyledCol = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: ", ";\n  ", "\n"], ["\n  flex: ", ";\n  ", "\n"])), function (props) { return props.size; }, function (props) { return props.align && "\n    text-align: ".concat(props.align, ";\n  "); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map