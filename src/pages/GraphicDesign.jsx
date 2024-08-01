import GDSection2 from "../components/GraphicDesign/GDSection2";
import Section1Duplicate from "../components/Section1Duplicate/Section1Duplicate";

export default function GraphicDesign() {
  return (
    <main>
      <Section1Duplicate
        titre1="Explorez de nouveaux supports"
        titre2="de communication."
        txts={[
          "Vectorisation de votre logo",
          "Création de votre identité visuelle",
          "Création de support Print et Digital",
        ]}
        spitch="Dans un monde où l'image de marque joue un rôle essentiel, notre offre de graphisme est conçue pour vous aider à vous démarquer et à captiver votre public. Spécialisés dans la vectorisation de logos, la création d'identité visuelle, ainsi que la conception de supports print et digital, nous vous offrons des solutions sur mesure pour tous vos besoins en design graphique."
        firstBtn="Contactez-nous"
        secondBtn="Une demande ?"
      />
      <GDSection2 />
    </main>
  );
}
