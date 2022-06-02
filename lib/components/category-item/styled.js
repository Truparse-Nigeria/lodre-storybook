var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { PALETTE } from "../../tokens/color";
export var StyledCategoryContainer = styled.div({
    height: "100%",
    background: PALETTE.light,
    borderRadius: "10px",
});
export var StyledCategoryItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  padding: 5px 5px;\n"], ["\n  position: relative;\n  width: 100%;\n  padding: 5px 5px;\n"])));
export var StyledCategory = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  position: relative;\n  display: grid;\n  grid-template-columns: 100% 1fr;\n  align-item: start;\n"], ["\n  height: 100%;\n  position: relative;\n  display: grid;\n  grid-template-columns: 100% 1fr;\n  align-item: start;\n"])));
export var StyledCategoryItemButton = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 5px;\n"], ["\n  width: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 5px;\n"])));
export var StyledCategoryItemMenu = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 800px;\n  padding: 20px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 9999;\n  top: 0%;\n  left: 100%;\n  background: ", ";\n  visibility: ", ";\n  pointer-events: ", ";\n  box-shadow: 0 0 15px 7px rgba(0, 0, 0, 0.1);\n"], ["\n  width: 800px;\n  padding: 20px;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 9999;\n  top: 0%;\n  left: 100%;\n  background: ", ";\n  visibility: ", ";\n  pointer-events: ", ";\n  box-shadow: 0 0 15px 7px rgba(0, 0, 0, 0.1);\n"])), PALETTE.light, function (props) { return (props.visible ? "visible" : "hidden"); }, function (props) { return (props.visible ? "auto" : "none"); });
export var StyledCategoryIcon = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7.5px;\n  border-radius: 50%;\n  background: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7.5px;\n  border-radius: 50%;\n  background: ", ";\n"])), PALETTE.primary);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map