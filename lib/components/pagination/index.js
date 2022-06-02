import React, { useEffect, useState } from "react";
import { Flex, SmallText } from "..";
import { CaretLeft, CaretRight } from "../../icons";
import { StyledPageButton, StyledPageNumber } from "./styled";
var Pagination = function (_a) {
    var pages = _a.pages, current = _a.current, goTo = _a.goTo;
    var _b = useState(current), currentPage = _b[0], setCurrentPage = _b[1];
    useEffect(function () {
        setCurrentPage(current);
    }, [current]);
    return (React.createElement(Flex, { alignItems: "center", gap: 1 },
        React.createElement(StyledPageButton, { disabled: currentPage === 1, onClick: function () {
                setCurrentPage(currentPage - 1);
                goTo(currentPage - 1);
            } },
            React.createElement(CaretLeft, { width: 24, height: 24 })),
        React.createElement(Flex, { alignItems: "center", gap: 1 }, pages >= 5 ? (React.createElement(SmallText, { weight: "w600" },
            "Page ",
            React.createElement(React.Fragment, null, currentPage),
            " of ",
            pages)) : (Array(pages)
            .fill("")
            .map(function (page, index) { return (React.createElement(StyledPageNumber, { onClick: function () {
                goTo(index + 1);
                setCurrentPage(index + 1);
            }, selected: index + 1 === currentPage, key: index },
            React.createElement(SmallText, { weight: "w500" }, index + 1))); }))),
        React.createElement(StyledPageButton, { disabled: currentPage === pages, onClick: function () {
                goTo(currentPage + 1);
                setCurrentPage(currentPage + 1);
            } },
            React.createElement(CaretRight, { width: 24, height: 24 }))));
};
export default Pagination;
//# sourceMappingURL=index.js.map