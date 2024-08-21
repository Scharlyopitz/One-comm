import { useParams } from "react-router-dom";
import categories from "../assets/categories.json";
import TitlePage from "../components/TitlePage/TitlePage";

export default function Categorie() {
  const { categorie } = useParams();

  const item = categories.find((cate) => cate.href === categorie);

  return (
    <main>
      <TitlePage title={item.title} />
      <TopPart title={item.title} description={item.description} />
      <Products />
    </main>
  );
}

function TopPart({ title, description }) {
  return (
    <section>
      <h1>{title}</h1>

      <p>{description}</p>
    </section>
  );
}

function Products() {
  return <section>PRODUCT</section>;
}
