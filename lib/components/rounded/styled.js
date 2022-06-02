var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
import { RADIUS } from '../../tokens/sizes';
export var StyledRounded = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", "px;\n  ", "\n  overflow: hidden;\n"], ["\n  border-radius: ", "px;\n  ", "\n  overflow: hidden;\n"])), function (props) { return RADIUS[props.borderRadius]; }, function (props) {
    return props.borderColor &&
        "\n  border: 2px solid ".concat(PALETTE[props.borderColor], ";\n  ");
});
var templateObject_1;
//# sourceMappingURL=styled.js.map