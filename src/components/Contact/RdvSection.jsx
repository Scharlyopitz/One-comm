export default function RdvSection({ adress, commune, mail, tel }) {
  return (
    <section className="rdvSection">
      <h1>
        Programmons un rendez-vous <br /> dans nos locaux !
      </h1>
      <div className="partsContainer">
        <LeftPart adress={adress} commune={commune} mail={mail} tel={tel} />
        <RightPart />
      </div>
    </section>
  );
}

function LeftPart({ adress, commune, mail, tel }) {
  return (
    <div className="leftPart">
      <p>
        {adress},{commune}
      </p>
      <p>{mail}</p>
      <p>{tel}</p>
    </div>
  );
}

function RightPart() {
  return <div className="rigthPart">map</div>;
}
