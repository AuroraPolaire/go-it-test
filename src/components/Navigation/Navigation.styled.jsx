import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.nav`
  font-size: 25px;
  font-weight: 600px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  transition: color var(--transition-dur-and-func);

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`;
