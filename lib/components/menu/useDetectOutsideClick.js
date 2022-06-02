import { useEffect, useState } from 'react';
export var useDetectOutsideClick = function (el, initialState) {
    var _a = useState(initialState), isActive = _a[0], setIsActive = _a[1];
    useEffect(function () {
        var onClick = function (e) {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener('click', onClick);
        }
        return function () {
            window.removeEventListener('click', onClick);
        };
    }, [isActive, el]);
    return [isActive, setIsActive];
};
//# sourceMappingURL=useDetectOutsideClick.js.map