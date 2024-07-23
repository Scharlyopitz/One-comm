import { useRef, useState, useEffect } from "react";

export default function Section2() {
  return (
    <section className="section2">
      <h1>
        Une communication en toute <br /> simplicité.
      </h1>

      <Svg />

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

function Svg() {
  const ref = useRef(null);

  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const initialPath = `M0 0 Q ${dimension.width / 2} ${dimension.height / 2} ${
    dimension.width
  } 0`;

  useEffect(() => {
    function resize() {
      setDimension({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={ref} className="svg">
      <svg>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#11235a" />
          <stop offset="100%" stopColor="#9bb0c1" />
        </linearGradient>
        <path d={initialPath} fill="url(#grad1)" />
      </svg>
    </div>
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
