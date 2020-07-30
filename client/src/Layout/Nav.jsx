import React from "react";
import NavItem from "../Components/NavItem";

export default (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <NavItem href="/posts" menu>
          Posts
        </NavItem>
        <NavItem href="/about" menu>
          About
        </NavItem>
        <NavItem href="/contact" menu>
          Contact
        </NavItem>
      </ul>
    </div>
  );
};
