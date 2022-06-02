var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledProfilePicture = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  outline: 2px solid\n    ", ";\n  outline-offset: 1.5px;\n  border-radius: 50%;\n  overflow: hidden;\n\n  img {\n    width: ", "px;\n    height: ", "px;\n    object-fit: cover;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  outline: 2px solid\n    ", ";\n  outline-offset: 1.5px;\n  border-radius: 50%;\n  overflow: hidden;\n\n  img {\n    width: ", "px;\n    height: ", "px;\n    object-fit: cover;\n  }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return (props.state ? PALETTE[props.state] : PALETTE["primary"]); }, function (props) { return props.size; }, function (props) { return props.size; });
var templateObject_1;
//# sourceMappingURL=styled.js.map