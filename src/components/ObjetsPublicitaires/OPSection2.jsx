import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function OPSection2() {
  return (
    <section className="OPSection2">
      <NavOP />
      <div className="img">IMAGES</div>
      <Categories />
      <Tendance />
    </section>
  );
}

function NavOP() {
  function Left() {
    const Links = [
      { name: "Express 24 / 48h", href: "/" },
      { name: "Goodies écologiques", href: "/" },
      { name: "Made in France", href: "/" },
      { name: "Tous nos goodies", href: "/" },
    ];

    function ModalMenu() {
      const Links = [
        { name: "Express 24 / 48h", href: "/" },
        { name: "Hight-Tech", href: "/" },
        { name: "Drinkwear", href: "/" },
        { name: "écriture", href: "/" },
        { name: "Tote Bag", href: "/" },
        { name: "Goodies écologiques", href: "/" },
        { name: "Textiles et accessoires", href: "/" },
        { name: "Gastronomie / Maison", href: "/" },
        { name: "Accessoires smartphone", href: "/" },
        { name: "Outils / Bricolage", href: "/" },
        { name: "Sacs et bagagerie", href: "/" },
        { name: "Signalétique et packaging", href: "/" },
        { name: "Articles de poche", href: "/" },
        { name: "Sport et loisirs", href: "/" },
        { name: "Hygiène beauté et santé", href: "/" },
        { name: "Parapluies", href: "/" },
      ];

      return (
        <div className="modalMenu">
          {Links.map((link, i) => {
            return (
              <NavLink key={i} to={link.href}>
                {link.name}
              </NavLink>
            );
          })}
        </div>
      );
    }

    const [openModal, setOpenModal] = useState(false);

    return (
      <div className="left">
        <div onClick={() => setOpenModal(!openModal)} className="Menu">
          {openModal && <ModalMenu />}
          <div className="burgerContainer">
            <div className="burger" />
          </div>
          <p>Menu</p>
        </div>
        {Links.map((link, i) => {
          return (
            <NavLink key={i} to={link.href}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    );
  }

  function Right() {
    return (
      <div className="right">
        <input type="text" placeholder="Que recherchez-vous ?" />
        <button>Mon devis</button>
      </div>
    );
  }

  return (
    <div className="navContainer">
      <div className="nav">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Categories() {
  const categories = [
    "express",
    "informatique",
    "textile",
    "cuisine",
    "todbag",
    "écologie",
    "mugs",
    "carnet",
    "electronique",
    "outils",
    "valises",
    "panneaux",
    "porte clé",
    "sport",
    "soins",
    "parapluie",
  ];

  return (
    <div className="categoriesSection">
      <h1>Nos catégories d'objets publicitaires</h1>
      <div className="categoriesContainer">
        {categories.map((categorie, i) => {
          return (
            <div key={i} className="categorie">
              {categorie}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tendance() {
  const bestSeller = {
    image: "/",
    categorie: "super",
    ref: "ref.1304",
    name: "Tote bag en polycoton",
    weight: "150gr",
    price: "7,56€",
  };

  const cardNumber = [0, 1, 2, 3, 4, 5, 6, 7];

  const [currentItems, setCurrentItems] = useState(0);

  useEffect(() => {
    if (currentItems < 0) {
      setCurrentItems(cardNumber.length - 4);
    } else if (currentItems - 1 == cardNumber.length - 4) {
      setCurrentItems(0);
    }
  }, [currentItems]);

  function Cards({ currentItems }) {
    function Card({ currentItems }) {
      return (
        <div
          style={{
            transform: `translateX(calc(${-100 * currentItems}% - ${
              20 * currentItems
            }px))`,
          }}
          className="bestSeller"
        >
          <div className="image">IMAGE</div>
          <div className="infos">
            <div className="categorie">{bestSeller.categorie}</div>
            <div className="ref">{bestSeller.ref}</div>
            <div className="footContainer">
              <div className="nameContainer">
                <p>{bestSeller.name}</p>
                <p>{bestSeller.weight}</p>
              </div>
              <div className="price">
                <p>dès</p>
                <p>{bestSeller.price}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bestSellerContainer">
        {[...Array(cardNumber.length)].map((_, i) => {
          return <Card key={i} currentItems={currentItems} />;
        })}
      </div>
    );
  }

  return (
    <div className="tendance">
      <h1>Tendances du moment</h1>
      <div className="carroussel">
        <FontAwesomeIcon
          onClick={() => setCurrentItems(currentItems - 1)}
          icon={faChevronLeft}
        />
        <Cards currentItems={currentItems} />
        <FontAwesomeIcon
          onClick={() => setCurrentItems(currentItems + 1)}
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}
