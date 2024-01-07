import { styled } from "styled-components";

export const Platforms = styled.div``;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  font-size: 20px;
  margin: 7px;
  border: 4px solid #d7d1d1;
  border-radius: 25px;
  color: #1a1a1a;
  background-color: #fff;
  text-align: center;
`;
