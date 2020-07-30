import React from "react";
import Logo from "../Components/Logo";
import Nav from "./Nav";

export default (props) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <Logo href="/" brandname="thePosts" />
        <Nav />
      </div>
    </header>
  );
};
