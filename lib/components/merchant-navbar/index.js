import React from "react";
import { Card, Grid } from "..";
import { StyledGrid, StyledMain, StyledNavbar } from "./styled";
var MerchantNavbar = function (_a) {
    var logo = _a.logo, nav = _a.nav, _b = _a.sideNavSize, sideNavSize = _b === void 0 ? 250 : _b, children = _a.children, navChildren = _a.navChildren;
    return (React.createElement("div", null,
        React.createElement(StyledNavbar, null,
            React.createElement(StyledGrid, null,
                React.createElement("div", null, logo),
                React.createElement("div", null, nav))),
        React.createElement(StyledMain, null,
            React.createElement(Grid, { xl: "".concat(sideNavSize, "px 1fr"), lg: "".concat(sideNavSize, "px 1fr"), md: "".concat(sideNavSize, "px 1fr") },
                React.createElement(Card, { className: "nav open" }, navChildren),
                React.createElement(React.Fragment, null, children)))));
};
export default MerchantNavbar;
//# sourceMappingURL=index.js.map