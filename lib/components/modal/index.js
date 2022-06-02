import React, { useEffect, useState } from "react";
import { X } from "../../icons";
import Card, { CardBody } from "../card";
import { StyledModal, StyledModalBody, StyledModalClose } from "./styles";
var Modal = function (_a) {
    var trigger = _a.trigger, children = _a.children, width = _a.width, close = _a.close;
    var _b = useState(), openModal = _b[0], setOpenModal = _b[1];
    useEffect(function () {
        trigger ? setOpenModal(true) : setOpenModal(false);
    }, [trigger]);
    return (React.createElement(React.Fragment, null, openModal ? (React.createElement(StyledModal, null,
        React.createElement(StyledModalClose, { onClick: function () { return close(false); } },
            React.createElement(X, { width: 18, height: 18 })),
        React.createElement(StyledModalBody, { width: width },
            React.createElement(Card, { className: "full" },
                React.createElement(CardBody, null,
                    React.createElement(React.Fragment, null, children)))))) : null));
};
export default Modal;
//# sourceMappingURL=index.js.map