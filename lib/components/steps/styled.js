var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
import { VIEWPORT } from "../../tokens/sizes";
export var StyledStepContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ", "px) {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .number {\n    width: 100% !important;\n    text-align: center;\n    margin: 0 auto;\n  }\n\n  .text {\n    width: 100% !important;\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ", "px) {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .number {\n    width: 100% !important;\n    text-align: center;\n    margin: 0 auto;\n  }\n\n  .text {\n    width: 100% !important;\n    margin-left: 10px;\n  }\n"])), VIEWPORT.sm);
export var StyledStep = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), function (props) {
    return props.done ? PALETTE["primary"] : PALETTE["light"];
}, PALETTE["primary"]);
export var StyledStepLine = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: auto 10px;\n  height: 2px;\n  width: 100%;\n  background: ", ";\n\n  @media (max-width: ", "px) {\n    display: none;\n  }\n\n  display: ", ";\n"], ["\n  margin: auto 10px;\n  height: 2px;\n  width: 100%;\n  background: ", ";\n\n  @media (max-width: ", "px) {\n    display: none;\n  }\n\n  display: ", ";\n"])), PALETTE["grey"], VIEWPORT["sm"], function (props) { return (props.isLast ? "none" : "initial"); });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map