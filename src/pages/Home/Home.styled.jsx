import styled from "styled-components";

import background1x from "../../images/bg1x.webp";
import background2x from "../../images/bg2x.webp";

export const HomeContainer = styled.div`
  height: 400px;
  text-align: left;
  margin: 20px 0 0 20px;
  background-image: url(${background1x});
  background-size: 150px 80px;
  background-position: 200px 200px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${background2x});
  }

  @media screen and (min-width: 768px) {
    margin: 80px 0 0 50px;
    background-image: url(${background1x});
    background-size: 308px 168px;
    background-position: 350px 100px;
  }
  // 1280px//
  @media screen and (min-width: 1280px) {
    margin: 80px 0 0 200px;
    background-image: url(${background1x});
    background-size: 308px 168px;
    background-position: 450px 100px;
  }

  & h1 {
    font-size: 30px;
    @media screen and (min-width: 768px) {
      font-size: 50px;
    }
  }

  & ul {
    margin-top: 50px;
    font-size: 20px;
  }

  & li:not(:first-child) {
    padding-top: 20px;
  }

  & button {
    margin-top: 50px;
    padding: 14px 56px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
    border-radius: 10px;
    border: 0px;
    transition: background-color var(--transition-dur-and-func);
    background-color: #ae7be3;
    transition: background-color var(--transition-dur-and-func);

    &:hover {
      background-color: #ebd8ff;
      cursor: pointer;
    }
  }
`;
