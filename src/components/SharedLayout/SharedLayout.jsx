import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../globalStyles/GlobalContainer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Main } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
