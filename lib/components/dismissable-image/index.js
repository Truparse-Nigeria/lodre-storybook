import React from "react";
import { X } from "../../icons";
import { StyledDimissableImageContainer, StyledDismissable, StyledDismissableImage, } from "./styled";
var DimissableImage = function (_a) {
    var src = _a.src, dismissable = _a.dismissable, removeImage = _a.removeImage, id = _a.id;
    return (React.createElement(StyledDimissableImageContainer, null,
        React.createElement(StyledDismissableImage, { src: src }),
        dismissable && (React.createElement(StyledDismissable, { type: "button", onClick: function () { return removeImage(id); } },
            React.createElement(X, { width: 15, height: 15 })))));
};
export default DimissableImage;
//# sourceMappingURL=index.js.map