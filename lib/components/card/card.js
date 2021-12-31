import React from 'react';
import { Grid } from '..';
import { StyledCard, StyledCardBody, StyledImage, StyledImageRounded } from './styled';
var Card = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'light' : _b, children = _a.children, _c = _a.padding, padding = _c === void 0 ? 'small' : _c;
    return (React.createElement(StyledCard, { bgColor: bgColor },
        React.createElement(StyledCardBody, { padding: padding }, children)));
};
export var ProductCard = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'light' : _b, children = _a.children, _c = _a.padding, padding = _c === void 0 ? 'small' : _c, src = _a.src, _d = _a.height, height = _d === void 0 ? 215 : _d;
    return (React.createElement(StyledCard, { bgColor: bgColor },
        React.createElement(StyledImage, { height: height, src: src }),
        React.createElement(StyledCardBody, { padding: padding }, children)));
};
export var SideProductCard = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'light' : _b, children = _a.children, _c = _a.padding, padding = _c === void 0 ? 'small' : _c, src = _a.src, height = _a.height, _d = _a.imgSize, imgSize = _d === void 0 ? 'default' : _d;
    return (React.createElement(StyledCard, { bgColor: bgColor },
        React.createElement(StyledCardBody, { padding: padding },
            React.createElement(Grid, { md: imgSize === 'default' ? '100px 1fr' : '80px 1fr' },
                React.createElement(StyledImageRounded, { height: height, src: src }),
                React.createElement("div", null, children)))));
};
export default Card;
//# sourceMappingURL=card.js.map