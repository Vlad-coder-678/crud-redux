import React, { FC } from "react";

// local imports
import { Wrapper, Modal } from "./styles";

interface Props {
  children: any,
  handleCloseModal: () => void,
  isShowModal: boolean,
}

const ModalComponent: FC<Props> = ({
  children,
  handleCloseModal,
  isShowModal,
}) => {
  const handleStopPropagation = (event: any) => {
    event.stopPropagation();
  };

  return (
    <Wrapper
      isShowModal={isShowModal}
      onClick={handleCloseModal}
    >
      <Modal
        isShowModal={isShowModal}
        onClick={handleStopPropagation}
      >
        {children}
      </Modal>
    </Wrapper>
  );
};

export default ModalComponent;
