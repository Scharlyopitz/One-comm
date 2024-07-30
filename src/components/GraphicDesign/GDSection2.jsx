import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function GDSection2() {
  return (
    <section className="GDSection2">
      <Texte
        h1="Vectorisation de votre logo."
        p="C’est quoi ? A quoi ça sert ? Explorer de nouveaux canaux de
        communication à l’aide de nos différents services. De la conception
        graphique à la personnalisation de vos objets publicitaires, nous
        accompagnons et vous conseillons dans vos projets."
      />
      <Logos />
      <Texte
        h1="Création de votre identité visuelle."
        p="Identité visuelle c’est quoi ? a quoi ça sert pour une marque ? ce que ça comprend ? Explorer de nouveaux canaux de communication à l’aide de nos différents services. De la conception graphique à la personnalisation de vos objets publicitaires, nous accompagnons et vous conseillons dans vos projets."
      />
      <Slider />
      <Texte
        h1="Création de supports Print & Digital."
        p="Qu'il s'agisse de brochures, de flyers, de cartes de visite, de kakémono, de mur d’image, de bannières publicitaires, de posts sur les réseaux sociaux ou de sites web, nous concevons des supports de communication qui parlent à votre audience. Nos designs sont non seulement esthétiquement plaisants, mais aussi fonctionnels, garantissant une communication claire et efficace de votre message. Nous nous assurons que chaque création soit adaptée à vos objectifs et à votre audience, tout en respectant les standards les plus élevés du design graphique."
      />
      <div className="img">IMAGE</div>
    </section>
  );
}

function Texte({ h1, p }) {
  return (
    <>
      <h1>{h1}</h1>
      <p>{p}</p>
    </>
  );
}

function Logos() {
  return (
    <div className="logosContainer">
      <Logo />
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "#11235A" }} />
      <Logo />
    </div>
  );
}

function Logo() {
  return <div className="Card">Logo</div>;
}

function Slider() {
  return (
    <div className="sliderContainer">
      {[...Array(5)].map((_, i) => {
        return (
          <div key={i} className="slider">
            IMAGE
          </div>
        );
      })}
    </div>
  );
}
