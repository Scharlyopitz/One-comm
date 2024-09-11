import { useParams } from "react-router-dom";
import NavOP from "../components/ObjetsPublicitaires/NavOP";
import categories from "../assets/categories.json";

export default function Product() {
  const { products, categorie } = useParams();

  const rightCategorie = categories.find((cate) => cate.href === categorie);

  const rightProduct = rightCategorie.products.find(
    (c) => c.name.split(" ").join("") === products
  );

  return (
    <main>
      <NavOP />
      <ProductDetails rightProduct={rightProduct} />
      <MoreInformations />
    </main>
  );
}

function ProductDetails({ rightProduct }) {
  const productImages = rightProduct.productImages;
  const productCategory = rightProduct.categorie;
  const productName = rightProduct.name;
  const productRef = rightProduct.ref;
  const productDescription = rightProduct.description;
  const productPrice = rightProduct.price;
  const productQte = rightProduct.qte;

  return (
    <div className="productDetails">
      <div className="imagesContainer">
        {productImages.map((img, i) => {
          return <img key={i} src={img} alt="image" />;
        })}
      </div>
      <div className="detailsContainer">
        <div>{productCategory}</div>
        <h2>{productName}</h2>
        <span>{productRef}</span>
        <p>{productDescription}</p>
        <div>
          <div className="price">dès {productPrice}</div>
          <p>
            ATTENTION ! Ce prix correspond à un tarif unitaire et hors taxe. Il
            n'inclut pas les frais de personnalisation
          </p>
        </div>

        <p>Minimum de commande : {productQte} exemplaires</p>
        <div className="btn">
          <div className="qte">
            <p>Qte</p>
            <p>{productQte}</p>
          </div>
          <button>Ajouter au devis</button>
        </div>
      </div>
    </div>
  );
}

function MoreInformations() {
  return (
    <div>
      <div className="left">
        <h2>Plus d'informations</h2>
        <p>
          Le sac shopping en poly coton est idéal pour les courses quotidiennes.
          Fabriqué en polyester et coton de haute qualité, il est durable et
          résistant. Avec ses longues anses, il est facile à porter sur
          l’épaule, pratique et confortable. Poids de 130 gr/m², léger et facile
          à ranger. Design simple et élégant, polyvalent pour les courses, la
          plage ou le sport. Facile à nettoyer en machine à laver. Respectueux
          de l environnement, réduit les déchets plastiques. Optez pour le sac
          shopping en poly coton pour des courses écologiques et stylées.
        </p>
      </div>
      <div className="right">
        <p>Découvrez l'ensemble de nos produits personnalisables.</p>
      </div>
    </div>
  );
}
