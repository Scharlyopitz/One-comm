export default function Section5() {
  return (
    <section className="section5">
      <h1>Ils nous font confiance</h1>
      <Logos />
    </section>
  );
}

function Logos() {
  return (
    <>
      <div className="logosContainer">
        {[...Array(5)].map((_, i) => {
          return (
            <div key={i} className="logo">
              logo
            </div>
          );
        })}
      </div>
    </>
  );
}
