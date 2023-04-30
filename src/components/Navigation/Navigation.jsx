import React from "react";
import { StyledLink, StyledNavBar } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNavBar>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </StyledNavBar>
  );
};

export default Navigation;
