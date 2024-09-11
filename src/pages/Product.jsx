import { useParams } from "react-router-dom";
import NavOP from "../components/ObjetsPublicitaires/NavOP";

export default function Product() {
  const { products } = useParams();

  //   const product = categories.find((product) => cate.href === categorie);

  return (
    <main>
      <NavOP />
    </main>
  );
}
