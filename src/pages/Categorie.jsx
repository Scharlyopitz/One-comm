import { useParams } from "react-router-dom";
import categories from "../assets/categories.json";
import TitlePage from "../components/TitlePage/TitlePage";
import { useEffect } from "react";
import NavOP from "../components/ObjetsPublicitaires/NavOP";
import Error from "./Error";

export default function Categorie() {
  const { categorie } = useParams();

  const item = categories.find((cate) => cate.href === categorie);

  useEffect(() => {
    const body = document.querySelector("body");

    body.classList.remove("b");
  }, []);

  if (!item) {
    return <Error />;
  }

  return (
    <main>
      <TitlePage title={item.title} />
      <NavOP />
      <TopPart
        title={item.title}
        description={item.description}
        image={item.image}
      />
      <Products />
    </main>
  );
}

function TopPart({ title, description, image }) {
  return (
    <section className="TopPart" style={{ backgroundImage: `URL(${image})` }}>
      <div className="filter" />
      <div className="TopPartTxt">
        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

function Products() {
  return <section>PRODUCT</section>;
}
