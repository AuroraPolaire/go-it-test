import React from "react";
import { Wrapper } from "../../globalStyles/GlobalContainer";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div className="footer-flex">
          <p className="logo">TweetsNet</p>
          <p className="rights"> &copy; All rights reserved</p>
        </div>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
