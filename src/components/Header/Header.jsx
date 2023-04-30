import React from "react";
import { Wrapper } from "../../globalStyles/GlobalContainer";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <div className="nav-flex">
            <Logo />
            <Navigation />
          </div>
        </Wrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
