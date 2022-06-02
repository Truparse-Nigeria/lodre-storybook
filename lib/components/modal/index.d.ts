import { FC, ReactChild } from "react";
interface ModalProps {
    trigger: boolean;
    children: ReactChild | ReactChild[] | string;
    width?: number;
    close: (trigger: boolean) => void;
}
declare const Modal: FC<ModalProps>;
export default Modal;
//# sourceMappingURL=index.d.ts.map