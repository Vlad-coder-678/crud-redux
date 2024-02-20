import styled, { css } from "styled-components";

const Wrapper = styled.div<{ isShowModal: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  overflow: hidden;
  transition: opacity 0.3s ease;
  z-index: 1;

  ${({ isShowModal }) =>
    (isShowModal ?
      css`
          opacity: 1;
          pointer-events: all;
        ` :
      css`
          opacity: 0;
          pointer-events: none;
        `)}
`;

const Modal = styled.div<{ isShowModal: boolean }>`
  position: relative;
  width: 768px;
  background-color: #ddd;
  border-radius: 20px;
  padding: 10px;
  transition: transform 0.3s ease;

  ${({ isShowModal }) =>
    (isShowModal ?
      css`
          transform: scale(1);
        ` :
      css`
          transform: scale(0.5);
        `)}
`;

export { Wrapper, Modal };
