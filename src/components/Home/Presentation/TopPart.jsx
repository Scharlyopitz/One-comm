import React from "react";

export default function TopPart() {
  return (
    <div className="topPart">
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
    </div>
  );
}

function Buttons() {
  return (
    <div className="btnContainer">
      <button>Contactez-nous</button>
      <button>Un devis ?</button>
    </div>
  );
}
