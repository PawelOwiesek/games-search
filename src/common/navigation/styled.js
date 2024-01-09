import { styled } from "styled-components";
import { ReactComponent as logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Logo = styled(logo)`
  cursor: pointer;
  fill: ${({ theme }) => theme.logo};
`;

export const StyledLink = styled(NavLink)`
  text-decoration-line: none;
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) => theme.mainColor};
  font-weight: 700;
  margin-right: 10px;
`;
