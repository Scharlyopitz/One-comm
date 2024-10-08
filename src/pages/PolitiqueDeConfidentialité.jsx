import MiniSectionTxt from "../components/MiniSectionTxt/MiniSectionTxt";
import TexteContainer from "../components/TexteContainer/TexteContainer";
import TitlePage from "../components/TitlePage/TitlePage";

export default function PolitiqueDeConfidentialité() {
  return (
    <main>
      <TitlePage title="Politique De Confidentialité" />
      <MiniSectionTxt title="Notre politique de confidentialité." />
      <TexteContainer>
        <Texte />
      </TexteContainer>
    </main>
  );
}

function Texte() {
  return (
    <div className="txtPolitique">
      <h2>POLITIQUE DE CONFIDENTIALITÉ</h2>
      <div>
        <p>www.one-comm.com</p>
        <p>One comm' SAS</p>
      </div>
      <p className="underline">
        Type de site : Vente de services et d'objets publicitaires
      </p>
      <p>Le but de cette politique de confidentialité</p>
      <p>
        Le but de cette politique de confidentialité est d'informer les
        utilisateurs de notre site des données personnelles que nous
        recueillerons ainsi que les informations suivantes, le cas échéant :
      </p>
      <div>
        <p>a. Les données personnelles que nous recueillerons</p>
        <p>b. L'utilisation des données recueillies</p>
        <p>c. Qui a accès aux données recueillies</p>
        <p>d. Les droits des utilisateurs du site</p>
        <p>e. La politique de cookies du site</p>
      </div>
      <p>
        Cette politique de confidentialité fonctionne parallèlement aux
        conditions générales d'utilisation de notre site.
      </p>
      <div>
        <p>Lois applicables :</p>
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), cette politique de confidentialité est conforme aux règlements
          suivants.
        </p>
      </div>
      <p className="italic">Les données à caractère personnel doivent être :</p>
      <p>
        a. Traitées de manière licite, loyale et transparente au regard de la
        personne concernée (licéité, loyauté, transparence) ;
      </p>
      <p>
        b. Collectées pour des finalités déterminées, explicites et légitimes,
        et ne pas être traitées ultérieurement d'une manière incompatible avec
        ces finalités; le traitement ultérieur à des fins archivistiques dans
        l'intérêt public, à des fins de recherche scientifique ou historique ou
        à des fins statistiques n'est pas considéré, conformément à l'article
        89, paragraphe 1, comme incompatible avec les finalités initiales
        (limitation des finalités) ;
      </p>
      <p>
        c. Adéquates, pertinentes et limitées à ce qui est nécessaire au regard
        des finalités pour lesquelles elles sont traitées (minimisation des
        données) ;
      </p>
      <p>
        d. Exactes et, si nécessaire, tenues à jour; toutes les mesures
        raisonnables doivent être prises pour que les données à caractère
        personnel qui sont inexactes, eu égard aux finalités pour lesquelles
        elles sont traitées, soient effacées ou rectifiées sans tarder
        (exactitude) ;
      </p>
      <p>
        e. Conservées sous une forme permettant l'identification des personnes
        concernées pendant une durée n'excédant pas celle nécessaire au regard
        des finalités pour lesquelles elles sont traitées; les données à
        caractère personnel peuvent être conservées pour des durées plus longues
        dans la mesure où elles seront traitées exclusivement à des fins
        archivistiques dans l'intérêt public, à des fins de recherche
        scientifique ou historique ou à des fins statistiques conformément à
        l'article 89, paragraphe 1, pour autant que soient mises en œuvre les
        mesures techniques et organisationnelles appropriées requises par le
        règlement afin de garantir les droits et libertés de la personne
        concernée (limitation de la conservation) ;
      </p>
      <p>
        f. Traitées de façon à garantir une sécurité appropriée des données à
        caractère personnel, y compris la protection contre le traitement non
        autorisé ou illicite et contre la perte, la destruction ou les dégâts
        d'origine accidentelle, à l'aide de mesures techniques ou
        organisationnelles appropriées (intégrité et confidentialité).
      </p>
      <p className="underline italic">
        Le traitement n'est licite que si, et dans la mesure où, au moins une
        des conditions suivantes est remplie :
      </p>
      <p>
        a. la personne concernée a consenti au traitement de ses données à
        caractère personnel pour une ou plusieurs finalités spécifiques;
      </p>
      <p>
        b. le traitement est nécessaire à l'exécution d'un contrat auquel la
        personne concernée est partie ou à l'exécution de mesures
        précontractuelles prises à la demande de celle-ci ;
      </p>
      <p>
        c. le traitement est nécessaire au respect d'une obligation légale à
        laquelle le responsable du traitement est soumis ;
      </p>
      <p>
        d. le traitement est nécessaire à la sauvegarde des intérêts vitaux de
        la personne concernée ou d'une autre personne physique ;
      </p>
      <p>
        e. le traitement est nécessaire à l'exécution d'une mission d'intérêt
        public ou relevant de l'exercice de l'autorité publique dont est investi
        le responsable du traitement ;
      </p>
      <p>
        f. le traitement est nécessaire aux fins des intérêts légitimes
        poursuivis par le responsable du traitement ou par un tiers, à moins que
        ne prévalent les intérêts ou les libertés et droits fondamentaux de la
        personne concernée qui exigent une protection des données à caractère
        personnel, notamment lorsque la personne concernée est un enfant.
      </p>
      <p>
        Pour les résidents de l'État de Californie, cette politique de
        confidentialité vise à se conformer à la California Consumer Privacy Act
        (CCPA). S'il y a des incohérences entre ce document et la CCPA, la
        législation de l'État s'appliquera. Si nous constatons des incohérences,
        nous modifierons notre politique pour nous conformer à la loi
        pertinente.
      </p>
      <div>
        <h3 className="underline">Consentement :</h3>
        <p>
          Les utilisateurs conviennent qu'en utilisant notre site, ils
          consentent à :
        </p>
      </div>
      <div>
        <p>
          a. les conditions énoncées dans la présente politique de
          confidentialité et
        </p>
        <p>
          b. la collecte, l'utilisation et la conservation des données énumérées
          dans la présente politique.
        </p>
      </div>
      <h3 className="underline">Données personnelles que nous collectons</h3>
      <h3 className="underline">Données collectées automatiquement</h3>
      <div>
        <p>
          Lorsque vous visitez et utilisez notre site, nous pouvons
          automatiquement recueillir et conserver les renseignements suivants :
        </p>
        <p>a. Lieu</p>
        <p>b. Détails matériels et logiciels</p>
        <p>c. Liens un utilisateur clique tout en utilisant le site</p>
        <p>d. Contenu que l'utilisateur consulte sur votre site</p>
      </div>
      <h3 className="underline">
        Données recueillies de façon non automatique
      </h3>
      <p>
        Nous pouvons également collecter les données suivantes lorsque vous
        effectuez certaines fonctions sur notre site :
      </p>
      <div>
        <p>a. Prénom et nom</p>
        <p>b. Email</p>
      </div>
      <p>
        Ces données peuvent être recueillies au moyen des méthodes suivantes :
      </p>
      <p>Inscription à notre newsletter</p>
      <div>
        <p>
          Veuillez noter que nous ne collectons que les données qui nous aident
          à atteindre l'objectif énoncé dans cette politique de confidentialité.
        </p>
        <p>
          Nous ne recueillerons pas de données supplémentaires sans vous en
          informer au préalable.
        </p>
      </div>
      <h3 className="underline">
        Comment nous utilisons les données personnelles
      </h3>
      <div>
        <p>
          Les données personnelles recueillies sur notre site seront utilisées
          uniquement aux fins précisées dans la présente politique ou indiquées
          sur les pages pertinentes de notre site. Nous n'utiliserons pas vos
          données au-delà de ce que nous divulguerons.
        </p>
        <p>
          Les données que nous recueillons automatiquement sont utilisées aux
          fins suivantes :
        </p>
        <p>a.Statistiques</p>
        <p>
          Les données que nous recueillons lorsque l'utilisateur exécute
          certaines fonctions peuvent être utilisées aux fins suivantes :
        </p>
        <p>a.Communication</p>
      </div>
      <p>Avec qui nous partageons les données personnelles</p>
      <div>
        <h3 className="italic">Employés</h3>
        <p>
          Nous pouvons divulguer à tout membre de notre organisation les données
          utilisateur dont il a raisonnablement besoin pour réaliser les
          objectifs énoncés dans la présente politique.
        </p>
      </div>
      <div>
        <h3 className="italic">Tierces parties</h3>
        <p>
          Nous pouvons partager les données utilisateur avec les tiers suivants
          : <br />
          a.Agences de marketing
        </p>
      </div>
      <p>
        Nous pouvons partager les données utilisateur avec des tiers aux fins
        suivantes : <br />
        a.Liens cliqués lors d'utilisation du site
      </p>
      <p>
        Les tiers ne seront pas en mesure d'accéder aux données des utilisateurs
        au-delà de ce qui est raisonnablement nécessaire pour atteindre
        l'objectif donné.
      </p>
      <h3 className="underline">Autres divulgations</h3>
      <p>
        Nous nous engageons à ne pas vendre ou partager vos données avec
        d'autres tiers, sauf dans les cas suivants : <br />
        a.si la loi l'exige <br />
        b.si elle est requise pour toute procédure judiciaire <br />
        c.pour prouver ou protéger nos droits légaux <br />
        d.à des acheteurs ou des acheteurs potentiels de cette société dans le
        cas où nous cherchons à la vendre la société
      </p>
      <p>
        Si vous suivez des hyperliens de notre site vers un autre site, veuillez
        noter que nous ne sommes pas responsables et n'avons pas de contrôle sur
        leurs politiques et pratiques de confidentialité.
      </p>
      <h3 className="underline">
        Combien de temps nous stockons les données personnelles
      </h3>
      <p>
        Nous ne conservons pas les données des utilisateurs au-delà de ce qui
        est nécessaire pour atteindre les fins pour lesquelles elles sont
        recueillies.
      </p>
      <h3 className="underline">
        Comment nous protégeons vos données personnelles
      </h3>

      <p>
        Afin d'assurer la protection de votre sécurité, nous utilisons le
        protocole de sécurité de la couche transport pour transmettre des
        renseignements personnels dans notre système. <br />
        Toutes les données stockées dans notre système sont bien sécurisées et
        ne sont accessibles qu'à nos employés. Nos employés sont liés par des
        accords de confidentialité stricts et une violation de cet accord
        entraînerait le licenciement de l'employé. <br />
        Alors que nous prenons toutes les précautions raisonnables pour nous
        assurer que nos données d'utilisateur sont sécurisées et que les
        utilisateurs sont protégés, il reste toujours du risque de préjudice.
        L'Internet en sa totalité peut être, parfois, peu sûr et donc nous
        sommes incapables de garantir la sécurité des données des utilisateurs
        au-delà de ce qui est raisonnablement pratique.
      </p>
      <h3 className="underline">Mineurs</h3>
      <p>
        Le RGPD précise que les personnes de moins de 15 ans sont considérées
        comme des mineurs aux fins de la collecte de données. Les mineurs
        doivent avoir le consentement d'un représentant légal pour que leurs
        données soient recueillies, traitées et utilisées.
      </p>
      <h3 className="underline">Vos droits en tant qu'utilisateur</h3>
      <p>
        En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
        personnes concernées : <br />
        a.droit d'accès <br />
        b.droit de rectification <br />
        c.droit à l'effacement <br />
        d.droit de restreindre le traitement <br />
        e.droit à la portabilité des données <br />
        f.droit d'objection
      </p>
      <p>
        Vous trouverez de plus amples informations sur ces droits au chapitre 3
        (art 12-23) du RGPD.
      </p>
      <p>Comment modifier, supprimer ou contester les données recueillies</p>
      <p>
        Si vous souhaitez que vos renseignements soient supprimés ou modifiés
        d'une façon ou d'une autre, veuillez communiquer avec notre agent de
        protection de la vie privée ici : <br />
        Wilhelm Opitz <br />
        7 rue de la création, 92100, Boulogne-Billancourt <br />
        opitz.wilhelm@gmail.com <br />
        06 74 52 72 00
      </p>
      <h3 className="underline">Politique sur les cookies</h3>
      <p>
        Un cookie est un petit fichier, stocké sur le disque dur d'un
        utilisateur par le site Web. Son but est de recueillir des données
        relatives aux habitudes de navigation de l'utilisateur.
      </p>
      <p>Nous utilisons les types de cookies suivants sur notre site :</p>
      <div>
        <p className="underline">a. Cookies fonctionnels</p>
        <p>
          Nous les utilisons pour mémoriser toutes les sélections que vous
          faites sur notre site afin qu'elles soient sauvegardées pour vos
          prochaines visites.
        </p>
      </div>
      <div>
        <p className="underline">b. Cookies analytiques</p>
        <p>
          Cela nous permet d'améliorer la conception et la fonctionnalité de
          notre site en recueillant des données sur le contenu auquel vous
          accédez et sur lequel vous vous accrochez en utilisant notre site.
        </p>
      </div>
      <div>
        <p className="underline">c. Cookies de ciblage</p>
        <p>
          Ces cookies collectent des données sur la façon dont vous utilisez le
          site et vos préférences. Cela nous permet de rendre les informations
          que vous voyez sur notre site plus promotionnelles et ciblées pour
          vous.
        </p>
      </div>
      <p>
        Vous pouvez choisir d'être averti chaque fois qu'un cookie est transmis.
        Vous pouvez également choisir de désactiver les cookies entièrement dans
        votre navigateur Internet, mais cela peut diminuer la qualité de votre
        expérience d'utilisation.
      </p>
      <h3 className="underline">Cookies tiers</h3>
      <p>
        Nous pouvons utiliser des cookies tiers sur notre site pour atteindre
        les objectifs suivants : <br />
        1.Surveiller les préférences des utilisateurs pour adapter les
        publicités autour de leurs intérêts.
      </p>
      <h3 className="underline">Modifications</h3>
      <p>
        Cette politique de confidentialité peut être modifiée à l'occasion afin
        de maintenir la conformité avec la loi et de tenir compte de tout
        changement à notre processus de collecte de données. Nous recommandons à
        nos utilisateurs de vérifier notre politique de temps à autre pour
        s'assurer qu'ils soient informés de toute mise à jour. Au besoin, nous
        pouvons informer les utilisateurs par courriel des changements apportés
        à cette politique.
      </p>

      <h3 className="underline">Contact</h3>
      <p>
        Si vous avez des questions à nous poser, n'hésitez pas à communiquer
        avec nous en utilisant ce qui suit :
      </p>
      <p>
        06 74 52 72 00 <br />
        contact@one-comm.com <br />7 rue de la création, 92100
        Boulogne-Billancourt
      </p>
      <p>Date d'entrée en vigueur : le 04 juillet 2024</p>
    </div>
  );
}
