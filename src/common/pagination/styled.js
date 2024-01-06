import { styled } from "styled-components";

export const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #b0bab0;
  color: #1a1a1a;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    background-color: #7d7d7d;
  }
`;
