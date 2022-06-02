import React, { useState } from "react";
import { Flex, Grid } from "..";
import { MenuLine, X } from "../../icons";
import { StyledGrid, StyledMain, StyledNavbar, StyledSideNav } from "./styled";
var MerchantNavbar = function (_a) {
    var logo = _a.logo, nav = _a.nav, sideNavSize = _a.sideNavSize, children = _a.children, navChildren = _a.navChildren;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    return (React.createElement("div", null,
        React.createElement(StyledNavbar, null,
            React.createElement(StyledGrid, null,
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(MenuLine, { width: 24, height: 24, className: "menu-icon", onClick: function () { return setOpen(!open); } }),
                    React.createElement(React.Fragment, null, logo)),
                React.createElement("div", null, nav))),
        React.createElement(StyledMain, null,
            React.createElement(Grid, { className: "main", xl: "".concat(sideNavSize, "px 1fr"), lg: "".concat(sideNavSize, "px 1fr"), md: "".concat(sideNavSize, "px 1fr"), sm: "1fr" },
                React.createElement(StyledSideNav, { width: sideNavSize, open: open },
                    React.createElement(Flex, { justifyContent: "end" },
                        React.createElement(React.Fragment, null, open && (React.createElement(X, { width: 18, height: 18, onClick: function () { return setOpen(false); } })))),
                    navChildren),
                React.createElement(React.Fragment, null, children)))));
};
export default MerchantNavbar;
//# sourceMappingURL=index.js.map