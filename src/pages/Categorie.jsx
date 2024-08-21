export default function Categorie() {
  return (
    <main>
      <TopPart />
      <Products />
    </main>
  );
}

function TopPart() {
  return (
    <section>
      <h1>Express 24h / 48h</h1>

      <p>
        Découvrez notre gamme d’objets publicitaire express. <br /> Une urgence
        ? Cette catégorie est faites pour vous. Recevez votre commande 24h / 48h
        après validation du BAT.
      </p>
    </section>
  );
}

function Products() {
  return <section>PRODUCT</section>;
}
