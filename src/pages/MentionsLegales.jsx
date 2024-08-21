import MiniSectionTxt from "../components/MiniSectionTxt/MiniSectionTxt";
import TexteContainer from "../components/TexteContainer/TexteContainer";
import TitlePage from "../components/TitlePage/TitlePage";

export default function MentionsLegales() {
  return (
    <main>
      <TitlePage title="Mentions Légales" />
      <MiniSectionTxt title="Nos mentions légales." />
      <TexteContainer>
        <Texte />
      </TexteContainer>
    </main>
  );
}

function Texte() {
  return (
    <div className="texteSecion">
      <div>
        <h2>Mentions légales</h2>
        <p>En vigueur au 04/07/2024</p>
      </div>
      <p>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l""Utilisateur", du site www.one-comm.com , ci-après
        le "Site", les présentes mentions légales.
      </p>
      <p>
        La connexion et la navigation sur le Site par l’Utilisateur implique
        acceptation intégrale et sans réserve des présentes mentions légales.
      </p>
      <p>
        Ces dernières sont accessibles sur le Site à la rubrique « Mentions
        légales ».
      </p>
      <h3>ARTICLE 1 - L'EDITEUR</h3>
      <p>
        L'édition du Site est assurée par One comm' SAS au capital de 10 000
        euros, immatriculée au Registre du Commerce et des Sociétés de 92100
        sous le numéro _______________ dont le siège social est situé au 7 rue
        de la création, 92100 Boulogne-Billancourt, Numéro de téléphone
        0674527200, Adresse e-mail : contact@one-comm.com. N° de TVA
        intracommunautaire : 00 Le Directeur de la publication est Opitz Wilhelm
        ci-après l'"Editeur".
      </p>
      <h3>ARTICLE 2 - L'HEBERGEUR</h3>
      <p>
        L'hébergeur du Site est la société Non renseigné, dont le siège social
        est situé au SAS , avec le numéro de téléphone : 0674527200 + adresse
        mail de contact
      </p>
      <h3>ARTICLE 3 - ACCES AU SITE</h3>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d’une
        nécessité de maintenance.
      </p>
      <h3>ARTICLE 4 - COLLECTE DES DONNEES</h3>
      <p>
        Le Site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés.
      </p>
      <p>
        En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
        l'Utilisateur dispose d'un droit d'accès, de rectification, de
        suppression et d'opposition de ses données personnelles. L'Utilisateur
        exerce ce droit : par mail à l'adresse email contact@one-comm.com
      </p>
      <p>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation de l’Editeur
        est prohibée et pourra entraîner des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle
        et le Code civil.
      </p>
    </div>
  );
}
