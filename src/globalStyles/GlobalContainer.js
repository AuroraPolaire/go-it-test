import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  // 768px//
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 16px 0px;
  }
  // 1280px//
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0px 30px 0px;
  }
`;
