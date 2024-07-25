import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <Logo />
      <Links />
    </nav>
  );
}

function Logo() {
  return (
    <div
      style={{
        color: "#ffffff",
        position: "absolute",
        left: 15,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      LOGO
    </div>
  );
}

function Links() {
  const Links = ["Graphic design", "Objets publicitaires", "Actualités"];

  return (
    <ul>
      {Links.map((link, i) => {
        return (
          <li key={i}>
            <NavLink to={"/"}>
              {link} <FontAwesomeIcon icon={faChevronDown} />
            </NavLink>
          </li>
        );
      })}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}
