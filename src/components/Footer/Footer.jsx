import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <LogoSection />
      <Links />
      <ContactSection />
      <SocialSection />
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

function ContactSection() {
  const adress = ["7 rue de la création", "92100 Boulogne-Billancourt"];

  const contacts = ["contact@one-comm.com", "06.74.52.72.00"];

  return (
    <div className="contactContainer">
      <div className="contacts">
        <div className="adress">
          {adress.map((a, i) => {
            return <p key={i}>{a}</p>;
          })}
        </div>
        <div className="contact">
          {contacts.map((c, i) => {
            return <p key={i}>{c}</p>;
          })}
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
