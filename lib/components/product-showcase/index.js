import React, { useCallback, useEffect, useState } from "react";
import { Button } from "..";
import { CaretLeft, CaretRight } from "../../icons";
import { StyledImageSelectFlex, StyledIndicators, StyledIndicatorsContainer, StyledSelectedImage, StyledSelectedImageContainer, StyledSmallImages, } from "./styled";
var ProductShowcase = function (_a) {
    var pictures = _a.pictures, height = _a.height, _b = _a.timeout, timeout = _b === void 0 ? 3000 : _b, _c = _a.showButtons, showButtons = _c === void 0 ? true : _c, _d = _a.showThumbs, showThumbs = _d === void 0 ? true : _d, _e = _a.showIndicators, showIndicators = _e === void 0 ? true : _e;
    var _f = useState(0), key = _f[0], setKey = _f[1];
    var _g = useState(pictures[key]), selected = _g[0], setSelected = _g[1];
    var goForward = useCallback(function () {
        if (key === pictures.length - 1) {
            setKey(0);
        }
        else {
            setKey(key + 1);
        }
    }, [key, pictures.length]);
    var goBack = useCallback(function () {
        if (key === 0) {
            setKey(pictures.length - 1);
        }
        else {
            setKey(key - 1);
        }
    }, [key, pictures.length]);
    useEffect(function () {
        setSelected(pictures[key]);
    }, [key, pictures]);
    useEffect(function () {
        var timer = setTimeout(function () {
            goForward();
        }, timeout);
        return function () {
            clearTimeout(timer);
        };
    }, [goForward, timeout]);
    return (React.createElement("div", null,
        React.createElement(StyledSelectedImageContainer, null,
            React.createElement(StyledSelectedImage, { height: height, src: selected, alt: "product display" }),
            showButtons && (React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: function () { return goBack(); }, className: "left" },
                    React.createElement(CaretLeft, null)),
                React.createElement(Button, { onClick: function () { return goForward(); }, className: "right" },
                    React.createElement(CaretRight, null)))),
            showIndicators && (React.createElement(StyledIndicatorsContainer, null, Array(pictures.length)
                .fill("indicator")
                .map(function (item, index) { return (React.createElement(StyledIndicators, { onClick: function () { return setKey(index); }, key: index, selected: key === index })); })))),
        showThumbs && (React.createElement(StyledImageSelectFlex, { className: "mt-10" }, pictures.map(function (item, index) { return (React.createElement(StyledSmallImages, { selected: selected === item, src: item, key: index, alt: "product showcase thumbnail", onClick: function () { return setKey(index); } })); })))));
};
export default ProductShowcase;
//# sourceMappingURL=index.js.map