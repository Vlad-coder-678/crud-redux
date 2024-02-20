import styled from "styled-components";

const Container = styled.div`
  width: calc(25% - 10px);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 grey;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 2000px) {
    width: calc(33% - 7px);
  }

  @media (max-width: 1000px) {
    width: calc(50% - 5px);
  }
`;

const TitleWrapper = styled.div`
  height: 44px;
`;

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 10px;
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50%;
  aspect-ratio: 1/1;
  object-fit: contain;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 2px 0 grey;
`;

const Price = styled.span`
  margin: auto;
  font-size: 30px;
  font-weight: 700;
`;

export {
  Container,
  Description,
  DescriptionWrapper,
  Image,
  Price,
  Title,
  TitleWrapper,
  Wrapper,
};
