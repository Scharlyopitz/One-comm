import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ adress, commune, mail, tel }) {
  return (
    <footer>
      <LogoSection />
      <Links />
      <ContactSection adress={adress} commune={commune} mail={mail} tel={tel} />
      <SocialSection />
      <Copyright />
    </footer>
  );
}

function LogoSection() {
  return (
    <div className="logo">
      <p>logo</p>
    </div>
  );
}

function Links() {
  const offerLinks = [
    "Accueil",
    "Graphisme",
    "Objets publicitaires",
    "Actualités",
    "Blog",
    "Contact",
  ];

  const agenceLinks = [
    "Politique de confidentialité",
    "Conditions générales de vente",
    "Mentions légales",
  ];

  return (
    <div className="linksContainer">
      <div className="link">
        <h2>Notre offre</h2>
        {offerLinks.map((link, i) => {
          return (
            <NavLink key={i} to={"/"}>
              {link}
            </NavLink>
          );
        })}
      </div>
      <div className="link">
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
  );
}

function ContactSection({ adress, commune, mail, tel }) {
  return (
    <div className="contactContainer">
      <div className="contacts">
        <div className="adress">
          <p>{adress}</p>
          <p>{commune}</p>
        </div>
        <div className="contact">
          <p>{mail}</p>
          <p>{tel}</p>
        </div>
      </div>
    </div>
  );
}

function SocialSection() {
  const medias = [
    {
      icon: <FontAwesomeIcon icon={faInstagram} style={{ color: "#FFFFFF" }} />,
      href: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FFFFFF" }} />,
      href: "/",
    },
  ];

  return (
    <div className="socialsContainer">
      <div className="social">
        {medias.map((media, i) => {
          return (
            <NavLink key={i} to={media.href}>
              {media.icon}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="copyright">
      <p>© Copyright 2024 One comm'. Tous droits réservés.</p>
    </div>
  );
}
