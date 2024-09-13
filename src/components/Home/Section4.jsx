import ImageLine1 from "/Charte-graphique.webp";
import ImageLine2 from "/Dossier-inscription-événement-padel.webp";
import ImageLine3 from "/Les-autres-logos.webp";
import ImageLine4 from "/Nos-couleurs.webp";
import ImageLine5 from "/Nos-supports.webp";
import ImageLine6 from "/Tee-shirt-personnalisé.webp";

export default function Section4() {
  return (
    <section className="section4">
      <h1>Nos réalisations</h1>
      <div className="linesContainer">
        <Line
          images={[
            ImageLine1,
            ImageLine2,
            ImageLine3,
            ImageLine4,
            ImageLine5,
            ImageLine6,
          ]}
        />
        <Line
          images={[
            ImageLine6,
            ImageLine5,
            ImageLine4,
            ImageLine3,
            ImageLine2,
            ImageLine1,
          ]}
        />
        <Line
          images={[
            ImageLine1,
            ImageLine2,
            ImageLine3,
            ImageLine4,
            ImageLine5,
            ImageLine6,
          ]}
        />
      </div>
      <Formulaire />
    </section>
  );
}

function Line({ images }) {
  return (
    <div className="lineContainer">
      <div className="imgContainer">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className="img"
              style={{
                backgroundImage: `URL(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          );
        })}
      </div>
      <div className="imgContainer">
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className="img"
              style={{ backgroundImage: `URL(${image})` }}
            />
          );
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
