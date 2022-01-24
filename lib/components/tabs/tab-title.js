var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback } from "react";
import { Paragraph } from "..";
import { StyledTabTitle } from "./styled";
var TabTitle = function (_a) {
    var title = _a.title, active = _a.active, index = _a.index, setTab = _a.setTab, foreground = _a.foreground, props = __rest(_a, ["title", "active", "index", "setTab", "foreground"]);
    var onClick = useCallback(function () {
        setTab(index);
    }, [setTab, index]);
    return (React.createElement(StyledTabTitle, __assign({ active: active, onClick: onClick, foreground: foreground }, props),
        React.createElement(Paragraph, { weight: "w500" }, title)));
};
export default TabTitle;
//# sourceMappingURL=tab-title.js.map