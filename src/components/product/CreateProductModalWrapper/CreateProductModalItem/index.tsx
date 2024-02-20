// vendor imports
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

// local imports
// store
import { createNewLocalProduct } from "store/slices/product.slice";
import { setIsShowAddProductModal } from "store/slices/modals.slice";
// hooks
import useFormValidate from "hooks/useFormValidate";
// styles
import {
  ErrorMessage,
  Form,
  Input,
  SubmitButton,
} from "./styles";

const DEFAULT_FIELDS = {
  description: "",
  id: 0,
  image: "",
  price: 1,
  title: "",
};

const CreateProductModalItem: FC = () => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const { isTitleValid, titleErrorMessage } = useFormValidate(fields);

  const dispatch = useDispatch();

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFields((state) => ({ ...state, [name]: value }));
  };

  const handleAddProduct = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isTitleValid) {
      dispatch(
        createNewLocalProduct({
          title: fields.title,
          description: fields.description,
          id: fields.id,
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: fields.price,
        }),
      );
      setFields(DEFAULT_FIELDS);
      dispatch(setIsShowAddProductModal(false));
    }
  };

  return (
    <Form onSubmit={handleAddProduct}>
      <Input
        onChange={handleChangeField}
        name="title"
        value={fields.title}
        isValid={isTitleValid}
        placeholder="Введите название продукта"
      />
      {!isTitleValid && (
        <ErrorMessage>
          {titleErrorMessage}
        </ErrorMessage>
      )}
      <Input
        onChange={handleChangeField}
        name="description"
        value={fields.description}
        isValid={true}
        placeholder="Введите описание продукта"
      />
      <Input
        onChange={handleChangeField}
        type="number"
        name="price"
        value={fields.price}
        isValid={true}
        placeholder="Введите стоимость продукта"
        min={1}
        max={1000}
      />
      <SubmitButton isDisabled={!isTitleValid} type="submit">
        Добавить продукт
      </SubmitButton>
    </Form>
  );
};

export default CreateProductModalItem;
