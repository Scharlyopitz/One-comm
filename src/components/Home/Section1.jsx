import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section1() {
  return (
    <section className="section1">
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
      <Buttons />
    </section>
  );
}

function Buttons() {
  return (
    <div className="btnContainer">
      <div className="btn">
        <button>Contactez-nous</button>
        <button>Un devis ?</button>
      </div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}
