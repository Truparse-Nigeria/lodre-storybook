var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { mediaQueries } from '../../tokens/sizes';
export var StyledGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", "; \n  gap: ", "rem;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: grid;\n  grid-template-columns: ", "; \n  gap: ", "rem;\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) { return props.xs || '1fr'; }, function (props) { return props.gap; }, function (props) {
    return props.sm &&
        mediaQueries('sm')("\n      grid-template-columns: ".concat(props.sm, "; \n      display: grid; \n      "));
}, function (props) {
    return props.md &&
        mediaQueries('md')("\n      grid-template-columns: ".concat(props.md, "; \n      display: grid;\n      "));
}, function (props) {
    return props.lg &&
        mediaQueries('lg')("\n      grid-template-columns: ".concat(props.lg, "; \n      display: grid;\n      "));
}, function (props) {
    return props.xl &&
        mediaQueries('xl')("\n      grid-template-columns: ".concat(props.xl, "; \n      display: grid;\n      "));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map