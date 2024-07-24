import { NavLink } from "react-router-dom";

export default function Footer() {
  const offerLinks = [
    "Accueil",
    "Graphisme",
    "Objets publicitaires",
    "Actualités",
    "Blog",
    "Contact",
  ];

  const agenceLinks = ["Conditions générales de vente", "Mentions légales"];

  return (
    <footer>
      <div className="logo"></div>
      <div className="offerContainer">
        <div className="offer">
          <h2>Notre offre</h2>
          {offerLinks.map((link, i) => {
            return (
              <NavLink key={i} to={"/"}>
                {link}
              </NavLink>
            );
          })}
        </div>
        <div className="agence">
          <h2>L'agence</h2>
          {agenceLinks.map((link, i) => {
            return (
              <NavLink key={i} to={"/"}>
                {link}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="contact"></div>
      <div className="social"></div>
    </footer>
  );
}
