import Liste from "../components/Liste/Liste";
import MiniSectionTxt from "../components/MiniSectionTxt/MiniSectionTxt";
import TitlePage from "../components/TitlePage/TitlePage";

export default function Actualites() {
  return (
    <main>
      <TitlePage title="Actualités" />
      <MiniSectionTxt title="Nos dernières actualités." />
      <div className="listesContainer">
        <Liste
          title="Le nouveau site de One comm' : Votre partenaire en graphisme et goodies personnalisés"
          date="24 juillet 2024"
          description="One comm' lance son nouveau site internet, mettant en avant ses principales missions : graphisme (vectorisation de logo, création d'identité visuelle, création de supports print et digital) et personnalisation de goodies (produits originaux, catégorie express pour les urgences, catégories RSE et made in France). Le site promet une navigation fluide et une présentation claire des services offerts."
        />
        <Liste
          title="Titre de l'article"
          date="8 juillet"
          description="Cet article de blog explore l'importance de la communication digitale et du graphisme dans le monde actuel. Il souligne comment une identité visuelle forte et une présence en ligne cohérente peuvent faire la différence pour une entreprise. L'article est structuré pour offrir des conseils pratiques et des exemples concrets de l'impact du graphisme sur la communication digitale."
        />
        <Liste
          title="Titre de l'article"
          date="8 juillet"
          description="Cet article de blog explore l'importance de la communication digitale et du graphisme dans le monde actuel. Il souligne comment une identité visuelle forte et une présence en ligne cohérente peuvent faire la différence pour une entreprise. L'article est structuré pour offrir des conseils pratiques et des exemples concrets de l'impact du graphisme sur la communication digitale."
        />
        <Liste
          title="Titre de l'article"
          date="8 juillet"
          description="Cet article de blog explore l'importance de la communication digitale et du graphisme dans le monde actuel. Il souligne comment une identité visuelle forte et une présence en ligne cohérente peuvent faire la différence pour une entreprise. L'article est structuré pour offrir des conseils pratiques et des exemples concrets de l'impact du graphisme sur la communication digitale."
        />
      </div>
    </main>
  );
}
