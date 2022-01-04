var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { createGlobalStyle, css } from 'styled-components';
import { TYPOGRAPHY } from '../tokens/font';
import './fonts/styles.css';
var space = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100];
var spaces = function () {
    var styles = '';
    for (var _i = 0, space_1 = space; _i < space_1.length; _i++) {
        var i = space_1[_i];
        styles += "\n      .mt-".concat(i, " {\n         margin-top: ").concat(i, "px;\n       }\n      .mx-").concat(i, " {\n        margin: auto ").concat(i, "px;\n      }\n      .my-").concat(i, " {\n        margin: ").concat(i, "px auto;\n      }\n      .mb-").concat(i, " {\n        margin-bottom: ").concat(i, "px\n      }\n      .m-").concat(i, " {\n        margin: ").concat(i, "px\n      }\n      .pt-").concat(i, " {\n        padding-top: ").concat(i, "px;\n      }\n     .px-").concat(i, " {\n       padding: auto ").concat(i, "px;\n     }\n     .py-").concat(i, " {\n       padding: ").concat(i, "px auto;\n     }\n     .pb-").concat(i, " {\n       padding-bottom: ").concat(i, "px\n     }\n     .p-").concat(i, " {\n       padding: ").concat(i, "px\n     }\n     ");
    }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), styles);
};
export var GlobalStyles = createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  * {\n    font-family: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  ", ";\n"], ["\n  * {\n    font-family: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  ", ";\n"])), TYPOGRAPHY, spaces());
var templateObject_1, templateObject_2;
//# sourceMappingURL=global.styles.js.map