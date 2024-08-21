import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import categories from "../../assets/categories.json";
import { useEffect, useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();

  const [categorieOn, setCategorieOn] = useState(false);

  useEffect(() => {
    categories.find((cate) => `/objetsPublicitaires/${cate.href}` === pathname)
      ? setCategorieOn(true)
      : setCategorieOn(false);
  }, [pathname]);

  return (
    <nav style={{ boxShadow: categorieOn && "none" }}>
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
  const Links = [
    {
      name: "Graphic design",
      href: "/graphicDesign",
    },
    {
      name: "Objets publicitaires",
      href: "/objetsPublicitaires",
    },
    {
      name: "Actualités",
      href: "/actualites",
      link: [
        { name: "Express", href: "/express" },
        { name: "Super", href: "/super" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <ul>
      {Links.map((link, i) => {
        return (
          <li key={i}>
            <NavLink to={link.href}>
              {link.name}{" "}
              {link?.link && <FontAwesomeIcon icon={faChevronDown} />}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
