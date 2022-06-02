var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { PALETTE } from '../../tokens/color';
export var StyledMenuContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
export var StyledMenuTrigger = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 6px;\n  border: none;\n  vertical-align: middle;\n  transition: box-shadow 0.4s ease;\n  margin-left: auto;\n"], ["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 6px;\n  border: none;\n  vertical-align: middle;\n  transition: box-shadow 0.4s ease;\n  margin-left: auto;\n"])));
export var StyledMenu = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-radius: 8px;\n  position: absolute;\n  top: 20px;\n  padding: 10px;\n  background: ", ";\n  right: 0;\n  width: auto;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n  ", ";\n  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;\n  & ul li a {\n    text-decoration: none;\n    color: ", ";\n    padding: 5px;\n    display: block;\n  }\n  \n"], ["\n  border-radius: 8px;\n  position: absolute;\n  top: 20px;\n  padding: 10px;\n  background: ", ";\n  right: 0;\n  width: auto;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n  ", ";\n  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;\n  & ul li a {\n    text-decoration: none;\n    color: ", ";\n    padding: 5px;\n    display: block;\n  }\n  \n"])), PALETTE.light, function (props) {
    return props.toggle
        ? "\n  opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  "
        : "\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-20px);\n  ";
}, PALETTE.dark);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map