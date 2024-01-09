import { styled } from "styled-components";

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  border: 4px solid ${({ theme }) => theme.primaryColor};
  margin-bottom: 100px;

  &:hover {
    border-color: ${({ theme }) => theme.hoverColor};
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  grid-column: 1/3;
  justify-self: center;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 700;
  letter-spacing: 3px;
`;

export const Image = styled.img`
  margin: 30px;
  width: 600px;
  height: 450px;
`;

export const Details = styled.div`
  margin: 30px;
  font-size: 20px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 700;
`;

export const Description = styled.p``;
