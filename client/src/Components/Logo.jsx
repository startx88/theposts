import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as LogoImage } from "./logo.svg";

export default ({ brandname, href, className }) => {
  return (
    <NavItem href={href} className="navbar-brand">
      <LogoImage width="40" /> {brandname}
    </NavItem>
  );
};
