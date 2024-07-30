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
      <Cards />
      <Texte
        h1="Création de votre identité visuelle."
        p="Identité visuelle c’est quoi ? a quoi ça sert pour une marque ? ce que ça comprend ? Explorer de nouveaux canaux de communication à l’aide de nos différents services. De la conception graphique à la personnalisation de vos objets publicitaires, nous accompagnons et vous conseillons dans vos projets."
      />
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

function Cards() {
  return (
    <div className="cardsContainer">
      <Card />
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "#11235A" }} />
      <Card />
    </div>
  );
}

function Card() {
  return <div className="Card"></div>;
}
