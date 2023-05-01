import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.nav`
  font-size: 18px;
  font-weight: 600px;
  display: flex;
  gap: 15px;

  // 768px//
  @media screen and (min-width: 768px) {
    font-size: 20px;
    gap: 20px;
  }
  // 1280px//
  @media screen and (min-width: 1280px) {
    font-size: 25px;
    gap: 20px;
  }
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
