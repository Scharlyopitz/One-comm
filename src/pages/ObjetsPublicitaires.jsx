import Section1Duplicate from "../components/Section1Duplicate/Section1Duplicate";

export default function ObjetsPublicitaires() {
  return (
    <main>
      <Section1Duplicate
        titre1="Découvrez la communication
"
        titre2="par l’objet."
        txts={[
          "Une sélection de produits originaux et innovants.",
          "Une catégorie Express 24h/48h pour les urgences.",
          "Des catégories RSE et made in France.",
        ]}
        spitch="La communication par l'objet est une stratégie marketing puissante et éprouvée, qui consiste à utiliser des objets publicitaires personnalisés pour véhiculer un message, promouvoir une marque ou renforcer des relations avec les clients. Ces objets, qu'il s'agisse de stylos, de t-shirts, de sacs ou de gadgets technologiques, sont soigneusement sélectionnés et personnalisés avec votre logo."
        firstBtn="Nos objets publicitaires"
        secondBtn="Une demande ?"
      />
    </main>
  );
}
