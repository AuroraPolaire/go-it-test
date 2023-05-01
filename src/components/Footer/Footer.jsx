import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyles/GlobalContainer";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div className="footer-flex">
          <Link to="/">
            <p className="logo">TweetsNet</p>
          </Link>
          <p className="rights"> &copy; All rights reserved</p>
        </div>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
