import { NavLink } from "react-router-dom";

export default function OPSection2() {
  return (
    <section className="OPSection2">
      <NavOP />
      <div className="img">IMAGE</div>
    </section>
  );
}

function NavOP() {
  function Left() {
    const Links = [
      { name: "Express 24 / 48h", href: "/" },
      { name: "Goodies écologiques", href: "/" },
      { name: "Made in France", href: "/" },
      { name: "Tous nos goodies", href: "/" },
    ];

    return (
      <div className="left">
        <div className="Menu">Menu</div>
        {Links.map((link, i) => {
          return (
            <NavLink key={i} to={link.href}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    );
  }

  function Right() {
    return (
      <div className="right">
        <input type="text" />
        <button>Mon devis</button>
      </div>
    );
  }

  return (
    <div className="nav">
      <Left />
      <Right />
    </div>
  );
}
