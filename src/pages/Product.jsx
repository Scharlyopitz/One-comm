import { useParams } from "react-router-dom";
import NavOP from "../components/ObjetsPublicitaires/NavOP";
import categories from "../assets/categories.json";

export default function Product() {
  const { products, categorie } = useParams();

  const rightCategorie = categories.find((cate) => cate.href === categorie);

  const rightProduct = rightCategorie.products.find(
    (c) => c.product.name.split(" ").join("") === products
  );

  const name = rightProduct.product.name;
  const price = rightProduct.product.price;
  const weight = rightProduct.product.weight;

  return (
    <main>
      <NavOP />
      <h1>{name}</h1>
      <h1>{price}</h1>
      <h1>{weight}</h1>
    </main>
  );
}
