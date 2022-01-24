import React from 'react';
import { Container } from '..';
import { StyledBottomNav, StyledGrid, StyledNavbar, } from './styled';
var Navbar = function (_a) {
    var logo = _a.logo, nav = _a.nav, search = _a.search, bottomNav = _a.bottomNav, children = _a.children;
    return (React.createElement("div", null,
        React.createElement(StyledNavbar, null,
            React.createElement(Container, null,
                React.createElement(StyledGrid, null,
                    React.createElement("div", null, logo),
                    search,
                    React.createElement("div", null, nav)))),
        React.createElement("main", null, children),
        React.createElement(StyledBottomNav, null, bottomNav)));
};
export default Navbar;
//# sourceMappingURL=index.js.map