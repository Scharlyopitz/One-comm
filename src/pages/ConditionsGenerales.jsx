import { NavLink } from "react-router-dom";
import MiniSectionTxt from "../components/MiniSectionTxt/MiniSectionTxt";
import TexteContainer from "../components/TexteContainer/TexteContainer";
import TitlePage from "../components/TitlePage/TitlePage";

export default function ConditionsGenerales() {
  return (
    <main>
      <TitlePage title="Conditions Générales" />
      <MiniSectionTxt title="Nos conditions générales de vente." />
      <TexteContainer>
        <Texte />
      </TexteContainer>
    </main>
  );
}

function Texte() {
  return (
    <section className="txtConditionGenerales">
      <div>
        <h2>CONDITIONS GENERALES DE VENTE</h2>
        <p>En vigueur au 04/07/2024</p>
      </div>
      <div>
        <h3>ARTICLE 1 - CHAMP D'APPLICATION</h3>
        <p>
          Les présentes Conditions Générales de Vente (dites « CGV »)
          s'appliquent, sans restriction ni réserve à l'ensemble des ventes
          conclues par le Vendeur auprès d'acheteurs non professionnels («
          LesClients ou le Client »), désirant acquérir les produits proposés à
          la vente (« Les Produits »)par le Vendeur sur le sitewww.one-comm.com.
          LesProduits proposés à la vente sur le site sont les suivants : Objets
          publicitaire, textile, signalétique Les caractéristiques principales
          desProduits et notamment les spécifications, illustrations et
          indications de dimensions ou de capacité des Produits, sont présentées
          sur le site www.one-comm.com ce dont le client est tenu de prendre
          connaissance avant de commander. <br />
          Le choix et l'achat d'un Produit sont de la seule responsabilité du
          Client. <br />
          Les offres de Produits s'entendent dans la limite des stocks
          disponibles, tels que précisés lors de la passation de la commande.
        </p>
        <p>
          Ces CGV sont accessibles à tout moment sur le site www.one-comm.com et
          prévaudront sur toute autre document. <br />
          LeClient déclare avoir pris connaissance des présentes CGV et les
          avoir acceptées en cochant la case prévue à cet effet avant la mise en
          œuvre de la procédure de commande en ligne du site www.one­ comm.com.
          <br />
          Sauf preuve contraire, les données enregistrées dans le système
          informatique du Vendeur constituent la preuve de l'ensemble des
          transactions conclues avec le Client.
        </p>
        <p>
          Les coordonnées du Vendeur sont les suivantes : <br />
          One comm', SAS <br />
          Capital social de 10000 euros <br />
          Immatriculé au RCS de Boulogne Billancourt, sous le numéro 077077077 7
          rue de la création, 92100 Boulogne-Billancourt <br />
          Email : contact@one-comm.com
        </p>
        <p>Téléphone: 0674527200</p>
      </div>
      <div>
        <h3>ARTICLE 2 - PRIX</h3>
        <p>
          Les Produits sont fournis aux tarifs en vigueur figurant sur le
          sitewww.one-comm.com, lors de l'enregistrement de la commande par le
          Vendeur. <br />
          Les prix sont exprimés en Euros, HT et TTC. <br />
          Les tarifs tiennent compte d'éventuelles réductions qui seraient
          consenties par le Vendeur sur le site www.one-comm.com. <br />
          Ces tarifs sont fermes et non révisables pendant leur période de
          validité mais le Vendeur se réserve le droit, hors période de
          validité, d'en modifier les prix à tout moment.
        </p>
        <p>
          Les prix ne comprennent pas les frais de traitement, d'expédition, de
          transport et de livraison, qui sont facturés en supplément, dans les
          conditions indiquées sur le site et calculés préalablement à la
          passation de la commande. <br />
          Le paiement demandé au Client correspond au montant total de l'achat,
          y compris ces frais. <br />
          Une facture est établie par leVendeur et remise auClient lors de la
          livraison desProduits commandés.
        </p>
        <p>
          Certaines commandes peuvent faire l'objet d'un devis préalablement
          accepté. Les devis établis parle Vendeur sont valables pour une durée
          de 48h après leur établissement.
        </p>
      </div>
      <div>
        <h3>ARTICLE 3 - COMMANDES</h3>
        <p>
            Il appartient au Client de sélectionner sur le site www.one-comm.com
          les Produits qu'il désire commander, selon les modalités suivantes :{" "}
          <br />
          Le client fait une sélection de produit via notre site. Nous
          conseillons et accompagnons le client dans son projet. Les produits
          sont ensuite modifiés/sélectionnés. Choix de la quantité et du type
          d'impression.Envoie d'unBAT au client. Validation du BAT par le client
          ou ajustement si besoin.Commande en cours....
        </p>
        <p>
          Les offres de Produits sont valables tant qu'elles sont visibles sur
          le site, dans la limite des stocks disponibles. <br />
          La vente ne sera considérée comme valide qu'après paiement intégral du
          prix.Il appartient au Client de vérifier l'exactitude de la commande
          et de signaler immédiatement toute erreur. <br />
          Toute commande passée sur le site www.one-comm.com constitue la
          formation d'un contrat conclu à distance entre le Client et le
          Vendeur. <br />
          LeVendeur se réserve le droit d'annuler ou de refuser toute commande
          d'un Client avec lequel il existerait un litige relatif au paiement
          d'une commande antérieure. <br />
          Le Client pourra suivre l'évolution de sa commande sur le site.
        </p>
      </div>
      <div>
        <h3>ARTICLE 4 - CONDITIONS DE PAIEMENT</h3>
        <p>
          Le prix est payé par voie de paiement sécurisé, selon les modalités
          suivantes : <br />
          •    paiement par carte bancaire <br />
          •    ou paiement parchèque <br />
          •   ou paiement par virement bancaire sur le compte bancaire du
          Vendeur (dont les coordonnées sont communiquées au Client lors de la
          passation de la commande)
        </p>
        <p>
          Pour le paiement par carte bancaire, le débit de la carte n'est
          effectué qu'au moment de l'expédition de la commande.
        </p>
        <p>
          Les données de paiement sont échangées en mode crypté grâce au
          protocole défini par le prestataire de paiement agréé intervenant pour
          les transactions bancaires réalisée sur le site{" "}
          <NavLink to="/">www.one-comm.com</NavLink> .
        </p>
        <p>
          En cas de paiement par chèque bancaire, celui-ci doit être émis par
          une banque domiciliée en France métropolitaine ou à Monaco. <br />
          La mise à l'encaissement du chèque est réalisée à réception.
        </p>
        <p>
          Les paiements effectués par le Client ne seront considérés comme
          définitifs qu'après encaissement effectif par le Vendeur des sommes
          dues. <br />
          LeVendeur ne sera pas tenu de procéder à la délivrance desProduits
          commandés par le Client si celui-ci ne lui en paye pas le prix en
          totalité dans les conditions ci-dessus indiquées.
        </p>
      </div>
      <div>
        <h3>ARTICLE 5 - LIVRAISONS</h3>
        <p>
          Les Produits commandés par le Client seront livrés en France
          métropolitaine.
        </p>
        <p>
          Les livraisons interviennent dans un délai de Dépend de nos usines (en
          France ou à l'étranger) à l'adresse indiquée par le Client lors de sa
          commande sur le site. <br />
          La livraison est constituée par le transfert au Client de la
          possession physique ou du contrôle du Produit. Sauf cas particulier ou
          indisponibilité d'un ou plusieurs Produits, lesProduits commandés
          seront livrés en une seule fois. <br />
          Le Vendeur s'engage à faire ses meilleurs efforts pour livrer les
          produits commandés parle Client dans les délais ci-dessus précisés.
        </p>
        <p>
          Si les Produits commandés n'ont pas été livrés dans un délai de 30
          jours après la date indicative de livraison, pour toute autre cause
          que la force majeure ou le fait duClient, la vente pourra être résolue
          à la demande écrite du Client dans les conditions prévues aux articles
          L 216-2, L 216-3 et L241-4 du Code de la consommation. Les sommes
          versées parle Client lui seront alors restituées au plus tard dans les
          quatorze jours qui suivent la date de dénonciation du contrat, à
          l'exclusion de toute indemnisation ou retenue.
        </p>
        <p>
          En cas de demande particulière du Client concernant les conditions
          d'emballage ou de transport des produits commandés, dûment acceptées
          par écrit par le Vendeur, les coûts y liés feront l'objet d'une
          facturation spécifique complémentaire, sur devis préalablement accepté
          par écrit par le Client. <br />
          Le Client est tenu de vérifier l'état des produits livrés. Il dispose
          d'undélai de 14 jours à compter de la livraison pour formuler des
          réclamations parMail, accompagnées de tous les justificatifs y
          afférents (photos notamment). Passé ce délai età défaut d'avoir
          respecté ces formalités, les Produits seront réputés conformes et
          exempts de tout vice apparent et aucune réclamation ne pourra être
          valablement acceptée par le Vendeur. <br />
          Le Vendeur remboursera ou remplacera dans les plus brefs délais et à
          ses frais, les Produits livrés dont les défauts de conformité ou les
          vices apparents ou cachés auront été dûment prouvés par le Client,
          dans les conditions prévues aux articles L 217-4 et suivants du Code
          de la consommation et celles prévues aux présentes CGV.
        </p>
        <p>
          Le transfert des risques de perte et de détérioration s'y rapportant,
          ne sera réalisé qu'au moment où le Client prendra physiquement
          possession desProduits. Les Produits voyagent donc aux risques et
          périls du Vendeur sauf lorsque le Client aura lui-même choisi le
          transporteur. A ce titre, les risques sont transférés au moment de la
          remise du bien au transporteur.
        </p>
      </div>
      <div>
        <h3>ARTICLE 6 - TRANSFERT DE PROPRIÉTÉ</h3>
        <p>
          Le transfert de propriété des Produits du Vendeur au Client sera
          réalisé dès acceptation de la commande par le Vendeur, matérialisant
          l'accord des parties sur la chose et sur le prix et ce quelle que soit
          la date du paiement et de la livraison.
        </p>
      </div>
      <div>
        <h3>ARTICLE 7 - DROIT DE RÉTRACTATION</h3>
        <p>
          Selon les modalités de l'article L221-18 du Code de la Consommation«
          Pour les contrats prévoyant la livraison régulière de biens pendant
          une période définie, le délai court à compter de la réception du
          premier bien. »
        </p>
        <p>
          Le droit de rétractation peut être exercé en ligne, à l'aide du
          formulaire de rétractation ci-joint et également disponible sur le
          site ou de toute autre déclaration, dénuée d'ambiguïté, exprimant la
          volonté de se rétracter et notamment par courrier postal adressé au
          Vendeur aux coordonnées postales ou mail indiquées à l'ARTICLE 1 des
          CGV. <br />
          Les retours sont à effectuer dans leur état d'origine et complets
          (emballage, accessoires, notice...) permettant leur
          recommercialisation à l'état neuf, accompagnés de la facture d'achat.{" "}
          <br />
          LesProduits endommagés, salis ou incomplets ne sont pas repris. Les
          frais de retour restant à la charge du Client. <br />
          L'échange (sous réserve de disponibilité) ou le remboursement sera
          effectué dans un délai de 14 jours à compter de la réception, par
          leVendeur, des Produits retournés par le Client dans les conditions
          prévues au présent article.
        </p>
      </div>
      <div>
        <h3>ARTICLE 8 - RESPONSABILITÉ DU VENDEUR - GARANTIES</h3>
        <p>
          Les Produits fournis par le Vendeur bénéficient : <br />
          •     de la garantie légale de conformité, pour lesProduits
          défectueux, abîmés ou endommagés ou ne correspondant pas à la
          commande, <br />
          •     de la garantie légale contre les vices cachés provenant d'un
          défaut de matière, de conception ou de <br />
          fabrication affectant les produits livrés et les rendant impropres à
          l'utilisation,
        </p>
        <p>
          Dispositions relatives aux garanties légales <br />
          Article L217-4 du Code de la consommation <br />
          « Le vendeur est tenu de livrer un bien conforme au contrat et répond
          des défauts de conformité existant lors de la délivrance. Il répond
          également des défauts de conformité résultant de l'emballage, des
          instructions de montage ou de l'installation lorsque celle-ci a été
          mise à sa charge par Je contrat ou a été réalisée sous sa
          responsabilité. » <br />
          Article L217-5 du Code de la consommation <br />
          « Le bien est conforme au contrat : <br />
          1° S'il est propre à l'usage habituellement attendu d'un bien
          semblable et, Je cas échéant : <br />
          - s'il correspond à la description donnée par Je vendeur et possède
          les qualités que celui-ci a présentées à <br />
          l'acheteur sous forme d'échantillon ou de modèle ; <br />
          -  s'il présente les qualités qu'un acheteur peut légitimement
          attendre eu égard aux déclarations publiques faites par Je vendeur,
          par Je producteur ou par son représentant, notamment dans la publicité
          ou l'étiquetage
        </p>
        <p>
          2° Ou s'il présente les caractéristiques définies d'un commun accord
          par les parties ou est propre à tout usage spécial recherché par
          l'acheteur, porté àla connaissance du vendeur et que ce dernier a
          accepté. » <br />
          Article L217-12 du Code de la consommation
        </p>
        <p>
          « L'action résultant du défaut de conformité se prescrit par deux ans
          à compter de la délivrance du bien.» Article 1641 du Code civil.{" "}
          <br />
          « Le vendeur est tenu de la garantie à raison des défauts cachés de la
          chose vendue qui la rendent impropre à l'usage auquel on la destine,
          ou qui diminuent tellement cet usage, que l'acheteur ne l'aurait pas
          acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait
          connus. » <br />
          Article 1648alinéa 1er duCode civil <br />
          « L'action résultant des vices rédhibitoires doit être intentée par
          l'acquéreur dans un délai de deux ans à <br />
          compter de la découverte du vice. » <br />
          Article L217-16 du Code de la consommation. <br />« Lorsque l'acheteur
          demande au vendeur, pendant le cours de la garantie commerciale qui
          lui a été consentie lors de l'acquisition ou de la réparation d'un
          bien meuble, une remise en état couverte par la garantie, toute
          période d'immobilisation d'au moins sept jours vient s'ajouter à la
          durée de la garantie qui restait à courir. Cette période court à
          compter de la demande d'intervention de l'acheteur ou de la mise à
          disposition pour réparation du bien en cause, si cette mise à
          disposition est postérieure à la demande d'intervention. » <br />
          Afin de faire valoir ses droits, le Client devra informer le Vendeur,
          par écrit (mail ou courrier), de la non­ conformité desProduits ou de
          l'existence des vices cachés à compter de leur découverte. <br />
          Le Vendeur remboursera, remplacera ou fera réparer les Produits ou
          pièces sous garantie jugés non conformes ou défectueux. <br />
          Les frais d'envoi seront remboursés sur la base du tarif facturé et
          les frais de retour seront remboursés sur présentation des
          justificatifs. <br />
          Les remboursements, remplacements ou réparations desProduits jugés non
          conformes ou défectueux seront effectués dans les meilleurs délais et
          au plus tard dans les 14jours jours suivant la constatation parle
          Vendeur du défaut de conformité ou du vice caché. Ce remboursement
          pourra être fait par virement ou chèque bancaire. <br />
          La responsabilité du Vendeur ne saurait être engagée dans les cas
          suivants: <br />
          •     non respect de la législation du pays dans lequel les produits
          sont livrés, qu'il appartient au Client de vérifier, <br />
          •     en cas de mauvaise utilisation, d'utilisation à des fins
          professionnelles, négligence ou défaut <br />
          d'entretien de la part du Client, comme en cas d'usure normale du
          Produit, d'accident ou de force majeure. <br />
          •     Les photographies et graphismes présentés sur le site ne sont
          pas contractuels et ne sauraient engager la responsabilité du Vendeur.{" "}
          <br />
          La garantie du Vendeur est, en tout état de cause, limitée au
          remplacement ou au remboursement des Produits non conformes ou
          affectés d'un vice.
        </p>
      </div>
      <div>
        <h3>ARTICLE 9 - DONNÉES PERSONNELLES</h3>
        <p>
          LeClient est informé que la collecte de ses données à caractère
          personnel est nécessaire à la vente des Produits parle Vendeur ainsi
          qu'à leur transmission à des tiers à des fins de livraison des
          Produits.
        </p>
        <p>
          Ces données à caractère personnel sont récoltées uniquement pour
          l'exécution du contrat de vente.
        </p>
        <p>
          9.1 Collecte des données à caractère personnel <br />
          Les données à caractère personnel qui sont collectées sur le site{" "}
          <NavLink to="/">www.one-comm.com</NavLink> sont les suivantes :
        </p>
        <p>
          Commande de Produits : <br />
          Lors de la commande deProduits parle Client : <br />
          Noms, prénoms, adresse postale, numéro de téléphone et adresse e-mail.
        </p>
        <p>
          Paiement <br />
          Dans le cadre du paiement des Produits proposés sur le site{" "}
          <NavLink to="/">www.one-comm.com</NavLink>, celui-ci enregistre des
          données financières relatives au compte bancaire ou à la carte de
          crédit du Client /utilisateur.
        </p>
        <p>
          9.2 Destinataires des données à caractère personnel <br />
          Les données à caractère personnel sont utilisées par le Vendeur et ses
          co-contractants pour l'exécution du contrat et pour assurer
          l'efficacité de la prestation de vente et de délivrance des Produits.{" "}
          <br />
          La ou les catégorie(s) de co-contractant(s) est (sont): <br />
          •     Les prestataires de transport <br />
          •     Les prestataires établissements de paiement{" "}
        </p>
        <p>
          9.3 Responsable de traitement <br />
          Le responsable de traitement des données est leVendeur, au sens de la
          loi Informatique et libertés et à compter du 25mai 2018 du Règlement
          2016/679 sur la protection des données à caractère personnel.
        </p>
        <p>
          9.4 limitation du traitement <br />
          Sauf si leClient exprime son accord exprès, ses données à caractère
          personnelles ne sont pas utilisées à des fins publicitaires ou
          marketing.
        </p>
        <p>
          9.5 Durée de conservation des données <br />
          LeVendeur conservera les données ainsi recueillies pendant un délai de
          5 ans, couvrantle temps dela prescription dela responsabilité civile
          contractuelle applicable.
        </p>
        <p>
          9.6 Sécurité et confidentialité <br />
          LeVendeur met enœuvre des mesures organisationnelles, techniques,
          logicielles et physiques en matière de sécurité du numérique pour
          protéger les données personnelles contre les altérations, destructions
          et accès non autorisés. Toutefois il est à signaler qu'Internet n'est
          pas un environnement complètement sécurisé et le Vendeur ne peut
          garantir la sécurité de la transmission ou du stockage des
          informations sur Internet.
        </p>
        <p>
          9.7 Mise en œuvre des droits des Clients et utilisateurs <br />
          En application de la règlementation applicable aux données à caractère
          personnel, lesClients et utilisateurs du site www.one-comm.com
          disposent des droits suivants : <br />
          •     Ils peuvent mettre à jour ou supprimer les données qui les
          concernent de la manière suivante :
        </p>
        <p>
          Envoie de mail en demandant explicitement la suppression de ses
          données personnelles.. <br />
          •     Ils peuvent supprimer leur compte en écrivant à l'adresse
          électronique indiqué à l'article 9.3 <br />
          « Responsable de traitement » <br />
          •     Ils peuvent exercer leur droit d'accès pour connaître les
          données personnelles les concernant en écrivant à l'adresse indiqué à
          l'article 9.3 « Responsable de traitement » <br />
          •     Si les données à caractère personnel détenues par le Vendeur
          sont inexactes, ils peuvent demander la mise à jour des informations
          des informations en écrivant à l'adresse indiqué à l'article 9.3{" "}
          <br />
          « Responsable de traitement » <br />
          •     Ils peuvent demander la suppression de leurs données à caractère
          personnel, conformément aux lois applicables en matière de protection
          des données en écrivant à l'adresse indiqué à l'article 9.3 <br />
          « Responsable de traitement » <br />
          •     Ils peuvent également solliciter la portabilité des données
          détenues par leVendeur vers un autre prestataire <br />
          •     Enfin, ils peuvent s'opposer au traitement de leurs données par
          leVendeur <br />
          Ces droits, dès lorsqu'ils ne s'opposent pas à la finalité du
          traitement, peuvent être exercé en adressant une demande par courrier
          ou par E-mail auResponsable de traitement dont les coordonnées sont
          indiquées ci­ dessus. <br />
          Le responsable de traitement doit apporter une réponse dans un délai
          maximum d'un mois. En cas de refus de faire droit à la demande du
          Client, celui-ci doit être motivé. <br />
          LeClient est informé qu'en cas de refus, il peut introduire une
          réclamation auprès de laCNIL (3 place de Fontenoy, 75007 PARIS) ou
          saisir une autorité judiciaire. <br />
          Le Client peut être invité à cocher une case au titre de laquelle il
          accepte de recevoir des mails à caractère informatifs et publicitaires
          de la part du Vendeur. Il aura toujours la possibilité de retirer son
          accord à tout moment en contactant le Vendeur (coordonnées ci-dessus)
          ou en suivant le lien de désabonnement. <br />
        </p>
      </div>
      <div>
        <h3>ARTICLE 10 - PROPRIÉTÉ INTELLECTUELLE</h3>
        <p>
          Le contenu du site <NavLink to="/">www.one-comm.com</NavLink> est la
          propriété du Vendeur et de ses partenaires et est protégé par les lois
          françaises et internationales relatives à la propriété intellectuelle.{" "}
          <br />
          Toute reproduction totale ou partielle de ce contenu est strictement
          interdite et est susceptible de constituer un délit de contrefaçon.
        </p>
      </div>
      <div>
        <h3>ARTICLE 11 - DROIT APPLICABLE - LANGUE</h3>
        <p>
          Les présentes CGV et les opérations qui en découlent sont régies et
          soumises au droit français. <br />
          Les présentes CGV sont rédigées en langue française.Dans le cas où
          elles seraient traduites en une ou plusieurs langues étrangères, seul
          le texte français ferait foi en cas de litige.
        </p>
      </div>
      <div>
        <h3>ARTICLE 12 - LITIGES</h3>
        <p>
          Pour toute réclamation merci de contacter le service clientèle à
          l'adresse postale ou mail du Vendeur indiquée à l'ARTICLE 1 des
          présentes CGV. <br />
          Le Client est informé qu'il peut en tout état de cause recourir à une
          médiation conventionnelle, au près des instances de médiation
          sectorielles existante sou à tout mode alternatif de règlement des
          différends (conciliation, par exemple) en cas de contestation. <br />
          En l'espèce, le médiateur désigné est
        </p>
        <p>
          E-mail: <br />
          Le Client est également informé qu'il peut, également recourir à la
          plateforme de Règlement en Ligne des Litige (RLL) :{" "}
          <NavLink to="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show">
            https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show
          </NavLink>{" "}
          <br />
          Tous les litiges auxquels les opérations d'achat et de vente conclues
          en application des présentes CGV et qui n'auraient pas fait l'objet
          d'un règlement amiable entre le vendeur ou par médiation, seront
          soumis aux tribunaux compétents dans les conditions de droit commun.
        </p>
      </div>
      <div>
        <h3>ANNEXE :</h3>
        <p>Formulaire de rétractation</p>
      </div>
      <div>
        <p>Date</p>
        <p>
          Le présent formulaire doit être complété et renvoyé uniquement si le
          Client souhaite se rétracter de la commande passée sur
          www.one-comm.com sauf exclusions ou limites à l'exercice du droit de
          rétractation suivant lesConditions Générales de Vente applicables.{" "}
          <br />
          A l'attention de SAS, One comm' <br />
          7 rue de la création, 92100 Boulogne-Billancourt <br />
          Je notifie par la présente la rétractation du contrat portant sur le
          bien ci-dessous : <br />
          -    Commande du (indiquer la date) <br />
          -   Numéro de la commande :
          ........................................................... <br />
          -   Nom du Client :
          ...........................................................................
          <br />
          -    Adresse du Client :
          .......................................................................
        </p>
      </div>
      <p>
        Signature du Client (uniquement en cas de notification du présent
        formulaire sur papier)
      </p>
    </section>
  );
}
