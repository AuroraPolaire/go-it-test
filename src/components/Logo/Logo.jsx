import React from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">TweetsNet</Link>
    </StyledLogo>
  );
};

export default Logo;
