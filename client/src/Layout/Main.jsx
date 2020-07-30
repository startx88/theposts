import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default (props) => {
  return (
    <>
      <Header />
      <div className="container mt-3 mb-3">{props.children}</div>
      <Footer />
    </>
  );
};
