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
    <div className="formulaire">
      <div className="txt">
        <span>
          Prêt à concrétiser votre projet de conception graphique ou de goodies
          personnalisés ? Remplissez le formulaire ci-dessous et notre équipe
          vous accompagnera à chaque étape pour donner vie à vos idées.
        </span>
      </div>
      <form action="">
        <div className="fullNameContainer">
          <div>
            <label htmlFor="name">Nom</label>
            <input autoComplete="off" type="text" name="name" id="name" />
          </div>

          <div>
            <label htmlFor="firstName">Prénom</label>
            <input
              autoComplete="off"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
        </div>

        <div className="contactContainer">
          <div>
            <label htmlFor="email">Email</label>
            <input autoComplete="off" type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Téléphone</label>
            <input
              autoComplete="off"
              type="tel"
              name="phone"
              id="phone"
              maxLength="10"
            />
          </div>
        </div>

        <label htmlFor="demande">Votre demande</label>
        <textarea autoComplete="off" name="demande" id="demande"></textarea>

        <input type="submit" value="ENVOYER" className="btn" />
      </form>
    </div>
  );
}
