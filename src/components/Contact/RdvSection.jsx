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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.06156516875!2d2.588477676973313!3d49.653139244449804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7c1db5f8c0e9b%3A0xf81275ecc4e47fd2!2sRue%20de%20la%20Cr%C3%A9ation%2C%2080500%20Montdidier!5e0!3m2!1sfr!2sfr!4v1721912598832!5m2!1sfr!2sfr"></iframe>
    </div>
  );
}
