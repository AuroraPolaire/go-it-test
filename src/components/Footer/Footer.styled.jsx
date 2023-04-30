import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #461ca937;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  & .footer-flex {
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .logo {
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
  }

  & .rights {
    font-size: 12px;
  }
`;
