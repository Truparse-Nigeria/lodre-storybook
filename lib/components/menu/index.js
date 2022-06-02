import React, { useRef } from 'react';
import { More } from '../../icons';
import { StyledMenu, StyledMenuContainer, StyledMenuTrigger } from './styled';
import { useDetectOutsideClick } from './useDetectOutsideClick';
var Menu = function (_a) {
    var children = _a.children;
    var dropdownRef = useRef(null);
    var _b = useDetectOutsideClick(dropdownRef, false), isActive = _b[0], setIsActive = _b[1];
    var onClick = function () { return setIsActive(!isActive); };
    return (React.createElement(StyledMenuContainer, null,
        React.createElement(StyledMenuTrigger, { onClick: onClick },
            React.createElement(More, null)),
        React.createElement(StyledMenu, { ref: dropdownRef, toggle: isActive }, children)));
};
export default Menu;
//# sourceMappingURL=index.js.map