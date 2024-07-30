import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Buttons from "../Buttons/Buttons";

export default function Section1Duplicate({
  titre1,
  titre2,
  txts,
  spitch,
  firstBtn,
  secondBtn,
}) {
  return (
    <section className="Section1Duplicate">
      <h1>
        {titre1}
        <br />
        {titre2}
      </h1>
      <TexteSection txts={txts} spitch={spitch} />
      <Buttons firstBtn={firstBtn} secondBtn={secondBtn} />
    </section>
  );
}

function TexteSection({ txts, spitch }) {
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
      <p>{spitch}</p>
    </div>
  );
}
