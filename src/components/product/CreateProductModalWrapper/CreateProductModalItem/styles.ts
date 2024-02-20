import styled, { css } from "styled-components";

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input<{ isValid: boolean }>`
  width: 320px;
  box-sizing: border-box;
  font-size: 16px;
  height: 40px;
  border: ${({ isValid }) => (isValid ? "2px solid #000" : "2px solid #cc0000")};
  border-radius: 30px;
  padding: 20px;
`;

const ErrorMessage = styled.span`
  height: 16px;
  text-align: left;
  color: #cc0000;
`;

const SubmitButton = styled.button<{ isDisabled: boolean }>`
  background-color: rgba(19, 1, 1, 1);
  color: rgba(255, 255, 255, 1);
  border-color: rgba(118, 118, 118, 1);
  cursor: pointer;

  ${({ isDisabled }) => isDisabled && css`
    background-color: rgba(19, 1, 1, 0.5);
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(118, 118, 118, 0.5);
    cursor: default;
  `}
`;

export {
  Form,
  Input,
  ErrorMessage,
  SubmitButton,
};
