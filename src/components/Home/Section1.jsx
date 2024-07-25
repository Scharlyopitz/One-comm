import Buttons from "../Buttons";

export default function Section1() {
  return (
    <section className="section1">
      <Texte />
      <Buttons firstBtn="Contactez-nous" secondBtn="Un devis ?" />
    </section>
  );
}

function Texte() {
  return (
    <div className="txt">
      <h1>
        La solution pour <br /> votre communication.
      </h1>
      <p>
        Transformez vos idées en réalité visuelle avec des solutions de
        communication personnalisées, rapides et de haute qualité. One comm’
        vous accompagne dans vos projets.
      </p>
    </div>
  );
}
