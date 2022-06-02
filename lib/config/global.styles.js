var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// @ts-ignore
import { createGlobalStyle, css } from "styled-components";
import { PALETTE } from "../tokens/color";
import { FONT_WEIGHT, TYPOGRAPHY } from "../tokens/font";
import { mediaQueries, RADIUS } from "../tokens/sizes";
import "./fonts/styles.css";
var space = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100];
var spaces = function () {
    var styles = "";
    for (var _i = 0, space_1 = space; _i < space_1.length; _i++) {
        var i = space_1[_i];
        styles += "\n      .mt-".concat(i, " {\n         margin-top: ").concat(i, "px;\n       }\n      .mx-").concat(i, " {\n        margin-left: ").concat(i, "px;\n        margin-right: ").concat(i, "px;\n      }\n      .my-").concat(i, " {\n        margin-top: ").concat(i, "px;\n        margin-bottom: ").concat(i, "px;\n      }\n      .mb-").concat(i, " {\n        margin-bottom: ").concat(i, "px;\n      }\n      .m-").concat(i, " {\n        margin: ").concat(i, "px;\n      }\n      .pt-").concat(i, " {\n        padding-top: ").concat(i, "px;\n      }\n     .px-").concat(i, " {\n       padding-left: ").concat(i, "px;\n       padding-right: ").concat(i, "px;\n     }\n     .py-").concat(i, " {\n      padding-top: ").concat(i, "px;\n      padding-bottom: ").concat(i, "px;\n     }\n     .pb-").concat(i, " {\n       padding-bottom: ").concat(i, "px;\n     }\n     .p-").concat(i, " {\n       padding: ").concat(i, "px;\n     }\n     .h-").concat(i, " {\n       height: ").concat(i, "%;\n     }\n     ");
    }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), styles);
};
var bg = function () {
    var styles = "";
    var colors = Object.keys(PALETTE);
    var count = 0;
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        var hex = Object.values(PALETTE)[count];
        styles += "\n      .bg-".concat(color, " {\n         background-color: ").concat(hex, ";\n       }\n      .text-").concat(color, " {\n        color: ").concat(hex, ";\n      }\n     ");
        count++;
    }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), styles);
};
export var display = function () {
    var hidden = "";
    for (var _i = 0, _a = ["xs", "sm", "md", "lg", "xl"]; _i < _a.length; _i++) {
        var size = _a[_i];
        var newSize = size;
        hidden += "\n      ".concat(mediaQueries(newSize)("\n        .hidden-".concat(size, "{\n          display: none;\n          pointer-events: none;\n        }\n        .block-").concat(size, "{\n          display: block;\n          pointer-events: auto;\n        }\n      ")), "\n    ");
    }
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), hidden);
};
export var GlobalStyles = createGlobalStyle(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  * {\n    font-family: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  b {\n    font-weight: ", ";\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .rounded {\n    border-radius: ", "px;\n    overflow: hidden;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  * {\n    font-family: ", ";\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  b {\n    font-weight: ", ";\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .rounded {\n    border-radius: ", "px;\n    overflow: hidden;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"])), TYPOGRAPHY, FONT_WEIGHT.w600, RADIUS.small, spaces(), bg(), display());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=global.styles.js.map