import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ Contacts }) {
  return (
    <footer>
      <div className="mainInfo">
        <LogoSection />
        <Links />
        <ContactSection Contacts={Contacts} />
        <SocialSection />
      </div>
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
    { name: "Accueil", href: "/" },
    { name: "Graphisme", href: "/graphicDesign" },
    { name: "Objets publicitaires", href: "/objetsPublicitaires" },
    { name: "Actualités", href: "/actualites" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "contact" },
  ];

  const agenceLinks = [
    {
      name: "Politique de confidentialité",
      href: "/politiqueDeConfidentialite",
    },
    { name: "Conditions générales de vente", href: "/conditionsGenerales" },
    { name: "Mentions légales", href: "/mentionsLegales" },
  ];

  return (
    <div className="linksContainer">
      <div className="link">
        <h2>Notre offre</h2>
        {offerLinks.map((link, i) => {
          return (
            <NavLink key={i} to={link.href}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
      <div className="link">
        <h2>L'agence</h2>
        {agenceLinks.map((link, i) => {
          return (
            <NavLink key={i} to={link.href}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

function ContactSection({ Contacts }) {
  return (
    <div className="contactContainer">
      <div className="contacts">
        <div className="adress">
          <p>{Contacts.adress}</p>
          <p>{Contacts.commune}</p>
        </div>
        <div className="contact">
          <p>{Contacts.mail}</p>
          <p>{Contacts.tel}</p>
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
