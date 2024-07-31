import Liste from "../components/Liste/Liste";
import MiniSectionTxt from "../components/MiniSectionTxt/MiniSectionTxt";

export default function Blog() {
  return (
    <main>
      <MiniSectionTxt title="Explorez notre blog." />
      <Liste
        title="Titre de l'article"
        date="8 juillet"
        description="Cet article de blog explore l'importance de la communication digitale et du graphisme dans le monde actuel. Il souligne comment une identité visuelle forte et une présence en ligne cohérente peuvent faire la différence pour une entreprise. L'article est structuré pour offrir des conseils pratiques et des exemples concrets de l'impact du graphisme sur la communication digitale."
      />
    </main>
  );
}
