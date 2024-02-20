// external imports
import React, { FC } from "react";
import { useDispatch } from "react-redux";

// internal imports
// models
import { IProductModel } from "models";
// store
import { deleteLocaleProduct } from "store/slices/product.slice";
// components
import Description from "components/common/Description";
// styles
import { Container, DescriptionWrapper, Image, Price, Title, TitleWrapper, Wrapper } from "./styles";

interface Props extends IProductModel {};

const ProductCard: FC<Props> = ({
  description,
  id,
  image,
  price,
  title,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteLocaleProduct(id));
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>
          {title}
        </Title>
      </TitleWrapper>
      <DescriptionWrapper>
        <Description text={description} />
      </DescriptionWrapper>
      <Wrapper>
        <Image src={image} alt={title} />
        <Price>
          {`$${price}`}
        </Price>
      </Wrapper>
      <button type="button" onClick={handleClick}>
        delete
      </button>
    </Container>
  );
};

export default ProductCard;
