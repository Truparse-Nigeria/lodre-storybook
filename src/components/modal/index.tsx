import React, { FC, ReactChild, useEffect, useState } from "react";
import { X } from "../../icons";
import Card, { CardBody } from "../card";
import { StyledModal, StyledModalBody, StyledModalClose } from "./styles";

interface ModalProps {
  trigger: boolean;
  children: ReactChild | ReactChild[] | string;
  width?: number;
  close: (trigger: boolean) => void;
}

const Modal: FC<ModalProps> = ({ trigger, children, width, close }) => {
  const [openModal, setOpenModal] = useState<boolean>();

  useEffect(() => {
    trigger ? setOpenModal(true) : setOpenModal(false);
  }, [trigger]);

  return (
    <>
      {openModal ? (
        <StyledModal>
          <StyledModalClose onClick={() => close(false)}>
            <X width={18} height={18} />
          </StyledModalClose>
          <StyledModalBody width={width}>
            <Card className="full">
              <CardBody>
                <>{children}</>
              </CardBody>
            </Card>
          </StyledModalBody>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
