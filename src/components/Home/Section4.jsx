export default function Section4() {
  return (
    <section className="section4">
      <h1>Nos réalisations</h1>
      <div className="linesContainer">
        <Line />
        <Line />
        <Line />
      </div>
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
