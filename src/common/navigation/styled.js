import { styled } from "styled-components";
import { ReactComponent as logo } from "../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #d7d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Logo = styled(logo)`
  cursor: pointer;
  fill: #008080;
`;

export const StyledLink = styled(NavLink)`
  text-decoration-line: none;
  cursor: pointer;
  font-size: 25px;
  color: #1a1a1a;
  font-weight: 700;
  margin-right: 10px;
`;
