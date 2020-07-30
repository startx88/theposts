import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default (props) => {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
};
