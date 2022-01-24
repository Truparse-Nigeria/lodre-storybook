var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { RADIUS, SIDE_PADDINGS } from '../../tokens/sizes';
export var StyledCard = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  background-color: ", ";\n  overflow: hidden;\n  ", "\n"], ["\n  border-radius: ", "px;\n  background-color: ", ";\n  overflow: hidden;\n  ", "\n"])), RADIUS.default, function (props) { return PALETTE[props.bgColor]; }, function (props) { return props.border && "\n  border: 1px solid ".concat(PALETTE.border, "\n  "); });
export var StyledCardBody = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", "px;\n"], ["\n  padding: ", "px;\n"])), function (props) { return SIDE_PADDINGS[props.padding]; });
export var StyledCardHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n"])), function (props) { return SIDE_PADDINGS[props.padding]; }, function (props) { return PALETTE[props.bgColor]; });
export var StyledImage = styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  object-fit: cover;\n  width: 100%;\n  height: ", "px;\n"], ["\n  object-fit: cover;\n  width: 100%;\n  height: ", "px;\n"])), function (props) { return props.height; });
export var StyledImageRounded = styled(StyledImage)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: ", "px;\n"], ["\n  border-radius: ", "px;\n"])), RADIUS.default);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map