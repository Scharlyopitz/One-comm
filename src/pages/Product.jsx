import { useParams } from "react-router-dom";
import NavOP from "../components/ObjetsPublicitaires/NavOP";
import categories from "../assets/categories.json";

export default function Product() {
  const { products } = useParams();

  console.log(categories);

  //   const product = categories.find((product) => cate.href === categorie);

  return (
    <main>
      <NavOP />
    </main>
  );
}
