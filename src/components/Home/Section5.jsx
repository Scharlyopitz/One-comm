import Logo1 from "/black-icon.webp";
import Logo2 from "/dark-blue-icon.webp";
import Logo3 from "/light-blue-icon.webp";
import Logo4 from "/dark-blue-icon.webp";
import Logo5 from "/black-icon.webp";

export default function Section5() {
  return (
    <section className="section5">
      <h1>Ils nous font confiance</h1>
      <Logos />
    </section>
  );
}

function Logos() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

  return (
    <>
      <div className="logosContainer">
        {logos.map((logo, i) => {
          return (
            <div key={i} className="logo">
              <img src={logo} alt={`logo${i + 1}`} />
            </div>
          );
        })}
      </div>
    </>
  );
}
