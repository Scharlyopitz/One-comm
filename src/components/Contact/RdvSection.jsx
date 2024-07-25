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
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QMNGdmr5AqT2LP4ZYRrzx-66t2wHI-BXUbCqhtZtJKxcR3nvOu-6G5yg5gOjsIAcmw8&usqp=CAU"
        alt="image map tag"
      />
    </div>
  );
}

function RightPart() {
  return (
    <div className="rigthPart">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QMNGdmr5AqT2LP4ZYRrzx-66t2wHI-BXUbCqhtZtJKxcR3nvOu-6G5yg5gOjsIAcmw8&usqp=CAU"
        alt="MAP"
      />
    </div>
  );
}
