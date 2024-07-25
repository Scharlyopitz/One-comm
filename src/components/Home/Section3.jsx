import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Section3() {
  return (
    <section className="section3">
      <Texte />
      <div className="cardsSection">
        <SectionCard
          category="Graphisme"
          title="Votre service de conception graphique."
          options={[
            "Vectorisation de votre logo.",
            "Création de votre identité visuelle.",
            "Création de support Print et Digital.",
          ]}
        />
        <SectionCard
          category="Objets promotionnels"
          title="Vos objets publicitaires personnalisés."
          options={[
            "Une sélection de produits originaux et innovants.",
            "Une catégorie Express 24h/48h pour les urgences.",
            "Des catégories RSE et made in France.",
          ]}
        />
      </div>
    </section>
  );
}

function Texte() {
  return (
    <>
      <h1>
        Explorez vos différents canaux de <br />
        communication.
      </h1>
      <p className="description">
        Explorer de nouveaux canaux de communication à l’aide de nos différents
        services. De la conception graphique à la personnalisation de vos objets
        publicitaires, nous accompagnons et vous conseillons dans vos projets.
      </p>
    </>
  );
}

function SectionCard({ category, title, options }) {
  return (
    <div className="sectionCardContainer">
      <Card />
      <div className="informationsContainer">
        <p>{category}</p>
        <h2>{title}</h2>
        <ul>
          {options.map((option, i) => {
            return (
              <li key={i}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#9BB0C1" }} />
                {option}
              </li>
            );
          })}
        </ul>
        <button>En savoir plus</button>
      </div>
    </div>
  );
}

function Card() {
  return <div className="card"></div>;
}
