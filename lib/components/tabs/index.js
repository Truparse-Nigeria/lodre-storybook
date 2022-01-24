import React, { useState } from "react";
import { TabContainer, TabGroup } from "./styled";
import TabTitle from "./tab-title";
var Tabs = function (_a) {
    var centered = _a.centered, foreground = _a.foreground, background = _a.background, radius = _a.radius, children = _a.children;
    var _b = useState(0), active = _b[0], setActive = _b[1];
    return (React.createElement(TabContainer, { centered: centered },
        React.createElement(TabGroup, { background: background, foreground: foreground, radius: radius }, children.map(function (item, index) { return (React.createElement(TabTitle, { key: index, index: index, title: item.props.title, active: active === index, setTab: setActive, foreground: foreground })); })),
        React.createElement("div", null, children[active])));
};
export default Tabs;
//# sourceMappingURL=index.js.map