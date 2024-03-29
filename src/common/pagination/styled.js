import { styled } from "styled-components";

export const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.mainColor};
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.disabledColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 7px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 900;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-weight: 400;
    font-size: 16px;
  }
`;
