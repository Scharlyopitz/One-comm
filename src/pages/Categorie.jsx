import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import categories from "../assets/categories.json";
import TitlePage from "../components/TitlePage/TitlePage";
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
    <main style={{ position: "relative" }}>
      <NavOP />
      <TitlePage title={item.title} />
      <TopPart
        title={item.title}
        description={item.description}
        image={item.image}
      />
      <Products item={item.products} />
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

function Products({ item }) {
  function Product({ image, categorie, reference, name, weight, price }) {
    return (
      <NavLink to={`${name.split(" ").join("")}`} className="product">
        <img src={image} alt={name} />
        <div>{categorie}</div>
        <span>{reference}</span>
        <div className="bottom">
          <div className="bottomL">
            <p>{name}</p>
            <p>{weight}</p>
          </div>
          <div className="bottomR">
            <p>dès</p>
            <p>{price}</p>
          </div>
        </div>
      </NavLink>
    );
  }

  return (
    <section className="ProductSection">
      <div className="ProductContainer">
        {item.map((item, i) => {
          return (
            <Product
              key={i}
              image={item.image}
              categorie={item.categorie}
              reference={item.ref}
              name={item.name}
              weight={item.weight}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
