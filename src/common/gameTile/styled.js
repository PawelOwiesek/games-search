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

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}) {
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin: 10px;
    width: 300px;
    height: 250px;
  }
`;

export const Details = styled.div`
  margin: 30px;
  font-size: 20px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
  }
`;
