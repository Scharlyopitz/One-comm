import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Buttons from "../Buttons/Buttons";

export default function GDSection1() {
  return (
    <section className="GDsection1">
      <h1>
        Explorez de nouveaux supports <br /> de communication.
      </h1>
      <TexteSection />
      <Buttons firstBtn="Contactez-nous" secondBtn="Une demande ?" />
    </section>
  );
}

function TexteSection() {
  const txts = [
    "Vectorisation de votre logo",
    "Création de votre identité visuelle",
    "Création de support Print et Digital",
  ];

  return (
    <div className="texteSection">
      <div className="textsContainer">
        {txts.map((txt, i) => {
          return (
            <span key={i}>
              <FontAwesomeIcon icon={faCheck} style={{ color: "#9BB0C1" }} />
              {txt}
            </span>
          );
        })}
      </div>
      <p>
        BLABLABLA graphisme / support de comm’ Explorer de nouveaux canaux de
        communication à l’aide de nos différents services. De la conception
        graphique à la personnalisation de vos objets publicitaires, nous
        accompagnons et vous conseillons dans vos projets.
      </p>
    </div>
  );
}
