import React, { useEffect, useState } from "react";
import { StyledFullWidthContainer, TabContainer, TabGroup } from "./styled";
import TabTitle from "./tab-title";
var Tabs = function (_a) {
    var centered = _a.centered, foreground = _a.foreground, background = _a.background, _b = _a.radius, radius = _b === void 0 ? false : _b, children = _a.children, activeTab = _a.activeTab;
    var _c = useState(0), active = _c[0], setActive = _c[1];
    useEffect(function () {
        if (activeTab)
            setActive(activeTab);
    }, [activeTab]);
    return (React.createElement(TabContainer, { centered: centered },
        React.createElement(TabGroup, { background: background, foreground: foreground, radius: radius, number: children.length }, children.map(function (item, index) { return (React.createElement(TabTitle, { key: index, index: index, title: item.props.title, active: active === index, setTab: setActive, foreground: foreground })); })),
        React.createElement(StyledFullWidthContainer, null, children[active])));
};
export default Tabs;
//# sourceMappingURL=index.js.map