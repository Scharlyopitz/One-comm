import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const Links = [
    "Graphic design",
    "Objets publicitaires",
    "Actualités",
    "Contact",
  ];

  return (
    <nav>
      <ul>
        {Links.map((link, i) => {
          return (
            <li key={i}>
              <NavLink to={"/"}>{link}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
