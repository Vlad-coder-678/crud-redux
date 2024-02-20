// external imports
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

// internal imports
// assets
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
// store
import { modalsState, setIsShowAddProductModal } from "store/slices/modals.slice";
// components
import ModalComponent from "components/common/ModalComponent";
// styled
import  { Container, WrapperCloseButton } from "./styled";
import CreateProductModalItem from "./CreateProductModalItem";

const CreateProductModalWrapper: FC = () => {
  const { isShowAddProductModal } = useSelector(modalsState);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsShowAddProductModal(false));
  };

  return (
    <ModalComponent
      handleCloseModal={handleCloseModal}
      isShowModal={isShowAddProductModal}
    >
      <Container>
        <CreateProductModalItem />
        <WrapperCloseButton>
          <CloseIcon onClick={handleCloseModal} />
        </WrapperCloseButton>
      </Container>
    </ModalComponent>
  );
};

export default CreateProductModalWrapper;
