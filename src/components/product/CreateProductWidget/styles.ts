import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 0 5px 0 grey;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 2rem;
  color: #222;
`;

export {
  Button,
  Container,
};
