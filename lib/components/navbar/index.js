import React from 'react';
import { Col, Container, Flex, Paragraph } from '..';
import SvgCart from '../../icons/Cart';
import SvgHelp from '../../icons/Help';
import SvgSearch from '../../icons/Search';
import SvgUser from '../../icons/User';
import { StyledGrid, StyledNavbar, StyledSearchButton, StyledSearchInput, } from './styled';
var Navbar = function () {
    return (React.createElement("div", null,
        React.createElement(StyledNavbar, null,
            React.createElement(Container, null,
                React.createElement(StyledGrid, null,
                    React.createElement("div", null, "logo"),
                    React.createElement(Flex, { gap: 0 },
                        React.createElement(StyledSearchInput, { type: "text", placeholder: "Search for anything..." }),
                        React.createElement(StyledSearchButton, null,
                            React.createElement(SvgSearch, { width: "20", height: "20" }))),
                    React.createElement("div", null,
                        React.createElement(Flex, { gap: 2 },
                            React.createElement(Col, null,
                                React.createElement(Flex, { gap: 0.5, alignItems: "center" },
                                    React.createElement(Col, null,
                                        React.createElement(SvgCart, { width: "20", height: "20" })),
                                    React.createElement(Col, null,
                                        React.createElement(Paragraph, { weight: "w600" }, "Cart")))),
                            React.createElement(Col, null,
                                React.createElement(Flex, { gap: 0.5, alignItems: "center" },
                                    React.createElement(Col, null,
                                        React.createElement(SvgUser, { width: "20", height: "20" })),
                                    React.createElement(Col, null,
                                        React.createElement(Paragraph, { weight: "w600" }, "My Account")))),
                            React.createElement(Col, null,
                                React.createElement(Flex, { gap: 0.5, alignItems: "center" },
                                    React.createElement(Col, null,
                                        React.createElement(SvgHelp, { width: "20", height: "20" })),
                                    React.createElement(Col, null,
                                        React.createElement(Paragraph, { weight: "w600" }, "Help"))))))))),
        React.createElement("div", null,
            React.createElement(Container, null,
                React.createElement(Flex, { justifyContent: "space-between" },
                    React.createElement(Col, { size: 1 },
                        React.createElement(SvgUser, { width: 20, height: 20 }),
                        React.createElement(Paragraph, { size: "xSmall", weight: "w600" }, "Account")),
                    React.createElement(Col, { size: 1 },
                        React.createElement(SvgUser, { width: 20, height: 20 }),
                        React.createElement(Paragraph, { size: "xSmall", weight: "w600" }, "Account")),
                    React.createElement(Col, { size: 1 },
                        React.createElement(SvgCart, { width: 20, height: 20 }),
                        React.createElement(Paragraph, { size: "xSmall", weight: "w600" }, "My Cart")),
                    React.createElement(Col, { size: 1 },
                        React.createElement(SvgHelp, { width: 20, height: 20 }),
                        React.createElement(Paragraph, { size: "xSmall", weight: "w600" }, "Help")),
                    React.createElement(Col, { size: 1 },
                        React.createElement(SvgUser, { width: 20, height: 20 }),
                        React.createElement(Paragraph, { size: "xSmall", weight: "w600" }, "Account")))))));
};
export default Navbar;
//# sourceMappingURL=index.js.map