var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, } from '../../tokens/font';
export var StyledSmall = styled.small(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n  ", "\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n  ", "\n"])), FONT_SIZE.small, function (props) { return FONT_WEIGHT[props.weight]; }, function (props) {
    return props.ellipsis &&
        "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: ".concat(props.ellipsis, ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    ");
});
export var StyledParagraph = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"], ["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"])), function (props) { return FONT_WEIGHT[props.weight]; }, function (props) { return FONT_SIZE[props.size]; }, function (props) {
    return props.ellipsis &&
        "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: ".concat(props.ellipsis, ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    ");
});
export var StyledHeading3 = styled.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"], ["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"])), function (props) { return FONT_WEIGHT[props.weight]; }, function (props) { return FONT_SIZE[props.size]; }, function (props) {
    return props.ellipsis &&
        "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: ".concat(props.ellipsis, ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    ");
});
export var StyledHeading4 = styled.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"], ["\n  font-weight: ", ";\n  font-size: ", "px;\n  ", "\n"])), function (props) { return FONT_WEIGHT[props.weight]; }, function (props) { return FONT_SIZE[props.size]; }, function (props) {
    return props.ellipsis &&
        "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: ".concat(props.ellipsis, ";\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    ");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map