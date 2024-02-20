// external imports
import React, { FC } from "react";
import { useSelector } from "react-redux";

// internal imports
// store
import { productState } from "store/slices/product.slice";
// components
import ProductCardComponent from "components/product/Card";
// styles
import { Container } from "./styles";

const ProductList: FC = () => {
  const { products } = useSelector(productState);

  return (
    <Container>
      {products.map(({
        description,
        id,
        price,
        image,
        title,
      }) => (
        <ProductCardComponent
          key={id}
          description={description}
          id={id}
          image={image}
          price={price}
          title={title}
        />
      ))}
    </Container>
  );
};

export default ProductList;
