var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { CONTAINER } from '../../tokens/sizes';
export var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: ", ";\n  ", "\n  margin: 0 auto;\n  overflow: auto;\n  padding: 0 1rem;\n"], ["\n  max-width: ", ";\n  ", "\n  margin: 0 auto;\n  overflow: auto;\n  padding: 0 1rem;\n"])), function (props) { return (props.fluid ? '100%' : CONTAINER + 'px'); }, function (props) { return props.bgColor && "backgorund-color: ".concat(PALETTE[props.bgColor]); });
var templateObject_1;
//# sourceMappingURL=styled.js.map