import styled from "styled-components";

export const StyledLogo = styled.h2`
  font-size: 20px;
  background-image: linear-gradient(60deg, #00e23c, #bd009e);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all var(--transition-dur-and-func);

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(60deg, #ffffff, #ffffff);
  }

  // 768px//
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  // 1280px//
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;
