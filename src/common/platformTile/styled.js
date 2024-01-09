import { styled } from "styled-components";

export const Platforms = styled.div``;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  padding: 0;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  font-size: 20px;
  margin: 7px;
  border: 4px solid ${({ theme }) => theme.primaryColor};
  border-radius: 25px;
  color: ${({ theme }) => theme.mainColor};
  background-color: ${({ theme }) => theme.alternativeBackground};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 16px;
    padding: 2px 0;
  }
`;
