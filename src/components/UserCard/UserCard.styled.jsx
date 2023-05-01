import styled from "styled-components";

import background1x from "../../images/bg1x.webp";
import background2x from "../../images/bg2x.webp";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 320px;
  height: 460px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: url(${background1x}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px 168px, cover;
  background-position: 5px 28px, center;
  background-repeat: no-repeat, no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${background2x}),
      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;
    width: 350px;
    background-position: 20px 28px, center;
  }

  @media screen and (min-width: 1280px) {
    width: 380px;
    background-position: 36px 28px, center;
  }

  & svg {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
    stroke: rgba(255, 255, 255, 0.3);
  }

  & .pseudo-elements {
    position: relative;
    margin-top: 185px;
    height: 62px;
    border-radius: 50%;
    z-index: 2;
  }

  .pseudo-elements::after {
    position: absolute;
    width: 80px;
    height: 80px;
    top: -9px;
    bottom: -9px;
    left: -9px;
    right: -9px;
    background: #ebd8ff;
    content: "";
    z-index: -1;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  .pseudo-elements::before {
    position: absolute;
    width: 320px;
    height: 8px;
    top: 30px;
    left: -129px;
    background: #ebd8ff;
    content: "";
    z-index: -1;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;

    // 768px//
    @media screen and (min-width: 768px) {
      width: 350px;
      left: -144px;
    }

    @media screen and (min-width: 1280px) {
      width: 380px;
      left: -159px;
    }
  }

  & img {
    /* position: relative; */
    width: 62px;
    border-radius: 50%;
    filter: drop-shadow(0 -0.5mm 0.5mm rgba(174, 123, 227, 1));
  }

  .tooltip {
    white-space: nowrap;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: -90%;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    font-size: 18px;
    text-align: center;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 8px;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 45%;
    transform: rotate(45deg);
    background-color: #f4f4f4;
    padding: 5px;
    z-index: 1;
  }

  .hover-tooltip:hover .tooltip {
    visibility: visible;
  }

  & ul {
    margin: 34px 0 26px;
    text-align: center;
  }

  & li:first-child {
    padding-bottom: 16px;
  }

  & li {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #ebd8ff;
  }

  button {
    padding: 14px 56px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
    border-radius: 10px;
    border: 0px;
    transition: background-color var(--transition-dur-and-func);
  }

  .not-following {
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }

  .not-following:hover {
    background-color: #5cd3a8;
    cursor: pointer;
  }

  .following {
    background-color: #5cd3a8;
    transition: background-color var(--transition-dur-and-func);
  }

  .following:hover {
    background-color: #ebd8ff;
  }
`;
