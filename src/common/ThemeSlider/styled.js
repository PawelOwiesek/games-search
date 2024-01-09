import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../images/sunIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    position: absolute;
    right: 3px;
    top: 0;
    max-width: 100px;
    margin: 10px;
  }
`;

export const TextContent = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  color: ${({ theme }) => theme.mainColor};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 30px;
  background-image: ${({ theme }) => theme.themeButton.backgroundImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  margin: 0 0 0 -3px;
  background: ${({ theme }) => theme.primaryColor};
  transition: transform 0.3s;

  ${({ slideRight }) =>
    slideRight &&
    css`
      transform: translateX(20px);
    `};
`;

export const Sun = styled(SunIcon)`
  color: ${({ theme }) => theme.mainColor};
`;
