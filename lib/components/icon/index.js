import React from 'react';
import { StyledIcon } from './styled';
export var Icon = function (_a) {
    var children = _a.children, _b = _a.bgColor, bgColor = _b === void 0 ? 'primary' : _b, _c = _a.width, width = _c === void 0 ? 24 : _c, _d = _a.height, height = _d === void 0 ? 24 : _d;
    return (React.createElement(StyledIcon, { bgColor: bgColor, width: width, height: height }, children));
};
//# sourceMappingURL=index.js.map