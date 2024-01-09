import { styled } from "styled-components";
import { ReactComponent as logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Logo = styled(logo)`
  cursor: pointer;
  fill: ${({ theme }) => theme.logo};
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 25px;
    height: 60px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration-line: none;
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 700;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
