import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      height="200"
      width="200"
      color="white"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
    />
  );
};

export default Loader;
