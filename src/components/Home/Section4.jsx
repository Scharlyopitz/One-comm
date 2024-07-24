export default function Section4() {
  return (
    <section className="section4">
      <h1>Nos réalisations</h1>
      <div className="linesContainer">
        <Line />
        <Line />
        <Line />
      </div>
      <Formulaire />
    </section>
  );
}

function Line() {
  return (
    <div className="lineContainer">
      <div className="imgContainer">
        {[...Array(8)].map((_, i) => {
          return <div key={i} className="img" />;
        })}
      </div>
      <div className="imgContainer">
        {[...Array(8)].map((_, i) => {
          return <div key={i} className="img" />;
        })}
      </div>
    </div>
  );
}

function Formulaire() {
  return (
    <div className="formulaire">
      <div className="txt">
        <p>Ne ratez aucun bon plan !</p>
        <span>
          Avec notre newsletter restez au courant des bons plans et suivez
          l'évolution de one comm'
        </span>
      </div>
      <form action="">
        <label htmlFor="name">Prénom</label>
        <input autoComplete="off" type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input autoComplete="off" type="email" name="email" id="email" />
        <input type="submit" value="JE M'INSCRIS !" className="btn" />
      </form>
    </div>
  );
}
