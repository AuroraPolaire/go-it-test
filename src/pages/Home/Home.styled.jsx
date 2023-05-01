import styled from "styled-components";

import background1x from "../../images/bg1x.webp";
import background2x from "../../images/bg2x.webp";

export const HomeContainer = styled.div`
  /* height: 300px; */
  text-align: left;
  margin: 20px 0 0 20px;
  background-image: url(${background1x});
  background-size: 200px 100px;
  background-position: 50% 90px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${background2x});
  }

  @media screen and (min-width: 768px) {
    /* height: 400px; */
    margin: 80px 0 0 50px;
    background-image: url(${background1x});
    background-size: 308px 168px;
    background-position: 45% 120px;
  }
  // 1280px//
  @media screen and (min-width: 1280px) {
    margin: 80px 0 0 200px;
    background-image: url(${background1x});
    background-size: 400px 200px;
    background-position: 90% 130px;
  }

  & h1 {
    text-align: center;
    font-size: 25px;

    @media screen and (min-width: 768px) {
      font-size: 50px;
      text-align: left;
    }
  }

  & ul {
    margin-top: 160px;
    font-size: 16px;

    @media screen and (min-width: 768px) {
      margin-top: 300px;
      font-size: 25px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 100px;
    }
  }

  & li:not(:first-child) {
    padding-top: 20px;
  }

  & .button-box {
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
      justify-content: left;
    }
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

    @media screen and (min-width: 768px) {
      margin-top: 80px;
    }
  }
`;
