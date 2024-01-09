import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    width: 100vw;
  }
`;

export const Player = styled.div``;

export const Video = styled.iframe`
  width: 800px;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 500px;
    height: 420px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 300px;
    height: 220px;
  }
`;

export const AboutGame = styled.p`
  background-color: #b0bab0;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  padding: 10px;
`;
