export default function ContactezNous() {
  return (
    <section className="contactezNous">
      <h1>Contactez-nous !</h1>
      <Formulaire />
    </section>
  );
}

function Formulaire() {
  return (
    <div className="form">
      <p>
        Prêt à concrétiser votre projet de conception graphique ou de goodies
        personnalisés ? Remplissez le formulaire ci-dessous et notre équipe vous
        accompagnera à chaque étape pour donner vie à vos idées.
      </p>
    </div>
  );
}
