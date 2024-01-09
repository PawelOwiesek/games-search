import { styled } from "styled-components";

export const Input = styled.input`
  display: inline-block;
  width: 430px;

  height: 48px;
  border-radius: 25px;
  border: 1px solid #131313;
  background-color: #f4f4f4;
  text-align: center;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    width: 200px;
    height: 30px;
    text-align: center;
    padding: 5px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    text-align: center;
    max-width: 90vw;
    margin-bottom: 5px;
    font-size: 16px;
    padding: 0;
    height: 25px;
  }
`;
