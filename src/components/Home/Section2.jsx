export default function Section2() {
  return (
    <section className="section2">
      <h1>
        Une communication en toute <br /> simplicité.
      </h1>
      <div className="svg"></div>
      <div className="cardContainer">
        <Card
          name="Réactivité"
          paragraphe="Notre équipe s’engage à répondre à votre demande dans les plus bref délais. Nous réalisons vos devis selon vos demande sous 24h."
        />
        <Card
          name="Conseil"
          paragraphe="Notre expertise dans le domaine du graphisme et l’objet publicitaire nous permet de vous conseiller et de vous accompagner dans la réalisation de vos projets."
        />
        <Card
          name="Interlocuteur"
          paragraphe="Un interlocuteur unique et réactif s’occupe de l’ensemble de vos projets de communication."
        />
      </div>
    </section>
  );
}

function Card({ name, image, paragraphe }) {
  return (
    <div className="card">
      <p className="name">{name}</p>
      {/* <img src={image} alt={`image ${name}`} /> */}
      <p className="paragraphe">{paragraphe}</p>
    </div>
  );
}
