export var VIEWPORT = {
    sm: 575.98,
    md: 767.98,
    lg: 991.98,
    xl: 1153.98,
};
export var SIDE_PADDINGS = {
    large: 30,
    default: 25,
    small: 20,
};
export var RADIUS = {
    large: 12,
    default: 8,
    small: 4,
};
export var HEIGHTS = {
    inputs: {
        large: 55,
        default: 45,
        small: 35,
    },
    buttons: {
        large: 58,
        default: 52,
        small: 45,
    },
};
export var CONTAINER = {
    lg: 1140,
    xl: 1200,
};
export var mediaQueries = function (key) {
    return function (style) {
        return "@media (min-width: ".concat(VIEWPORT[key], "px) { ").concat(style, " }");
    };
};
//# sourceMappingURL=sizes.js.map