// external imports
import { FC } from "react";
import { useDispatch } from "react-redux";

// internal imports
// store
import { AppDispatch } from "store";
import { setIsShowAddProductModal } from "store/slices/modals.slice";
// styles
import { Container, Button } from "./styles";

const CreateProductWidget: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(setIsShowAddProductModal(true));
  };

  return (
    <Container>
      <Button type="button" onClick={handleClick}>
        +
      </Button>
    </Container>
  );
};

export default CreateProductWidget;
