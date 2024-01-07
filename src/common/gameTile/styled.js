import { styled } from "styled-components";

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  text-decoration-line: none;
`;

export const Container = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  background-color: #b0bab0;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  grid-column: 1/3;
  justify-self: center;
  font-size: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

export const Image = styled.img`
  margin: 30px;
  width: 600px;
  height: 450px;
`;

export const Details = styled.div`
  margin: 30px;
  font-size: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

export const Description = styled.p``;
