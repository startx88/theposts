import React from "react";
import { Link, NavLink } from "react-router-dom";

export default ({ menu, href, className, children, exact }) => {
  return menu ? (
    <li className="nav-item">
      <NavLink
        exact={exact}
        className={["nav-link", className].join(" ")}
        to={href}
      >
        {children}
      </NavLink>
    </li>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};
