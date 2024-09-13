import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import LogoGraphisme1 from "/black-icon.webp";
import LogoGraphisme2 from "/dark-blue-icon.webp";
import LogoGraphisme3 from "/light-blue-icon.webp";
import LogoGraphisme4 from "/white-icon.webp";
import LogoOneComm from "/one-comm-logo.webp";
import ImageObjPromo1 from "/bottle-one-comm.webp";
import ImageObjPromo2 from "/carnet-one-comm.webp";
import ImageObjPromo3 from "/carte-de-visite-one-comm.webp";
import ImageObjPromo4 from "/mug-one-comm.webp";

export default function Section3() {
  return (
    <section className="section3">
      <Texte />
      <div className="cardsSection">
        <SectionCard
          images={[
            LogoGraphisme1,
            LogoGraphisme2,
            LogoGraphisme3,
            LogoGraphisme4,
          ]}
          sideImage={LogoOneComm}
          category="Graphisme"
          title="Votre service de conception graphique."
          options={[
            "Vectorisation de votre logo.",
            "Création de votre identité visuelle.",
            "Création de support Print et Digital.",
          ]}
        />
        <SectionCard
          images={[ImageObjPromo1, ImageObjPromo2, ImageObjPromo3]}
          sideImage={ImageObjPromo4}
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

function SectionCard({
  category,
  title,
  options,
  images,
  sideImage = { sideImage },
}) {
  return (
    <div className="sectionCardContainer">
      <Card images={images} sideImage={sideImage} />
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

function Card({ images, sideImage }) {
  return (
    <div className="card">
      <div className="left">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <img src={image} alt={`image ${i + 1}`} />
            </div>
          );
        })}
      </div>
      <div className="right">
        <div>
          <img src={sideImage} alt="side image" />
        </div>
      </div>
    </div>
  );
}
